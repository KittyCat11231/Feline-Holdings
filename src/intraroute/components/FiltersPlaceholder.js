import React from 'react';
import styles from './FiltersPlaceholder.module.css';

function FiltersPlaceholder() {
    return (
        <div className={styles.container}>
            <p className={styles.header}>Coming soon!</p>
            <p className={styles.text}>This feature is coming in a future release of IntraRoute.</p>
        </div>
    )
}

export default FiltersPlaceholder;