import React from 'react';
import { useState } from 'react';
import styles from './ItemLarge.module.css';

function ItemLarge(props) {
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('');
    const [buttonTextColor, setButtonTextColor] = useState(props.textColor);

    let imgWidth;
    let imgHeight;
    
    if (window.innerWidth < 1250) {
        imgWidth = props.imgWidthMobile;
        imgHeight = props.imgHeightMobile;
    } else {
        imgWidth = props.imgWidthDesktop;
        imgHeight = props.imgHeightDesktop;
    }

    let imgLeftSide = props.imgLeftSide;
    let imgRightSide = !(props.imgLeftSide);

    let contentBoxHeight;

    if (props.includeBody) {
        contentBoxHeight = '250px'
    }

    return (
        <div className={styles.container}>
            {imgLeftSide ?
                <div className={styles.imgBox}>
                    <img
                        src={props.imgSrc}
                        alt={props.imgAlt}
                        style={{
                            width: imgWidth,
                            height: imgHeight,
                        }}
                    />
                </div>
                :
                ''
            }
            <div
                className={styles.contentBox}
                style={{
                    backgroundColor: props.boxColor,
                    height: contentBoxHeight,
                }}
            >
                <h2
                    className={`${styles.header} ${styles.text}`}
                    style={{color: props.textColor}}
                >
                    {props.headerText}
                </h2>
                <p
                    className={`${styles.descriptor} ${styles.text}`}
                    style={{color: props.textColor}}
                >
                    {props.descriptorText}
                </p>
                {props.renderButton ?
                    <a
                        className={`${styles.text} ${styles.button}`}
                        href={props.link}
                        style={{
                            backgroundColor: buttonBackgroundColor,
                            color: buttonTextColor,
                            border: `5px solid ${props.textColor}`
                        }}
                        onMouseEnter={() => {
                            setButtonBackgroundColor(props.textColor);
                            setButtonTextColor(props.boxColor);
                        }}
                        onMouseLeave={() => {
                            setButtonBackgroundColor('');
                            setButtonTextColor(props.textColor);
                        }}
                    >
                        {props.buttonText}
                    </a>
                    :
                    ''
                }
            </div>
            {imgRightSide ?
                <div className={styles.imgBox}>
                    <img
                        src={props.imgSrc}
                        alt={props.imgAlt}
                        style={{
                            width: imgWidth,
                            height: imgHeight,
                        }}
                    />
                </div>
                :
                ''
            }
        </div>
    )
}

export default ItemLarge;