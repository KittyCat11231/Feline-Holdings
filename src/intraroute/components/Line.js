import React from 'react';
import styles from './Line.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import lineGray from '../assets/segment-gray.svg';
import lineColor from '../assets/segment-color.svg';
import DestinationContainer from './DestinationContainer';
import LineBuffer from './LineBuffer';
import Codeshares from './Codeshares';
import StopInLine from './StopInLine';

function Line(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let metaTextColor = colorStyles.whiteColor;
    if (props.mode === 'air' && props.type === 'gemsGold') {
        metaTextColor = colorStyles.blackColor;
    }
    if (props.mode === 'rail' && props.type === 'yellow') {
        metaTextColor = colorStyles.blackColor;
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
    let stopCountPlural = true;
    if (props.stopCount === 1) {
        stopCountPlural = false;
    }
    let stopCount = `${props.stopCount} stop${stopCountPlural ? 's' : ''} to...`;
    console.log(colorObj.containerColor);
    return(
        <div className={styles.lineContainer}>
            <div className={`${styles.line} ${colorObj.containerColor}`}></div>
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
                <div className={styles.stopInLine}>
                    <StopInLine mode={props.mode} type={props.type} city={props.city} code={props.code} stopName={props.stopName} meta1={props.meta1} meta2={props.meta2} />
                </div>
                {renderStopCount ?
                    <p className={`${styles.stopCount} ${colorObj.mainColor}`}>{stopCount}</p>
                    :
                    <p className={`${styles.stopCount} ${styles.hidden}`}>Placeholder</p>
                }
            </div>
        </div>
    )
}

export default Line;