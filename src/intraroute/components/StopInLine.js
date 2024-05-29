import React from 'react';
import styles from './StopInLine.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import StopDot from './StopDot';

function StopInLine(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let renderStopName = true;
    if (props.stopName === 'null') {
        renderStopName = false;
    }
    
    let renderMeta1 = false;
    let renderMeta2 = false;
    if (props.meta1 !== 'null') {
        renderMeta1 = true;
    }
    if (props.meta2 !== 'null') {
        renderMeta2 = true;
    }
    
    let metaTextColor = colorStyles.whiteColor;
    if (props.mode === 'air' && props.type === 'gemsGold') {
        metaTextColor = colorStyles.blackColor;
    }
    if (props.mode === 'rail' && props.type === 'yellow') {
        metaTextColor = colorStyles.blackColor;
    }

    return (
        <div className={styles.container}>
            <div className={styles.stop}>
                <div className={styles.stopDot}>
                    <StopDot mode={props.mode} type={props.type} />
                </div>
                <div className={styles.cityCode}>
                    <p className={`${styles.city} ${colorObj.mainColor}`}>{props.city} <span className={styles.code}>({props.code})</span></p>
                </div>
            </div>
            {renderStopName ? <p className={`${styles.stopName} ${colorObj.mainColor}`}>{props.stopName}</p> : ''}
            <div className={styles.metaContainer}>
                {renderMeta1 ?
                    <div className={`${styles.meta1} ${colorObj.containerColor}`}>
                        <p className={`${styles.meta} ${metaTextColor}`}>{props.meta1}</p>
                    </div>
                    : ''
                }
                {renderMeta2 ?
                    <div className={`${styles.meta2} ${colorObj.containerColor}`}>
                        <p className={`${styles.meta} ${metaTextColor}`}>{props.meta2}</p>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default StopInLine;