import React from 'react';
import styles from './Stop.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import StopBuffer from './StopBuffer';

import circleWhite from '../assets/circle-white.svg';
import Circle from './Circle';

function Stop(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let renderStopName = true;
    let dontRenderStopName = false;
    if (props.stopName === 'null') {
        renderStopName = false;
        dontRenderStopName = true;
    }
    let renderMeta1 = false;
    let renderMeta2 = false;
    if (props.meta1 !== 'null') {
        renderMeta1 = true;
    }
    if (props.meta2 !== 'null') {
        renderMeta2 = true;
    }

    return (
        <div>
            <div className={`${styles.stopContainer} ${colorObj.containerColor}`}>
                <Circle mode={props.mode} type={props.type} />
                <div className={styles.stopInfo}>
                    {renderStopName ?
                        <div className={styles.cityCode}>
                            <p className={`${styles.city} ${colorObj.textColor}`}>{props.city} <span className={styles.code}>({props.code})</span></p>
                        </div>
                        :
                        <div className={styles.cityCodeNoStopName}>
                            <p className={`${styles.city} ${colorObj.textColor}`}>{props.city} <span className={styles.code}>({props.code})</span></p>
                        </div>
                    }
                    {renderStopName ? <p className={`${styles.stopName} ${colorObj.textColor}`}>{props.stopName}</p> : ''}
                    {dontRenderStopName ? <p className={`${styles.stopName} ${colorStyles.hidden}`}>{props.stopName}</p> : ''}
                </div>
            </div>
            <div className={styles.metaContainer}>
                <div className={`${styles.meta1} ${renderMeta1 ? colorObj.containerColor : colorStyles.whiteBackground}`}>
                    <p className={`${styles.meta} ${renderMeta1 ? colorObj.textColor : colorStyles.whiteColor}`}>{props.meta1}</p>
                </div>
                {renderMeta2 ?
                    <div className={`${styles.meta2} ${colorObj.containerColor}`}>
                        <p className={`${styles.meta} ${colorObj.textColor}`}>{props.meta2}</p>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default Stop;