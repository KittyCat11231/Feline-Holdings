'use client'
 
import React from 'react';
import styles from './Construction.module.css';

function Construction() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.header} ${styles.text}`}>This page is under construction.</h1>
            <h2 className={`${styles.descriptor} ${styles.text}`}>Check back later.</h2>
        </div>
    )
}

export default Construction;