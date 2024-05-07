import React from 'react';
import styles from './Codeshares.module.css';

function Codeshares(props) {
    let renderCodeshare2 = false;
    if (props.codeshare2 !== 'null') {
        renderCodeshare2 = true;
    }
    return (
        <div className={styles.container}>
            <p className={`${styles.codeshare1} ${props.color}`}>{props.codeshare1}</p>
            {renderCodeshare2 ? <p className={`${styles.slash} ${props.color}`}>/</p> : ''}
            {renderCodeshare2 ? <p className={`${styles.codeshare2} ${props.color}`}>{props.codeshares}</p> : ''}
            <p className={styles.bufferText}>Placeholder</p>
        </div>
    )
}

export default Codeshares;