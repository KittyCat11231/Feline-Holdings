import React from 'react';
import styles from './Line.module.css';

import lineGray from '../assets/segment-gray.svg';
import lineColor from '../assets/segment-color.svg';

function Line() {
    return(
        <div className={styles.lineContainer}>
            <img className={styles.line} src={lineColor} alt={'A line'} />
            <div className={styles.nextToLine}>
                <div className={styles.destinationContainer}>
                    <p className={styles.towards}>towards</p>
                    <p className={styles.destinationCity}>Whiteley</p>
                    <p className={styles.destinationStopName}>Quins Junction</p>
                </div>
                <div className={styles.stop}>
                    <p className={styles.city}>Zaquar</p>
                    <p className={styles.code}>(ZQL)</p>
                </div>
                <p className={styles.stopName}>Loreen Terminal</p>
                <div className={styles.metaContainer}>
                    <div className={styles.meta1}>
                        <p className={styles.meta}>Ticket Machine A1</p>
                    </div>
                    <div className={styles.meta2}>
                        <p className={styles.meta}>Track 4</p>
                    </div>
                </div>
                <p className={styles.stopCount}>3 stops to...</p>
            </div>
        </div>
    )
}

export default Line;