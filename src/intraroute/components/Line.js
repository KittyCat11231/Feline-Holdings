import React from 'react';
import styles from './Line.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import lineGray from '../assets/segment-gray.svg';
import lineColor from '../assets/segment-color.svg';
import DestinationContainer from './DestinationContainer';
import LineBuffer from './LineBuffer';
import Codeshares from './Codeshares';

function Line(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let lineSrc = lineColor
    let metaTextColor = colorStyles.whiteColor;
    if (props.mode === 'air') {
        if (['origin', 'mainline', 'heli', 'poseidon'].includes(props.type)) {
            lineSrc = lineGray;
        }
        if (props.type === 'gemsGold') {
            metaTextColor = colorStyles.blackColor;
        }
    }
    if (props.mode === 'rail') {
        if (props.type === 'yellow') {
            metaTextColor = colorStyles.blackColor;
        }
    }
    if (props.mode === 'bus') {
        lineSrc = lineGray;
    }

    let renderDestContainer = true;
    let renderStopCount = true;
    let renderCodeshares = false;
    let renderLineBuffer = false;
    if (props.mode === 'air') {
        renderDestContainer = false;
        renderStopCount = false;
    }
    if (props.codeshare1 !=='null') {
        renderCodeshares = true;
    }
    if (renderDestContainer === false && renderCodeshares === false) {
        renderLineBuffer = true;
    }
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
    let stopCountPlural = true;
    if (props.stopCount === 1) {
        stopCountPlural = false;
    }
    let stopCount = `${props.stopCount} stop${stopCountPlural ? 's' : ''} to...`;
    return(
        <div className={styles.lineContainer}>
            <img className={`${styles.line} ${colorObj.filterColor}`} src={lineSrc} alt={'A line'} />
            <div className={styles.nextToLine}>
                {renderDestContainer ?
                    <DestinationContainer mode={props.mode} type={props.type} destinationCity={props.destinationCity} destinationStopName={props.destinationStopName} />
                    : ''
                }
                {renderCodeshares ?
                    <Codeshares codeshare1={props.codeshare1} codeshare2={props.codeshare2} color={colorObj.mainColor} />
                    : ''
                }
                {renderLineBuffer ?
                    <LineBuffer />
                    : ''
                }
                <div className={styles.stop}>
                    <p className={`${styles.city} ${colorObj.mainColor}`}>{props.city}</p>
                    <p className={`${styles.code} ${colorObj.mainColor}`}>({props.code})</p>
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
                {renderStopCount ? <p className={`${styles.stopCount} ${colorObj.mainColor}`}>{stopCount}</p> : ''}
            </div>
        </div>
    )
}

export default Line;