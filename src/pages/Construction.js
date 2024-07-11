import React from 'react';
import styles from './Construction.module.css';

function Construction() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.header} ${styles.text}`}>felineholdings.com is under construction!</h1>
            <h2 className={`${styles.descriptor} ${styles.text}`}>Check back on July 13, 2024.</h2>
        </div>
    )
}

export default Construction;