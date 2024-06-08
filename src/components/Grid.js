import React from 'react';
import styles from './Grid.module.css';

import GridPost from './GridPost';

function Grid(props) {
    return (
        <div className={styles.container}>
            <div className={styles.gridPost}>
                <GridPost />
            </div>
            <div className={styles.gridPost}>
                <GridPost />
            </div>
            <div className={styles.gridPost}>
                <GridPost />
            </div>
        </div>
    )
}

export default Grid;