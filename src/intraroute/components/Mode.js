import React from 'react';
import styles from './Mode.module.css';

import bahnLogo from '../logos/intrabahn-white.svg'

function Mode() {
    return (
        <div className={styles.modeBox}>
            <img className={styles.intraLogos} src={bahnLogo} alt='IntraBahn' />
        </div>
    )
}

export default Mode;