import helpers from '@kyle11231/helper-functions';

function cleanJSON(dataType, array, map) {
    if (dataType === 'pathfinding') {
        array.forEach(stop => {
            map.set(stop.id, stop);
            stop.shortestTime = Infinity;
            stop.adjacentStops.forEach(adjStop => {
                adjStop.weight = Number(adjStop.weight);
                adjStop.routes.forEach(route => {
                    if (route === '\r') {
                        adjStop.routes = helpers.removeFromArray(adjStop.routes, route);
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
            stop.keywords = stop.keywords.filter(keyword => {
                return keyword !== '/r';
            }).map(keyword => {
                return keyword.replace('/r','')
            })
        })
    }
}

export default cleanJSON;