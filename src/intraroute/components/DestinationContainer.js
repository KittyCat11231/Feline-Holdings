import React from 'react';
import styles from './DestinationContainer.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

function DestinationContainer(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let renderDestStopName = false;
    if (props.destinationStopName !== 'null') {
        renderDestStopName = true;
    }

    return (
        <div className={styles.destinationContainer}>
            <p className={`${styles.towards} ${colorObj.mainColor}`}>towards</p>
            <p className={`${styles.destinationCity} ${colorObj.mainColor}`}>{props.destinationCity}</p>
            <p className={`${styles.destinationStopName} ${colorObj.mainColor}`}>{renderDestStopName ? props.destinationStopName : ''}</p>
        </div>
    )
}

export default DestinationContainer;