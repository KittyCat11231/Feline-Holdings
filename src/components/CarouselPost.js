import React from 'react';
import { useState } from 'react';
import styles from './CarouselPost.module.css';

function Button(props) {
    const [buttonTextColor, setButtonTextColor] = useState('white');

    return (
        <div
            className={styles.button}
            onMouseEnter={() => setButtonTextColor(props.color)}
            onMouseLeave={() => setButtonTextColor('white')}
        >
            <a
                href={props.link}
                className={`${styles.buttonText} ${styles.text}`}
                style={{
                    color: buttonTextColor,
                }}
            >
                {props.buttonText}
            </a>
        </div>
    )
}

function CarouselPost(props) {
    return (
        <div className={styles.container}>
            <div className={styles.imgBox} style={{backgroundColor: props.imgBoxColor}}>
                <img
                    className={styles.img}
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    style={{
                        width: props.imgWidth,
                        maxWidth: props.imgMaxWidth,
                        height: props.imgHeight,
                        maxHeight: props.imgMaxHeight,
                        transform: props.imgTransform,
                    }}
                />
            </div>
            <div className={styles.contentBox} style={{backgroundColor: props.color}}>
                <div className={styles.textContainer}>
                    <h1 className={`${styles.header} ${styles.text}`}>
                        {props.headerText}
                    </h1>
                    <h2 className={`${styles.descriptor} ${styles.text}`}>
                        {props.descriptorText}
                    </h2>
                    {props.renderButton ?
                        <Button
                            color={props.color}
                            link={props.link}
                            buttonText={props.buttonText}
                        />
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

export default CarouselPost;