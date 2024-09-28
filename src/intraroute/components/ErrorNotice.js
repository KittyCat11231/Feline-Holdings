import React from 'react';
import styles from './ErrorNotice.module.css';

function ErrorNotice(props) {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.text} ${styles.text1}`}>{props.date}</h1>
            <h1 className={`${styles.text} ${styles.text2}`}>IntraRoute is currently experiencing errors following an update to our route data.</h1>
            <h1 className={`${styles.text} ${styles.text3}`}>We appreciate your patience while we work to resolve the issue.</h1>
        </div>
    )
}

export default ErrorNotice;