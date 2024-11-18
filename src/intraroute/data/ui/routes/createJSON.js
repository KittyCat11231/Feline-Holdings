const fs = require('fs');

function parseFiles(mode) {
    class route {
        constructor(id, mode, type, bullet, num, altText, routeName, destination, destinationCity, destinationStopName, useFullNameIn, codeshares) {
            this.id = id;
            this.mode = mode;
            this.type = type;
            this.bullet = bullet;
            this.num = num;
            this.altText = altText;
            this.routeName = routeName;
            this.destination = destination;
            this.destinationCity = destinationCity;
            this.destinationStopName = destinationStopName;
            this.useFullNameIn = useFullNameIn;
            this.codeshares = codeshares;
        }
    }

    function createJSON(data) {
        let routes = [];
        const rows = data.split('\n');
        if (mode === 'bahn' || mode === 'rail') {
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i].split(',');
                let id = row[0];
                let routeMode = mode;
                let type = row[1];
                let bullet = null;
                let altText = null;
                let num = null;
                if (['interCityNew', 'expressNew', 'regionalNew', 'urbanNew', 'specialNew', 'mcrNew'].includes(type)) {
                    num = row[2];
                } else {
                    bullet = row[2];
                    altText = row[3];
                }
                let routeName = row[4];
                let destination = row[5];
                let destinationCity = row[6];
                let destinationStopName = row[7];
                let useFullNameIn = [];
                for (let j = 8; j < Infinity; j++) {
                    if (!(row[j])) {
                        break;
                    }
                    useFullNameIn.push(row[j]);
                }
                let codeshares = null;
                if (id) {
                    routes.push(new route(id, routeMode, type, bullet, num, altText, routeName, destination, destinationCity, destinationStopName, useFullNameIn, codeshares));
                }
            }
        }
        if (mode === 'air') {
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i].split(',');
                let id = row[2]
                let routeMode = mode;
                let type = row[3];
                let bullet = null;
                let num = row[1];
                let altText = null;
                let routeName = `Flight ${num}`;
                let destination = null;
                let destinationCity = null;
                let destinationStopName = null;
                let useFullNameIn = null;
                let codeshares = [];
                for (let j = 5; j < Infinity; j += 2) {
                    if (!(row[j])) {
                        break;
                    }
                    codeshares.push(row[j]);
                }
                if (id) {
                    routes.push(new route(id, routeMode, type, bullet, num, altText, routeName, destination, destinationCity, destinationStopName, useFullNameIn, codeshares));
                }
            }
        }
        if (mode === 'sail') {
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i].split(',');
                let id = row[0];
                let routeMode = mode;
                let type = row[1];
                let bullet = null;
                let num = row[2];
                let altText = null;
                let routeName = row[3];
                let destination = row[4];
                let destinationCity = row[5];
                let destinationStopName = row[6];
                let useFullNameIn = [];
                for (let j = 7; j < Infinity; j++) {
                    if (!(row[j])) {
                        break;
                    }
                    useFullNameIn.push(row[j]);
                }
                let codeshares = null;
                if (id) {
                    routes.push(new route(id, routeMode, type, bullet, num, altText, routeName, destination, destinationCity, destinationStopName, useFullNameIn, codeshares));
                }
            }
        }
        if (mode === 'bus' || mode === 'omega') {
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i].split(',');
                let id = row[0]
                let routeMode = mode;
                let type = null;
                let bullet = null;
                let num = row[1];
                let altText = null;
                let routeName = `Route ${num}`;
                let destination = row[2];
                let destinationCity = row[3];
                let destinationStopName = row[4];
                let useFullNameIn = [];
                for (let j = 5; j < Infinity; j++) {
                    if (!(row[j])) {
                        break;
                    }
                    useFullNameIn.push(row[j]);
                }
                let codeshares = null;
                if (id) {
                    routes.push(new route(id, routeMode, type, bullet, num, altText, routeName, destination, destinationCity, destinationStopName, useFullNameIn, codeshares));
                }
            }
        }
        if (mode === 'railScar' || mode === 'railLumeva') {
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i].split(',');
                let id = row[0];
                let routeMode = mode;
                let type = null;
                let bullet = null;
                let num = row[1];
                let altText = null;
                let routeName = row[2];
                let destination = row[3];
                let destinationCity = row[4];
                let destinationStopName = row[5];
                let useFullNameIn = [];
                for (let j = 6; j < Infinity; j++) {
                    if (!(row[j])) {
                        break;
                    }
                    useFullNameIn.push(row[j]);
                }
                let codeshares = null;
                if (id) {
                    routes.push(new route(id, routeMode, type, bullet, num, altText, routeName, destination, destinationCity, destinationStopName, useFullNameIn, codeshares));
                }
            }
        }
        fs.writeFile(`${mode}.json`, JSON.stringify(routes), err => {
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