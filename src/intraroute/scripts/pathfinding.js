import React from 'react';

import airStops from '../data/pathfinding/air.json';
import bahnStops from '../data/pathfinding/bahn.json';
import busStops from '../data/pathfinding/bus.json';
import omegaStops from '../data/pathfinding/omega.json';
import railStops from '../data/pathfinding/rail.json';
import railLumevaStops from '../data/pathfinding/railLumeva.json';
import railScarStops from '../data/pathfinding/railScar.json';
import sailStops from '../data/pathfinding/sail.json';

import processPath from './process-path';

function pathfinding(start, end, finalPath, processedPath, filters, returnError, setReturnError) {
    console.log('start of pathfinding function');

    let allStops = [];

    function addToAllStops(modeStops) {
        for (let i = 0; i < modeStops.length; i++) {
            allStops.push(JSON.parse(JSON.stringify(modeStops[i])))
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

    if (filters.useAir === true) {
        addToAllStops(airStops);
    }
    if (filters.useBahn === true) {
        addToAllStops(bahnStops);
    }
    if (filters.useBus === true) {
        addToAllStops(busStops);
        addToAllStops(omegaStops);
    }
    if (filters.useRail === true) {
        addToAllStops(railStops);
    }
    if (filters.useRailLocal === true) {
        addToAllStops(railLumevaStops);
        addToAllStops(railScarStops);
    }
    if (filters.useSail === true) {
        addToAllStops(sailStops);
    }

    // filter out adjacent stops for non-selected modes:

    for (let i = 0; i < allStops.length; i++) {
        allStops[i].adjacentStops.forEach((stop) => {
            let mode;
            if (stop.id.indexOf('air') === 0 || stop.id.indexOf('seg') === 0 || stop.id.indexOf('wp') === 0 || stop.id.indexOf('volanti') === 0 || stop.id.indexOf('skywest') === 0 || stop.id.indexOf('gems') === 0 || stop.id.indexOf('heli') === 0 || stop.id.indexOf('segHeli') === 0 || stop.id.indexOf('heamp') === 0 || stop.id.indexOf('eastern') === 0 || stop.id.indexOf('poseidon') === 0) {
                mode = 'air';
            }
            if (stop.id.indexOf('bahn') === 0) {
                mode = 'bahn';
            }
            if (stop.id.indexOf('bus') === 0 || stop.id.indexOf('omega') === 0) {
                mode = 'bus';
            }
            if ((stop.id.indexOf('rail') === 0 && !(stop.id.includes('railLumeva') || stop.id.includes('railScar'))) || stop.id.indexOf('mcr') === 0) {
                mode = 'rail';
            }
            if (stop.id.indexOf('railLumeva') === 0 || stop.id.indexOf('railScar') === 0) {
                mode = 'railLocal';
            }
            if (stop.id.indexOf('sail') === 0) {
                mode = 'sail';
            }
            if ((mode === 'air' && filters.useAir === false) || (mode === 'bahn' && filters.useBahn === false) || (mode === 'bus' && filters.useBus === false) || (mode === 'rail' && filters.useRail === false) || (mode === 'railLocal' && filters.useRailLocal === false) || (mode === 'sail' && filters.useSail === false)) {
                allStops[i].adjacentStops = removeFromArray(allStops[i].adjacentStops, stop);
            }
        })
    }

    const stopsMap = new Map();

    for (let i = 0; i < allStops.length; i++) {
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

    let unselected;
    stopsMap.set('unselected', unselected);

    let errorCheck = false;

    if (start === end) {
        errorCheck = true;
        finalPath = 'error';
        return;
    }

    if (!(stopsMap.get(start)) || !(stopsMap.get(end))) {
        errorCheck = true;
        finalPath = 'error';
        debugger;
        return;
    }

    start = stopsMap.get(start);
    end = stopsMap.get(end);

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
            console.log(currentStop.adjacentStops[i].id);
            let adjStop = stopsMap.get(currentStop.adjacentStops[i].id);
            let adjStopNewTime = currentStop.shortestTime + currentStop.adjacentStops[i].weight;
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
            console.log(allStops);
            errorCheck = true;
            debugger;
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

    processPath(finalPath, processedPath, filters);
}

export default pathfinding;