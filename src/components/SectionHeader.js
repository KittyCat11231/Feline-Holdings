import React from 'react';
import styles from './SectionHeader.module.css';

function SectionHeader(props) {

    let borderStyles = `10px solid ${props.borderColor}`;

    if (props.border === false) {
        borderStyles = '';
    }

    return (
        <div
            className={styles.container}
            style={{backgroundColor: props.color, borderBottom: borderStyles}}
        >
            <h1 className={styles.text}>{props.text}</h1>
        </div>
    )
}

export default SectionHeader;