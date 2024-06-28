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
                    imgWidthDesktop={post.imgWidthDesktop}
                    imgWidthMobile={post.imgWidthMobile}
                    imgHeightDesktop={post.imgHeightDesktop}
                    imgHeightMobile={post.imgHeightMobile}
                    imgTranslateYDesktop={post.imgTranslateYDesktop}
                    imgTranslateYMobile={post.imgTranslateYMobile}
                    imgAlt={post.imgAlt}
                    headerText={post.headerText}
                    subHeaderText={post.subHeaderText}
                    descriptorText={post.descriptorText}
                    link={post.link}
                    headerFontSize={post.headerFontSize}
                    headerTopMargin={post.headerTopMargin}
                    subHeaderTopMargin={post.subHeaderTopMargin}
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