import React from 'react';
import styles from './Route.module.css';
import Mode from './Mode';

import circle from '../assets/circle-white.svg';

import bulletBahnWhite1 from '../assets/intrabahn/bullets/1-white.png';

function Stop() {
    return (
        <div>
            <div className={styles.modeBox}>
                <Mode mode='bahn' type='mainline' />
            </div>
            <div className={styles.routeContainer}>
                <img className={styles.bullet} src={bulletBahnWhite1} alt='IntraBahn 1' />
                <p className={styles.routeName}>Intrepid</p>
            </div>
        </div>
    )
}

export default Stop;