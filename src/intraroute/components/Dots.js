import React from 'react';
import styles from './Dots.module.css';
import colorStyles from './Colors.module.css';

import colors from '../scripts/colors';

import dotsGray from '../assets/dots-gray.svg';
import dotsColor from '../assets/dots-color.svg';

function Dots(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);

    let src = dotsColor.src;
    if (props.mode === 'air') {
        if (['origin', 'mainline', 'heli', 'poseidon'].includes(props.type)) {
            src = dotsGray.src;
        }
    }
    if (props.mode === 'bus') {
        src = dotsGray.src;
    }
    
    return (
        <img className={`${styles.dots} ${colorObj.filterColor}`} src={src} alt='A dotted line' />
    )
}

export default Dots;