import React from 'react';
import styles from './Grid.module.css';

import GridPost from './GridPost';

function Grid(props) {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Our Brands</h1>
            </div>
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
                <div className={styles.gridPost}>
                    <GridPost />
                </div>
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
        </div>
    )
}

export default Grid;