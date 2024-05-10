import { finalPath } from './pathfinding.js';

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

let useAir = true;
let useBahn = true;
let useBus = true;
let useRail = true;
let useRailLocal = true;
let useSail = true;

let allStops = [];
let allRoutes = [];

function addToArray(originArray, targetArray) {
    for (let i = 0; i < originArray.length; i++) {
        targetArray.push(originArray[i]);
    }
}

function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

function removeFromArray(array, removeMe) {
    let newArray = array.filter((value) => value !== removeMe);
    return newArray;
}

function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

if (useAir === true) {
    addToArray(airStops, allStops);
    addToArray(airRoutes, allRoutes);
}
if (useBahn === true) {
    addToArray(bahnStops, allStops);
    addToArray(bahnRoutes, allRoutes);
}
if (useBus === true) {
    addToArray(busStops, allStops);
    addToArray(busRoutes, allRoutes);
    addToArray(omegaStops, allStops);
    addToArray(omegaRoutes, allRoutes);
}
if (useRail === true) {
    addToArray(railStops, allStops);
    addToArray(railRoutes, allRoutes);
}
if (useRailLocal === true) {
    addToArray(railLumevaStops, allStops);
    addToArray(railLumevaRoutes, allRoutes);
    addToArray(railScarStops, allStops);
    addToArray(railScarRoutes, allRoutes);
}
if (useSail === true) {
    addToArray(sailStops, allStops);
    addToArray(sailRoutes, allRoutes);
}

const stopsMap = new Map();
const routesMap = new Map();

for (let i = 0; i < allStops.length; i++) {
    window[allStops[i].id] = allStops[i];
    stopsMap.set(allStops[i].id, allStops[i]);
    for (let j = 0; j < allStops[i].keywords.length; j++) {
        if (allStops[i].keywords[j] === '\r') {
            allStops[i].keywords = removeFromArray(allStops[i].keywords, allStops[i].keywords[j]);
        } else if (allStops[i].keywords[j].includes('\r')) {
            allStops[i].keywords[j] = allStops[i].keywords[j].replace('\r', '');
        }
    }
    for (let j = 0; j < allStops[i].routes.length; j++) {
        if (allStops[i].routes[j] === '\r') {
            allStops[i].routes = removeFromArray(allStops[i].routes, allStops[i].routes[j]);
        } else if (allStops[i].routes[j].includes('\r')) {
            allStops[i].routes[j] = allStops[i].routes[j].replace('\r', '');
        }
    }
}

for (let i = 0; i < allRoutes.length; i++) {
    window[allRoutes[i].id] = allRoutes[i];
    routesMap.set(allRoutes[i].id, allRoutes[i]);
    if (allRoutes[i].destinationStopName.includes('\r')) {
        allRoutes[i].destinationStopName = allRoutes[i].destinationStopName.replace('\r', '');
    }
    if (Array.isArray(allRoutes[i].codeshares)) {
        for (let j = 0; j < allRoutes[i].codeshares.length; j++) {
            if (allRoutes[i].codeshares[j] === '\r') {
                allRoutes[i].codeshares = removeFromArray(allRoutes[i].codeshares, allRoutes[i].codeshares[j]);
            } else if (allRoutes[i].codeshares[j].includes('\r')) {
                allRoutes[i].codeshares[j] = allRoutes[i].codeshares[j].replace('\r', '');
            }
        }
    }
    if (Array.isArray(allRoutes[i].useFullNameIn)) {
        for (let j = 0; j < allRoutes[i].useFullNameIn.length; j++) {
            if (allRoutes[i].useFullNameIn[j] === '\r') {
                allRoutes[i].useFullNameIn = removeFromArray(allRoutes[i].useFullNameIn, allRoutes[i].useFullNameIn[j]);
            } else if (allRoutes[i].useFullNameIn[j].includes('\r')) {
                allRoutes[i].useFullNameIn[j] = allRoutes[i].useFullNameIn[j].replace('\r', '');
            }
        }
    }
}

class stopStandalone {
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
    constructor (route) {
        this.route = route;
    }
}

let processedPath = [];

