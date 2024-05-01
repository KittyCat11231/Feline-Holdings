import React from 'react';
import styles from './Segment.module.css';
import Route from './Route';
import Line from './Line';
import Stop from './Stop';
import Dots from './Dots';

function Segment() {
    return (
        <div className={styles.segmentBox}>
            <Dots />
            <Route />
            <Line />
            <Stop />
        </div>
    )
}

export default Segment;