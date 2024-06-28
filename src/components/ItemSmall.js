import React from 'react';
import { useState } from 'react';
import styles from './ItemSmall.module.css';

function ItemSmall(props) {
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('');
    const [buttonTextColor, setButtonTextColor] = useState(props.textColor);

    return (
        <div className={styles.container}>
            <div className={styles.imgBox}>
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    style={{
                        width: props.imgWidthDesktop,
                        height: props.imgHeightDesktop,
                    }}
                />
            </div>
            <div
                className={styles.contentBox}
                style={{
                    backgroundColor: props.boxColor,
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
        </div>
    )
}

export default ItemSmall;