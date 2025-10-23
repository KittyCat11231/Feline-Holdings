const fs = require('fs');

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
}

class Stop {
    constructor(id) {
        this.id = id;
    }
    meta1 = null;
    meta2 = null;
    nextStop = null;
}

async function placeholder(stopsPath, stopsMeta, routes) {

    let stopsPathMap = new Map();
    let stopsMetaMap = new Map();
    let routesMap = new Map();

    let routeIds = [];

    for (let stopJson of stopsPath) {
        let stop = new Stop(stopJson.id);
        stopsPathMap.set(stop.id, stopJson);
    }

    for (let stopJson of stopsMeta) {
        stopsMetaMap.set(stopJson.id, stopJson);
    }

    for (let routeJson of routes) {

        if (routeJson.id === 'bus313') {
            continue;
        }

        let route = new Route(routeJson.id);
        routesMap.set(route.id, route);
        routeIds.push(route.id);

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
                    debugger;
                    break;
                }
            }

            route.stops.push(stop);

        }

        console.log(route.id);
        console.log(route.stops);

    }

}

placeholder(busStopsPath, busStopsMeta, busRoutes);