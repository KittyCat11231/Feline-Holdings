require('dotenv').config();

const { google } = require('googleapis');

const googleSheets = google.sheets({
    version: 'v4',
    auth: new google.auth.GoogleAuth({
        keyFile: './secret-key.json',
        scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/spreadsheets']
    })
})

const spreadsheetId = '1jkM-lYy3ryhUfAQtWy7lxYyCGh9DaByjthEqaCyy6Ws';

const airStopsPath = require('./pathfinding/air.json');
const railStopsPath = require('./pathfinding/rail.json');
const busStopsPath = require('./pathfinding/bus.json');
const sailStopsPath = require('./pathfinding/sail.json');
const omegaStopsPath = require('./pathfinding/omega.json');

const airStopsMeta = require('./ui/stops/air.json');
const railStopsMeta = require('./ui/stops/rail.json');
const busStopsMeta = require('./ui/stops/bus.json');
const sailStopsMeta = require('./ui/stops/sail.json');
const omegaStopsMeta = require('./ui/stops/omega.json');

const airRoutes = require('./ui/routes/air.json');
const railRoutes = require('./ui/routes/rail.json');
const busRoutes = require('./ui/routes/bus.json');
const sailRoutes = require('./ui/routes/sail.json');
const omegaRoutes = require('./ui/routes/omega.json');

const excludeList = ['bus313', 'rail_2Xnorth', 'rail_2Xsouth'];

class Route {
    constructor(id) {
        this.id = id;
    }
    stops = [];
    type = 'null';
    num = 'null';
    name = 'null';
    destination = 'null';
}

class Stop {
    constructor(id) {
        this.id = id;
    }
    meta1 = 'null';
    meta2 = 'null';
    nextStop = 'TERMINUS';
}

function getRouteList(stopsPath, stopsMeta, routesFromJson, mode) {

    let stopsPathMap = new Map();
    let stopsMetaMap = new Map();
    let routesMap = new Map();

    let routes = [];

    for (let stopJson of stopsPath) {
        let stop = new Stop(stopJson.id);
        stopsPathMap.set(stop.id, stopJson);
    }

    for (let stopJson of stopsMeta) {
        stopsMetaMap.set(stopJson.id, stopJson);
    }

    for (let routeJson of routesFromJson) {

        if (excludeList.includes(routeJson.id)) {
            continue;
        }

        let route = new Route(routeJson.id);
        routesMap.set(route.id, route);

        for (let stopJson of stopsMeta) {

            let stop = new Stop(stopJson.id);
            let routeStopsHere = false;

            for (let routeWithMeta of stopJson.routes) {
                if (routeWithMeta.route === route.id) {
                    routeStopsHere = true;
                    stop.meta1 = routeWithMeta.meta1;
                    stop.meta2 = routeWithMeta.meta2;
                    break;
                }
            }

            if (!routeStopsHere) {
                continue;
            }

            let stopPath = stopsPathMap.get(stop.id);

            for (let adjStop of stopPath.adjacentStops) {
                if (adjStop.routes.includes(route.id)) {
                    stop.nextStop = adjStop.id;
                    break;
                }
            }

            route.stops.push(stop);

        }

        route.type = routeJson.type;
        route.num = routeJson.num;
        route.name = routeJson.name;

        routes.push(route);

    }

    for (let route of routes) {

        if (excludeList.includes(route.id)) {
            continue;
        }

        let stopsSorted = [];

        for (let stop of route.stops) {
            if (stop.nextStop === 'TERMINUS') {
                stopsSorted.push(stop);
                route.destination = stop.id;
            }
        }

        let stopsLeftToSort = route.stops.length - 1;

        while (stopsLeftToSort > 0) {
            let continueLoop = false;
            for (let stop of route.stops) {
                if (!stopsSorted[0]) {
                    console.log('debug');
                }
                if (stop.nextStop === stopsSorted[0].id) {
                    stopsSorted.unshift(stop);
                    stopsLeftToSort -= 1;
                    continueLoop = true;
                }
            }

            if (!continueLoop) {
                break;
            }
        }

        route.stops = stopsSorted;
    }

    return routes;

}

const busData = getRouteList(busStopsPath, busStopsMeta, busRoutes, 'bus');
const railData = getRouteList(railStopsPath, railStopsMeta, railRoutes, 'rail');
const sailData = getRouteList(sailStopsPath, sailStopsMeta, sailRoutes, 'sail');
const omegaData = getRouteList(omegaStopsPath, omegaStopsMeta, omegaRoutes, 'omega');

function makeRows(modeData) {

    let rows = [];

    for (let route of modeData) {

        if (!route.stops[0]) {
            console.log('debug here');
        }

        rows.push([route.id, route.type, route.num, route.name, route.destination, route.stops[0].id, route.stops[0].meta1, route.stops[0].meta2, 'null', 'null', 'null', 'null']);

        for (let stop of route.stops) {

            if (stop.id === route.stops[0].id) {
                continue;
            }

            rows.push(['', '', '', '', '', stop.id, stop.meta1, stop.meta2, 'null', 'null', 'null', 'null']);

        }

        rows.push(['', '', '', '', '', '', '', '', '', '', '', '']);

    }

    return rows;
}

const busRows = makeRows(busData);
const railRows = makeRows(railData);
const sailRows = makeRows(sailData);
const omegaRows = makeRows(omegaData);

async function uploadRows(modeRows, sheet) {

    try {
        
        await googleSheets.spreadsheets.values.append({
            spreadsheetId,
            range: `'${sheet}'A:L`,
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: modeRows
            }
        })
        console.log(`Uploaded ${sheet} to Google Sheets.`);

    } catch (error) {
        console.error(`Failed to upload ${sheet} to Google Sheets.`);
        console.error(error);
    }
}

async function uploadAllRows() {

    await uploadRows(busRows, 'bus routes');
    await uploadRows(railRows, 'rail routes');
    await uploadRows(sailRows, 'sail routes');
    await uploadRows(omegaRows, 'omega routes');

    console.log('finish');

}

uploadAllRows();