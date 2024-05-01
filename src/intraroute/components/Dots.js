import React from 'react';
import styles from './Dots.module.css';

import dotsColor from '../assets/dots-color.svg';

function Dots() {
    return (
        <img className={styles.dots} src={dotsColor} alt='A dotted line' />
    )
}

export default Dots;