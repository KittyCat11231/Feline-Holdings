require('dotenv').config();

const { google } = require('googleapis');

const googleSheets = google.sheets({
    version: 'v4',
    auth: process.env.GOOGLE_SHEETS_API_KEY
})

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

class Route {
    constructor(id) {
        this.id = id;
    }
    stops = [];
    type = 'null';
    num = 'null';
    name = 'null';
    destination = 'null';
    mode = 'null';
}

class Stop {
    constructor(id) {
        this.id = id;
    }
    meta1 = 'null';
    meta2 = 'null';
    nextStop = 'TERMINUS';
}

async function getRouteList(stopsPath, stopsMeta, routesFromJson, mode) {

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

        if (routeJson.id === 'bus313') {
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
        route.mode = mode;

        routes.push(route);

    }

    for (let route of routes) {

        if (route.id === 'bus313') {
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
                console.log(stop);
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