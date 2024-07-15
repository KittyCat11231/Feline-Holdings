'use client'
 
import React from 'react';
import styles from './Line.module.css';
import colorStyles from './Colors.module.css';

function LineBuffer() {
    return (
        <div className={styles.destinationContainer}>
            <p className={`${styles.towards} ${colorStyles.whiteColor}`}>towards</p>
            <p className={`${styles.destinationCity} ${colorStyles.whiteColor}`}>Placeholder</p>
        </div>
    )
}

export default LineBuffer;