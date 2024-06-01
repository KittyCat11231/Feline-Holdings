import React from 'react';
import styles from './CarouselPost.module.css';

import CarouselPostDesktop from './CarouselPostDesktop';

function CarouselPost(props) {
    return (
        <CarouselPostDesktop
            color={props.color}
            imgBoxColor={props.imgBoxColor}
            imgSrc={props.imgSrc}
            imgAlt={props.imgAlt}
            imgWidth={props.imgWidthDesktop}
            imgMaxWidth={props.imgMaxWidthDesktop}
            imgHeight={props.imgHeightDesktop}
            imgMaxHeight={props.imgMaxHeightDesktop}
            imgTransform={props.imgTransformDesktop}
            headerText={props.headerText}
            descriptorText={props.descriptorText}
            buttonText={props.buttonText}
            link={props.link}
        />
    )
}

export default CarouselPost;