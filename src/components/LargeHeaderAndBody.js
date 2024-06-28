import React from 'react';
import styles from './LargeHeaderAndBody.module.css';

import ItemLarge from './ItemLarge';

function LargeHeaderAndBody(props) {
    return (
        <div className={styles.container}>
            <ItemLarge
                    imgLeftSide={false}
                    imgSrc={props.imgSrc}
                    imgAlt={props.imgAlt}
                    imgWidthDesktop={props.imgWidthDesktop}
                    imgWidthMobile={props.imgWidthMobile}
                    imgHeightDesktop={props.imgHeightDesktop}
                    imgHeightMobile={props.imgHeightMobile}
                    boxColor={props.boxColor}
                    textColor={props.headerTextColor}
                    headerText={props.headerText}
                    descriptorText=''
                    renderButton={false}
                    buttonText=''
                    link='/'
                    includeBody={true}
                />
        </div>
    )
}

export default LargeHeaderAndBody;