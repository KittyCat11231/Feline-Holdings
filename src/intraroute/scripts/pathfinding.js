/*

IntraRoute Pathfinding Script

This script calculates pathfinding between the origin and destination set by the user and returns the best route.

Designed for Intra by Roy Disney Softworks.
Developed by kyle11231 with help from DNAmaster10 & scarycrumb.

*/

import airStops from '../data/pathfinding/air.json';
import bahnStops from '../data/pathfinding/bahn.json';
import busStops from '../data/pathfinding/bus.json';
import omegaStops from '../data/pathfinding/omega.json';
import railStops from '../data/pathfinding/rail.json';
import railLumevaStops from '../data/pathfinding/railLumeva.json';
import railScarStops from '../data/pathfinding/railScar.json';
import sailStops from '../data/pathfinding/sail.json';

let useAir = true;
let useBahn = true;
let useBus = true;
let useRail = true;
let useRailLocal = true;
let useSail = true;

let allStops = [];

function addToAllStops(modeStops) {
    for (let i = 0; i < modeStops.length; i++) {
        allStops.push(modeStops[i]);
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

function filterRoutes(pathArray) {

    let commonRoutesForFilter = findCommonElements(pathArray[pathArray.length - 1].routes, pathArray[pathArray.length - 2].routes);

    if (!(commonRoutesForFilter)) {
        return;
    }

    for (let i = (pathArray.length - 1); i >= 0; i--) {
        let commonRoutes3 = findCommonElements(commonRoutesForFilter, pathArray[i].routes);

        if (commonRoutes3.length > 0) {
            pathArray[i].routes = commonRoutesForFilter
        } else {
            break;
        }
    }
}

if (useAir === true) {
    addToAllStops(airStops);
}
if (useBahn === true) {
    addToAllStops(bahnStops);
}
if (useBus === true) {
    addToAllStops(busStops);
    addToAllStops(omegaStops);
}
if (useRail === true) {
    addToAllStops(railStops);
}
if (useRailLocal === true) {
    addToAllStops(railLumevaStops);
    addToAllStops(railScarStops);
}
if (useSail === true) {
    addToAllStops(sailStops);
}

const stopsMap = new Map();

for (let i = 0; i < allStops.length; i++) {
    window[allStops[i].id] = allStops[i];
    stopsMap.set(allStops[i].id, allStops[i]);
    allStops[i].shortestTime = Infinity;
    for (let j = 0; j < allStops[i].adjacentStops.length; j++) {
        allStops[i].adjacentStops[j].weight = Number(allStops[i].adjacentStops[j].weight);

        // removes \r from adjacent stop routes in JSON imported data:

        for (let k = 0; k < allStops[i].adjacentStops[j].routes.length; k++) {
            if (allStops[i].adjacentStops[j].routes[k] === '\r') {
                allStops[i].adjacentStops[j].routes = removeFromArray(allStops[i].adjacentStops[j].routes, allStops[i].adjacentStops[j].routes[k]);
            } else if (allStops[i].adjacentStops[j].routes[k].includes('\r')) {
                allStops[i].adjacentStops[j].routes[k] = allStops[i].adjacentStops[j].routes[k].replace('\r', '');
            }
        }
    }
}

class pathSegment {
    constructor(stop1, stop2, routes, stopCount) {
        this.stop1 = stop1;
        this.stop2 = stop2;
        this.routes = routes;
        this.stopCount = stopCount;
    }
}

let start = stopsMap.get('bahnKNX');
let end = stopsMap.get('omegaKIT');

let unselected;
stopsMap.set('unselected', unselected);

let finalPath;
let errorCheck = false;

function pathfinding() {

    if (start === unselected || end === unselected) {
        alert('You must choose an origin and destination!');
        return;
    } else if (start === end) {
        alert('You can\'t choose the same stop for your origin and destination, you silly goose!');
        return;
    }

    start.shortestTime = 0;
    start.explored = true;

    let currentStop = start;

    let exploredStops = [];
    let unexploredStops = [];

    for (let i = 0; i < allStops.length; i++) {
        if (allStops[i].explored === true) {
            exploredStops.push(allStops[i]);
        } else {
            unexploredStops.push(allStops[i]);
        }
    }

    // dijkstra's algorithm loop

    while (unexploredStops.length > 0) {

        let currentStopAtStartOfLoop = currentStop;

        // Iterates through every adjacent stop.

        for (let i = 0; i < currentStop.adjacentStops.length; i++) {
            let adjStop = stopsMap.get(currentStop.adjacentStops[i].id);
            let adjStopNewTime = currentStop.shortestTime + currentStop.adjacentStops[i].weight;
            if (!(adjStop)) {
                debugger;
            }
            let routesLastLeg = currentStop.adjacentStops[i].routes;
            let pathLastLeg = new pathSegment(currentStop.id, adjStop.id, routesLastLeg, 1);
            let adjStopPath = [pathLastLeg];

            let transferNeeded;

            if (currentStop.pathToStop !== false) {
                let pathToCurrentStop = JSON.parse(JSON.stringify(currentStop.pathToStop));

                for (let i = (pathToCurrentStop.length - 1); i >= 0; i--) {
                    adjStopPath.unshift(pathToCurrentStop[i]);
                }
            
                let commonRoutes = findCommonElements(adjStopPath[adjStopPath.length - 1].routes, adjStopPath[adjStopPath.length - 2].routes);
            
                if (commonRoutes.length > 0) {
                    filterRoutes(adjStopPath);
                    transferNeeded = false;
                } else {
                    transferNeeded = true;
                }
            } else {
                transferNeeded = false;
            }

            if (transferNeeded === true) {
                adjStopNewTime += 10;
            }

            if (adjStopNewTime < adjStop.shortestTime) {
                adjStop.shortestTime = adjStopNewTime;
                adjStop.previousStop = currentStop;
                adjStop.pathToStop = adjStopPath;
            } 
        }

        // Puts unexplored stops with a non-infinity shortest time in their own array.

        let unexploredNonInfinity = [];

        for (let i = 0; i < unexploredStops.length; i++) {
            if (unexploredStops[i].shortestTime !== Infinity) {
                unexploredNonInfinity.push(unexploredStops[i]);
            }
        }

        /*
        
        Creates an array with the shortest times of all unexplored stops (except infinity time ones),
        then finds the smallest number.

        */

        let unexploredShortestTimes = [];

        for (let i = 0; i < unexploredNonInfinity.length; i++) {
            unexploredShortestTimes.push(unexploredNonInfinity[i].shortestTime)
        }

        let unexploredShortestTimeMin = Math.min(...unexploredShortestTimes);

        /*
        
        Checks all unexplored stops (except infinity time ones). Once it finds a stop matching the shortest
        time found by the code above, it sets that to the current stop.

        */

        for (let i = 0; i < unexploredNonInfinity.length; i++) {
            if (unexploredNonInfinity[i].shortestTime === unexploredShortestTimeMin) {
                currentStop = unexploredNonInfinity[i];
                break;
            } 
        }

        // Sets the current stop as explored and edits the corresponding arrays accordingly.

        currentStop.explored = true;
        exploredStops.push(currentStop);

        unexploredStops = removeFromArray(unexploredStops, currentStop);

        /*
        
        If the new current stop is the destination set by the user, great! We just found the shortest time to the
        destination and logged the "previous stop" for every stop along the way.

        Otherwise, the loop continues again with the new current stop.
        
        */

        if (currentStop === end) {
            break;
        }

        if (currentStop.id === currentStopAtStartOfLoop.id) {
            console.log('ERROR: New current stop assignment failed.');
            console.log('currentStop:');
            console.log(currentStop);
            errorCheck = true;
            break;
        }
    }

    if (errorCheck === false) {
        finalPath = end.pathToStop;

        // Iterates through every pathSegment.
        for (let i = 0; i < (finalPath.length - 1);) {
            // If the current pathSegment has the same routes as the next pathSegment, combines them together.
            if (deepEqual(finalPath[i].routes, finalPath[i + 1].routes)) {
                finalPath[i].stop2 = finalPath[i + 1].stop2;
                finalPath[i].stopCount += 1;
                finalPath = removeFromArray(finalPath, finalPath[i + 1])
            } else {
                i += 1;
                // i only increases if the if statement is false, so the loop will always double check its work.
            }
        }
    } else {
        finalPath = 'error';
    }
}

pathfinding();

export default finalPath;