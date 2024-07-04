// imports for source data

function generateRoutes(myStopId) {
  
  // source data in allStopsPath array and allStopsUI array
  // map each stop to its id value in allStopsUIMap and allStopsPathMap
  
  myStopPath = allStopsPathMap.get(myStopId);
  myStopUI = allStopsUIMap.get(myStopId);
  
  let routesFromThisStop = [];
  
  class Route {
    constructor(id, meta1, meta2) {
      this.id = id;
      this.meta1 = meta1;
      this.meta2 = meta2;
    }
    stopsToEnd = [];
    addStop(stop) {
      this.stopsToEnd.push(stop)
    }
  }
  
  myStopUI.routes.forEach(route => {
    let thisRoute = new Route(route.id, route.meta1, route.meta2);
    myStopPath.adjacentStops.forEach(adjStop => {
      adjStop.routes.forEach(adjStopRoute => {
        if (adjStopRoute === thisRoute.id) {
          thisRoute.addStop(adjStop.id);
          break;
        }
      })
    })
    while (true) {
      let breakLoop = true;
      let thisStop = allStopsPathMap.get(thisRoute.stopsToEnd[thisRoute.stopsToEnd.length - 1]);
      thisStop.adjacentStops.forEach(adjStop => {
        adjStop.routes.forEach(adjStopRoute => {
          if (adjStopRoute === thisRoute.id) {
            thisRoute.addStop(adjStop.id);
            breakLoop = false;
            break;
          }
        })
      })
      if (breakLoop) {
        break;
      }
    }
    routesFromThisStop.push(thisRoute);
  })
  return routesFromThisStop;
}