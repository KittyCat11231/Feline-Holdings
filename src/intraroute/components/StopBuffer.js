'use client'
 
import React from 'react';
import styles from './Stop.module.css';
import colorStyles from './Colors.module.css';

function StopBuffer() {
    return (
        <div className={styles.metaContainer}>
            <div className={`${styles.meta1} ${colorStyles.whiteBackground}`}>
                <p className={`${styles.meta} ${colorStyles.whiteColor}`}>Placeholder</p>
            </div>
        </div>
    )
}

export default StopBuffer;