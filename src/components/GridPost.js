import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './GridPost.module.css';

function GridPost(props) {
    const contentBox = useRef();
    const imgBox = useRef();

    let renderMobileButton = false;
    if (matchMedia('(pointer:coarse)') && window.innerWidth < 1000) {
        renderMobileButton = true;
    }

    let [tl, setTl] = useState();

    useGSAP(
        () => {
            tl = gsap.timeline({paused: true})
            tl.to(contentBox.current, {
                height: '275px',
                duration: 0.5,
                ease: 'power2.inOut',
            })
            tl.to(imgBox.current, {
                height: '75px',
                duration: 0.5,
                ease: 'power2.inOut',
            }, '-=0.5')

            setTl(tl);
        },
    )

    function playTimeline() {
        if (!(matchMedia('(pointer:coarse)') && window.innerWidth < 1000)) {
            tl.play();
        }
    }

    function reverseTimeline() {
        if (!(matchMedia('(pointer:coarse)') && window.innerWidth < 1000)) {
            tl.reverse();
        }
    }

    const [buttonColor, setButtonColor] = useState(props.boxColor);
    const [buttonTextColor, setButtonTextColor] = useState(props.textColor);

    let imgWidth;
    let imgTranslateY;
    let imgHeight;
    let headerFontSize;

    if (matchMedia('(pointer:coarse)') && window.innerWidth < 1000) {
        imgWidth = props.imgWidthMobile;
        imgHeight = props.imgHeightMobile;
        imgTranslateY = props.imgTranslateYMobile
    } else {
        imgWidth = props.imgWidthDesktop;
        imgHeight = props.imgHeightDesktop;
        imgTranslateY = props.imgTranslateYDesktop;
        headerFontSize = props.headerFontSize;
    }

    return (
        <a
            className={styles.container}
            onMouseEnter={() => playTimeline()}
            onMouseLeave={() => reverseTimeline()}
            href={props.link}
        >
            <div className={styles.imgBox} style={{backgroundColor: props.imgBoxColor}} ref={imgBox}>
                <img
                    className={styles.img}
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    style={{width: imgWidth,
                        height: imgHeight,
                        transform: `translate(0, ${imgTranslateY})`
                    }}
                />
            </div>
            <div className={styles.contentBox} style={{backgroundColor: props.boxColor}} ref={contentBox}>
                <div className={styles.textContainer}>
                    <h2
                        className={`${styles.header} ${styles.text}`}
                        style={{color: props.textColor, fontSize: headerFontSize, marginTop: props.headerTopMargin}}
                    >
                        {props.headerText}
                    </h2>
                    <p
                        className={`${styles.subHeader} ${styles.text}`}
                        style={{color: props.textColor, marginTop: props.subHeaderTopMargin}}
                    >
                        {props.subHeaderText}
                    </p>
                    <p
                        className={`${styles.descriptor} ${styles.text}`}
                        style={{color: props.textColor}}
                    >
                        {props.descriptorText}
                    </p>
                </div>
                {renderMobileButton ?
                    <div
                        className={styles.button}
                        style={{border: `7px solid ${props.textColor}`, backgroundColor: buttonColor}}
                        onClick={() => {
                            setButtonColor(props.textColor);
                            setButtonTextColor(props.boxColor);
                        }}
                    >
                        <p
                            className={`${styles.buttonText} ${styles.text}`}
                            style={{color: buttonTextColor}}
                        >
                            Learn More
                        </p>
                    </div>
                    :
                    ''
                }
            </div>
        </a>
    )
}

export default GridPost;