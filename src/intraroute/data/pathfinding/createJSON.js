const fs = require('fs');

function parseFiles(mode) {
    class preStop {
        constructor(id, adjStop, weight, routes) {
            this.id = id;
            this.adjStop = adjStop;
            this.weight = weight;
            this.routes = routes;
        }
    }

    class stop {
        constructor(id) {
            this.id = id;
        }
        adjacentStops = [];
        shortestTime = Infinity;
        explored = false;
        previousStop;
        pathToStop = false;
    }

    class adjStopConnection {
        constructor(id, weight, routes) {
            this.id = id;
            this.weight = weight;
            this.routes = routes;
        }
    }

    function createJSON(data) {
        let preStops = [];
        const rows = data.split('\n');
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].split(',');
            let id = row[2];
            let adjStop = row[3];
            let weight = row[4];
            let routes = [];
            for (let j = 5; j < Infinity; j++) {
                if (!(row[j])) {
                    break;
                }
                routes.push(row[j]);
            }
            if (id) {
                preStops.push(new preStop(id, adjStop, weight, routes));
            }
        }

        let stops = [];
        stops.push(new stop(preStops[0].id));
        stops[0].adjacentStops.push(new adjStopConnection(preStops[0].adjStop, preStops[0].weight, preStops[0].routes));
        for (let i = 1; i < preStops.length; i++) {
            if (preStops[i].id !== preStops[i - 1].id) {
                stops.push(new stop(preStops[i].id));
            }
            stops[stops.length - 1].adjacentStops.push(new adjStopConnection(preStops[i].adjStop, preStops[i].weight, preStops[i].routes));
        }

        fs.writeFile(`${mode}.json`, JSON.stringify(stops), err => {
            if (err) {
                console.error(err);
            } else {
                console.log('Success!');
            }
        });
    }

    fs.readFile(`${mode}.csv`, 'utf8', function(err, data) {
        createJSON(data);
    });
}

parseFiles('bahn');
parseFiles('air');
parseFiles('rail');
parseFiles('sail');
parseFiles('bus');
parseFiles('omega');
parseFiles('railScar');
parseFiles('railLumeva');