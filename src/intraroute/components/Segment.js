import React from 'react';
import styles from './Segment.module.css';
import Route from './Route';
import Line from './Line';
import Stop from './Stop';

import dotsGray from '../assets/dots-gray.svg';
import dotsColor from '../assets/dots-color.svg';

function Segment() {
    return (
        <div className={styles.segmentBox}>
            <img className={styles.dots} src={dotsColor} alt='A dotted line' />
            <Route />
            <Line />
            <Stop />
        </div>
    )
}

export default Segment;