import methods from '../../scripts/methods';

function cleanJSON(dataType, array, map = null) {
    if (dataType === 'pathfinding-stops') {
        array.forEach(stop => {
            map.set(stop.id, stop);
            stop.shortestTime = Infinity;
            stop.adjacentStops.forEach(adjStop => {
                adjStop.weight = Number(adjStop.weight);
                adjStop.routes.forEach(route => {
                    if (route === '\r') {
                        adjStop.routes = methods.removeFromArray(adjStop.routes, route);
                    } else if (route.includes('\r')) {
                        route = route.replace('\r', '');
                    }
                })
            })
        })
    }

    if (dataType === 'ui-stops') {
        array.forEach(stop => {
            map.set(stop.id, stop);
            stop.keywords.forEach(keyword => {
                if (keyword === '\r') {
                    stop.keywords = methods.removeFromArray(stop.keywords, keyword);
                } else if (keyword.includes('\r')) {
                    keyword = keyword.replace('\r', '');
                }
            })
            stop.routes.forEach(route => {
                if (route.meta2 === '\r') {
                    route.meta2 = 'null'
                } else if (route.meta2.includes('\r')) {
                    route.meta2 = route.meta2.replace('\r', '');
                }
            })
        })
    }

    if (dataType === 'ui-routes') {
        array.forEach(route => {
            map.set(route.id, route);
            route.destinationStopName = route.destinationStopName?.replace('\r', '');
            if (Array.isArray(route.codeshares)) {
                route.codeshares.forEach(codeshare => {
                    if (codeshare === '\r') {
                        route.codeshares = methods.removeFromArray(route.codeshares, codeshare);
                    } else if (codeshare.includes('\r')) {
                        codeshare = codeshare.replace('\r', '');
                    }
                })
            }
            if (Array.isArray(route.useFullNameIn)) {
                route.useFullNameIn.forEach(stop => {
                    if (stop === '\r') {
                        route.useFullNameIn = methods.removeFromArray(route.useFullNameIn, stop);
                    } else if (stop.includes('\r')) {
                        stop = stop.replace('\r', '');
                    }
                })
            }
        })
    }

    if (dataType = 'search-stops') {
        array.forEach(stop => {
            if (!(Array.isArray(stop.keywords))) {
                debugger;
            }
            stop.keywords.forEach(keyword => {
                if (keyword === '\r') {
                    stop.keywords = methods.removeFromArray(stop.keywords, keyword);
                } else if (keyword.includes('\r')) {
                    keyword = keyword.replace('\r', '');
                }
            })
        })
    }
}

export default cleanJSON;