function processPath() {
    if (finalPath === 'error') {
        processedPath = 'error';
        return;
    }
    let originMode = stopsMap.get(finalPath[0].stop1).stopMode;
    let originCity = stopsMap.get(finalPath[0].stop1).city;
    let originStopName = stopsMap.get(finalPath[0].stop1).stopName;
    let originCode = stopsMap.get(finalPath[0].stop1).code;

    processedPath.push(new stopStandalone(originMode, originCity, originStopName, originCode))

    for (let i = 0; i < finalPath.length; i++) {
        if (!(finalPath[i].routes.includes('walk') || finalPath[i].routes.includes('walkToBluemont') || finalPath[i].routes.includes('walkToMandela') || finalPath[i].routes.includes('yellowLineToForestville') || finalPath[i].routes.includes('yellowLineToParkour') || finalPath[i].routes.includes('marinaShuttleNorth') || finalPath[i].routes.includes('marinaShuttleSouth'))) {
            let segmentRoutes = [];
            for (let j = 0; j < finalPath[i].routes.length; j++) {
                let mode = routesMap.get(finalPath[i].routes[j]).mode;
                let type = routesMap.get(finalPath[i].routes[j]).type;
                let route = finalPath[i].routes[j];
                let num = routesMap.get(finalPath[i].routes[j]).num;
                let routeName = routesMap.get(finalPath[i].routes[j]).routeName;
                let destinationCity = routesMap.get(finalPath[i].routes[j]).destinationCity;
                let destinationStopName = routesMap.get(finalPath[i].routes[j]).destinationStopName;
                let codeshare1 = 'null';
                let codeshare2 = 'null';
                if (Array.isArray(finalPath[i].routes[j].codeshares)) {
                    codeshare1 = finalPath[i].routes[j].codeshares[0];
                    if (finalPath[i].routes[j].codeshares[1]) {
                        codeshare2 = finalPath[i].routes[j].codeshares[1];
                    }
                }
                let stop1city = stopsMap.get(finalPath[i].stop1).city;
                let stop1stopName = stopsMap.get(finalPath[i].stop1).stopName;
                let stop1code = stopsMap.get(finalPath[i].stop1).code;
                let stop1meta1;
                let stop1meta2;
                for (let k = 0; k < stopsMap.get(finalPath[i].stop1).routes.length; k++) {
                    if (stopsMap.get(finalPath[i].stop1).routes[k] === route) {
                        stop1meta1 = stopsMap.get(finalPath[i].stop1).routes[k].meta1;
                        stop1meta2 = stopsMap.get(finalPath[i].stop1).routes[k].meta2;
                        break;
                    }
                }
                let stop2city = stopsMap.get(finalPath[i].stop2).city;
                let stop2stopName = stopsMap.get(finalPath[i].stop2).stopName;
                let stop2code = stopsMap.get(finalPath[i].stop2).code;
                let stop2meta1;
                let stop2meta2;
                for (let k = 0; k < stopsMap.get(finalPath[i].stop2).routes.length; k++) {
                    if (stopsMap.get(finalPath[i].stop2).routes[k] === route) {
                        stop2meta1 = stopsMap.get(finalPath[i].stop2).routes[k].meta1;
                        stop2meta2 = stopsMap.get(finalPath[i].stop2).routes[k].meta2;
                        break;
                    }
                }
                let stop1 = new stopInSegment(stop1city, stop1stopName, stop1code, stop1meta1, stop1meta2);
                let stop2 = new stopInSegment(stop2city, stop2stopName, stop2code, stop2meta1, stop2meta2);
                let stopCount = finalPath[i].stopCount;
                segmentRoutes.push(new segmentRoute(mode, type, route, num, routeName, destinationCity, destinationStopName, codeshare1, codeshare2, stop1, stop2, stopCount))
            }
            processedPath.push(new segment(segmentRoutes, finalPath[i].stop1, finalPath[i].stop2, stopCount));
        } else {
            processedPath.push(new walk(finalPath[i].routes[0]));

            let mode = stopsMap.get(finalPath[i].stop2).stopMode;
            let city = stopsMap.get(finalPath[i].stop2).city;
            let stopName = stopsMap.get(finalPath[i].stop2).stopName;
            let code = stopsMap.get(finalPath[i].stop2).code;

            processedPath.push(new stopStandalone(mode, city, stopName, code));
        }
    }
}

processPath();

export default { processedPath };