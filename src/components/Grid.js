import React from 'react';
import styles from './Grid.module.css';

import GridPost from './GridPost';

function Grid(props) {
    let gridPostElements = [];

    props.propsArray.forEach(post => {
        gridPostElements.push(
            <div className={styles.gridPost}>
                <GridPost
                    boxColor={post.boxColor}
                    textColor={post.textColor}
                    imgBoxColor={post.imgBoxColor}
                    imgSrc={post.imgSrc}
                    headerText={post.headerText}
                    subHeaderText={post.subHeaderText}
                    descriptorText={post.descriptorText}
                />
            </div>
        )
    })
    return (
        <div className={styles.container}>
            {gridPostElements}
        </div>
    )
}

export default Grid;