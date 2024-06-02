import React from 'react';
import styles from './Grid.module.css';

import GridPost from './GridPost';

function Grid(props) {
    return (
        <div className={styles.container}>
            <GridPost />
        </div>
    )
}

export default Grid;