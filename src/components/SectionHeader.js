import React from 'react';
import styles from './SectionHeader.module.css';

function SectionHeader(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{props.text}</h1>
        </div>
    )
}

export default SectionHeader;