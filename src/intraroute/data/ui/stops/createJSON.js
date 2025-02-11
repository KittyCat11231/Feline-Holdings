const fs = require('fs');

function parseFiles(mode) {
    class preStop {
        constructor(id, stopMode, city, stopName, code, route, meta1, meta2, keywords) {
            this.id = id;
            this.stopMode = stopMode;
            this.city = city;
            this.stopName = stopName;
            this.code = code;
            this.route = route;
            this.meta1 = meta1;
            this.meta2 = meta2;
            this.keywords = keywords;
        }
    }

    class stop {
        constructor(id, stopMode, city, stopName, code, keywords) {
            this.id = id;
            this.stopMode = stopMode;
            this.city = city;
            this.stopName = stopName;
            this.code = code;
            this.keywords = keywords;
        }
        routes = [];
    }

    class routeInfo {
        constructor(route, meta1, meta2) {
            this.route = route;
            this.meta1 = meta1;
            this.meta2 = meta2;
        }
    }

    function createJSON(data) {
        let preStops = [];
        const rows = data.split('\n');
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].split(',');
            let id = row[2];
            let stopMode = mode;
            let city = row[0];
            let stopName = row[1];
            let code = row[3];
            let route = row[4];
            let meta1 = row[5];
            let meta2 = row[6];
            let keywords = [city, stopName, code];
            for (let j = 7; j < Infinity; j++) {
                if (!(row[j])) {
                    break;
                }
                keywords.push(row[j])
            }
            if (id) {
                preStops.push(new preStop(id, stopMode, city, stopName, code, route, meta1, meta2, keywords));
            }
            if (id === 'sailZQW') {
                console.log(route);
            }
        }

        let stops = [];
        stops.push(new stop(preStops[0].id, preStops[0].stopMode, preStops[0].city, preStops[0].stopName, preStops[0].code, preStops[0].keywords));
        stops[0].routes.push(new routeInfo(preStops[0].route, preStops[0].meta1, preStops[0].meta2));
        for (let i = 1; i < preStops.length; i++) {
            if (preStops[i].id !== preStops[i - 1].id) {
                stops.push(new stop(preStops[i].id, preStops[i].stopMode, preStops[i].city, preStops[i].stopName, preStops[i].code, preStops[i].keywords))
            }
            stops[stops.length - 1].routes.push(new routeInfo(preStops[i].route, preStops[i].meta1, preStops[i].meta2));
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