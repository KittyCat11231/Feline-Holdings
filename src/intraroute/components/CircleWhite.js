import React from 'react';
import styles from './CircleWhite.module.css';

import circle from '../assets/circle-white.svg';

function CircleWhite() {
    return (
        <img className={styles.circle} src={circle} alt='circle' />
    )
}

export default CircleWhite;