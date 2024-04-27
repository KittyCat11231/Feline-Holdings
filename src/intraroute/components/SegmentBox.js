import React from 'react';
import styles from './SegmentBox.module.css';
import Route from './Route';
import Line from './Line'

import dotsGray from '../assets/dots-gray.svg';
import dotsColor from '../assets/dots-color.svg';

function SegmentBox() {
    return (
        <div className={styles.segmentBox}>
            <img className={styles.dots} src={dotsColor} alt='A dotted line' />
            <Route />
            <Line />
        </div>
    )
}

export default SegmentBox;