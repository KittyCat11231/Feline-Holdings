import React from "react";
import styles from './Path.module.css';

import Segment from './Segment';
import Stop from './Stop';
import Walk from './Walk';

import processedPath from '../scripts/process-path';

function Path() {
    console.log(processedPath);
    let pathElements = [];

    for (let i = 0; i < processedPath.length; i++) {
        if (processedPath[i].element === 'segment') {
            let mode = processedPath[i].routes[0].mode;
            let type = processedPath[i].routes[0].type;
            let route = processedPath[i].routes[0].route;
            let num = processedPath[i].routes[0].num;
            let routeName = processedPath[i].routes[0].routeName;
            let destinationCity = processedPath[i].routes[0].destinationCity;
            let destinationStopName = processedPath[i].routes[0].destinationStopName;
            let codeshare1 = processedPath[i].routes[0].codeshare1;
            let codeshare2 = processedPath[i].routes[0].codeshare2;
            let stop1city = processedPath[i].routes[0].stop1.city;
            let stop1stopName = processedPath[i].routes[0].stop1.stopName;
            let stop1code = processedPath[i].routes[0].stop1.code;
            let stop1meta1 = processedPath[i].routes[0].stop1.meta1;
            let stop1meta2 = processedPath[i].routes[0].stop1.meta2;
            let stopCount = processedPath[i].stopCount;
            let stop2city = processedPath[i].routes[0].stop2.city;
            let stop2stopName = processedPath[i].routes[0].stop2.stopName;
            let stop2code = processedPath[i].routes[0].stop2.code;
            let stop2meta1 = processedPath[i].routes[0].stop2.meta1;
            let stop2meta2 = processedPath[i].routes[0].stop2.meta2;
            pathElements.push(<div className={styles.segment}><Segment mode={mode} type={type} route={route} num={num} routeName={routeName} destinationCity={destinationCity} destinationStopName={destinationStopName} codeshare1={codeshare1} codeshare2={codeshare2} stop1city={stop1city} stop1stopName={stop1stopName} stop1code={stop1code} stop1meta1={stop1meta1} stop1meta2={stop1meta2} stopCount={stopCount} stop2city={stop2city} stop2stopName={stop2stopName} stop2code={stop2code} stop2meta1={stop2meta1} stop2meta2={stop2meta2} /></div>)
        }
        if (processedPath[i].element === 'stopStandalone') {
            let firstOrTransfer;
            if (i === 0) {
                firstOrTransfer = styles.firstStop;
            } else {
                firstOrTransfer = styles.transferStop
            }
            let mode = processedPath[i].mode;
            let city = processedPath[i].city;
            let stopName = processedPath[i].stopName;
            let code = processedPath[i].code;
            pathElements.push(<div className={`${styles.stop} ${firstOrTransfer}`}><Stop mode={mode} type='origin' city={city} stopName={stopName} code={code} meta1='null' meta2='null' /></div>)
        }
        if (processedPath[i].element === 'walk') {
            pathElements.push(<Walk route={processedPath[i].route} />)
        }
    }

    return (
        <div>
            {pathElements}
        </div>
        )
}

export default Path;