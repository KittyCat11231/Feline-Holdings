import React from 'react';
import styles from './StopDot.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import stopDotGray from '../assets/stop-dot-gray.svg';
import stopDotColor from '../assets/stop-dot-color.svg';
import circleWhite from '../assets/circle-white.svg';

function StopDot(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let stopDotSrc = stopDotColor;
    if (props.mode === 'air' && ['origin', 'mainline', 'heli', 'poseidon'].includes(props.type)) {
        stopDotSrc = stopDotGray;
    }
    if (props.mode === 'bus') {
        stopDotSrc = stopDotGray;
    }

    return (
        <div className={styles.container}>
            <img src={stopDotSrc} className={`${styles.stopDot} ${colorObj.filterColor}`} />
            <img src={circleWhite} className={styles.circleWhite} />
        </div>
    )
}

export default StopDot;