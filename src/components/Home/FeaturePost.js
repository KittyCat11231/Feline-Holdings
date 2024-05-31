import React from 'react';
import { useState } from 'react';
import styles from './FeaturePost.module.css';

function FeaturePost(props) {
    const [buttonTextColor, setButtonTextColor] = useState('white');

    return (
        <div className={styles.container}>
            <div className={styles.imgBox}>
                <img
                    className={styles.img}
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    style={{
                        width: props.imgWidth,
                        height: props.imgHeight
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
                </div>
            </div>
        </div>
    )
}

export default FeaturePost;