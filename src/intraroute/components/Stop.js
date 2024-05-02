import React from 'react';
import styles from './Stop.module.css';
import colorStyles from './Colors.module.css';

import circleWhite from '../assets/circle-white.svg';
import Circle from './Circle';

function Stop() {
    return (
        <div>
            <div className={styles.stopContainer}>
                <Circle mode='bahn' type='mainline' />
                <div className={styles.stopInfo}>
                    <div className={styles.cityCode}>
                        <p className={styles.city}>Whiteley</p>
                        <p className={styles.code}>(WHQ)</p>
                    </div>
                    <p className={styles.stopName}>Quins Junction</p>
                </div>
            </div>
            <div className={styles.metaContainer}>
                <div className={styles.meta1}>
                    <p className={styles.meta}>Platform 11</p>
                </div>
                <div className={styles.meta2}>
                    <p className={styles.meta}>Platform 11</p>
                </div>
            </div>
        </div>
    )
}

export default Stop;