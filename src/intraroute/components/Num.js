import React from 'react';
import styles from './Num.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import circle from '../assets/circle-white.svg';

function Num(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let renderNumSail = false;
    let renderNumRail = false;
    let renderNumRailScar = false;
    let renderNumRailLumeva = false;

    if (props.mode === 'sail') {
        renderNumSail = true;
    }
    if (props.mode === 'rail') {
        renderNumRail = true;
    }
    if (props.mode === 'railLumeva') {
        renderNumRailLumeva = true;
    }
    if (props.mode === 'railScar') {
        renderNumRailScar = true;
    }

    return (
        <div className={styles.container}>
            <img className={styles.circle} src={circle} alt='circle' />
            {renderNumSail ? <p className={`${styles.numSail} ${colorObj.mainColor}`}>{props.num}</p> : ''}
            {renderNumRail ? <p className={`${styles.numRail} ${colorObj.mainColor}`}>{props.num}</p> : ''}
            {renderNumRailScar ? <p className={`${styles.numRailScar} ${colorObj.mainColor}`}>{props.num}</p> : ''}
            {renderNumRailLumeva ? <p className={`${styles.numRailLumeva} ${colorObj.mainColor}`}>{props.num}</p> : ''}
        </div>
    )
}

export default Num;