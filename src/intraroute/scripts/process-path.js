import airRoutes from '../data/ui/routes/air.json';
import airStops from '../data/ui/stops/air.json';

import bahnRoutes from '../data/ui/routes/bahn.json';
import bahnStops from '../data/ui/stops/bahn.json';

import busRoutes from '../data/ui/routes/bus.json';
import busStops from '../data/ui/stops/bus.json';

import omegaRoutes from '../data/ui/routes/omega.json';
import omegaStops from '../data/ui/stops/omega.json';

import railRoutes from '../data/ui/routes/rail.json';
import railStops from '../data/ui/stops/rail.json';

import railLumevaRoutes from '../data/ui/routes/railLumeva.json';
import railLumevaStops from '../data/ui/stops/railLumeva.json';

import railScarRoutes from '../data/ui/routes/railScar.json';
import railScarStops from '../data/ui/stops/railScar.json';

import sailRoutes from '../data/ui/routes/sail.json';
import sailStops from '../data/ui/stops/sail.json';

import methods from '../../scripts/methods';
import cleanJSON from './clean-json';

function processPath(finalPath, processedPath, filters) {

    if (finalPath === 'error') {
        processedPath = 'error';
        return;
    }

    let allStops = [];
    let allRoutes = [];

    if (filters.useAir === true) {
        for (let airStop of airStops) {
            for (let route of airStop.routes) {
                let routeSplit = route.route.split('to');
                route.route = routeSplit[0] + 'to';
            }
        }
        methods.mergeArrayIntoArray(airStops, allStops);
        methods.mergeArrayIntoArray(airRoutes, allRoutes);
    }
    if (filters.useBahn === true) {
        methods.mergeArrayIntoArray(bahnStops, allStops);
        methods.mergeArrayIntoArray(bahnRoutes, allRoutes);
    }
    if (filters.useBus === true) {
        methods.mergeArrayIntoArray(busStops, allStops);
        methods.mergeArrayIntoArray(busRoutes, allRoutes);
        methods.mergeArrayIntoArray(omegaStops, allStops);
        methods.mergeArrayIntoArray(omegaRoutes, allRoutes);
    }
    if (filters.useRail === true) {
        methods.mergeArrayIntoArray(railStops, allStops);
        methods.mergeArrayIntoArray(railRoutes, allRoutes);
    }
    if (filters.useRailLocal === true) {
        methods.mergeArrayIntoArray(railLumevaStops, allStops);
        methods.mergeArrayIntoArray(railLumevaRoutes, allRoutes);
        methods.mergeArrayIntoArray(railScarStops, allStops);
        methods.mergeArrayIntoArray(railScarRoutes, allRoutes);
    }
    if (filters.useSail === true) {
        methods.mergeArrayIntoArray(sailStops, allStops);
        methods.mergeArrayIntoArray(sailRoutes, allRoutes);
    }

    for (let i = 0; i < finalPath.length; i++) {
        for (let j = 0; j < finalPath[i].routes.length; j++) {
            if (finalPath[i].routes[j].includes('to')) {
                let routeSplit = finalPath[i].routes[j].split('to');
                finalPath[i].routes[j] = routeSplit[0] + 'to';
            }
        }
    }

    const stopsMap = new Map();
    const routesMap = new Map();

    cleanJSON('ui-stops', allStops, stopsMap);
    cleanJSON('ui-routes', allRoutes, routesMap);

    class stopStandalone {
        element = 'stopStandalone';
        constructor (mode, city, stopName, code) {
            this.mode = mode;
            this.city = city;
            this.stopName = stopName;
            this.code = code;
        }
    }

    class stopInSegment {
        constructor (city, stopName, code, meta1, meta2) {
            this.city = city;
            this.stopName = stopName;
            this.code = code;
            this.meta1 = meta1;
            this.meta2 = meta2;
        }
    }

    class segment {
        element = 'segment';
        constructor (routes, stop1, stop2, stopCount) {
            this.routes = routes;
            this.stop1 = stop1;
            this.stop2 = stop2;
            this.stopCount = stopCount;
        }
    }

    class segmentRoute {
        constructor (mode, type, route, num, routeName, destinationCity, destinationStopName, codeshare1, codeshare2, stop1, stop2, stopCount) {
            this.mode = mode;
            this.type = type;
            this.route = route;
            this.num = num;
            this.routeName = routeName;
            this.destinationCity = destinationCity;
            this.destinationStopName = destinationStopName;
            this.codeshare1 = codeshare1;
            this.codeshare2 = codeshare2;
            this.stop1 = stop1;
            this.stop2 = stop2;
            this.stopCount = stopCount;
        }
    }

    class walk {
        element = 'walk';
        constructor (route) {
            this.route = route;
        }
    }

    if (finalPath === 'error') {
        processedPath = 'error';
        return;
    }
    let originMode = stopsMap.get(finalPath[0].stop1).stopMode;
    let originCity = stopsMap.get(finalPath[0].stop1).city;
    let originStopName = stopsMap.get(finalPath[0].stop1).stopName;
    let originCode = stopsMap.get(finalPath[0].stop1).code;

    processedPath.push(new stopStandalone(originMode, originCity, originStopName, originCode))

    for (let path of finalPath) {
        if (!path.routes.some(r => [
            'walk',
            'walkToBluemont',
            'walkToMandela',
            'yellowLineToForestville',
            'yellowLineToParkour',
            'marinaShuttleNorth',
            'marinaShuttleSouth'
        ].includes(r))) {
            let segmentRoutes = [];
            for (let routeID of path.routes) {
                let route = routesMap.get(routeID);
                let codeshare1 = 'null';
                let codeshare2 = 'null';
                if (Array.isArray(route.codeshares)) {
                    codeshare1 = route.codeshares[0];
                    if (route.codeshares[1]) {
                        codeshare2 = route.codeshares[1];
                        debugger;
                    }
                }
                let stop1 = stopsMap.get(path.stop1);
                let stop1meta1 = 'null';
                let stop1meta2 = 'null';
                console.log(stop1.routes);
                for (let stopRoute of stop1.routes) {
                    if (stopRoute.route === route.id) {
                        stop1meta1 = stopRoute.meta1;
                        stop1meta2 = stopRoute.meta2;
                        break;
                    }
                }
                let stop2 = stopsMap.get(path.stop2)
                let stop2meta1 = 'null';
                let stop2meta2 = 'null';
                for (let stopRoute of stop2.routes) {
                    if (stopRoute.route === route.id) {
                        stop2meta1 = stopRoute.meta1;
                        stop2meta2 = stopRoute.meta2;
                        break;
                    }
                }
                let stop1InSegment = new stopInSegment(stop1.city, stop1.stopName, stop1.code, stop1meta1, stop1meta2);
                let stop2InSegment = new stopInSegment(stop2.city, stop2.stopName, stop2.code, stop2meta1, stop2meta2);
                let stopCount = path.stopCount;
                segmentRoutes.push(new segmentRoute(route.mode, route.type, route, route.num, route.routeName, route.destinationCity, route.destinationStopName, codeshare1, codeshare2, stop1InSegment, stop2InSegment, stopCount))
            }
            let stop1 = stopsMap.get(path.stop1);
            let stop2 = stopsMap.get(path.stop2);

            let stop1InSegment = new stopInSegment(stop1.city, stop1.stopName, stop1.code, 'null', 'null');
            let stop2InSegment = new stopInSegment(stop2.city, stop2.stopName, stop2.code, 'null', 'null');
            let stopCount = path.stopCount;
            processedPath.push(new segment(segmentRoutes, stop1InSegment, stop2InSegment, stopCount));
        } else {
            processedPath.push(new walk(path.routes[0]));

            let stop2 = stopsMap.get(path.stop2);
            processedPath.push(new stopStandalone(stop2.stopMode, stop2.city, stop2.stopName, stop2.code));
        }
    }
}

export default processPath;