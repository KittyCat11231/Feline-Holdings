import React from 'react';
import styles from './NoPage.module.css';

function NoPage() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.header} ${styles.text}`}>Page not found.</h1>
            <h2 className={`${styles.descriptor} ${styles.text}`}>Make sure you typed the correct URL.</h2>
        </div>
    )
}

export default NoPage;