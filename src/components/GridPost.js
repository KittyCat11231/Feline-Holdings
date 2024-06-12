import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './GridPost.module.css';

function GridPost(props) {
    const contentBox = useRef();
    const imgBox = useRef();

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

    return (
        <a
            className={styles.container}
            onMouseEnter={() => playTimeline()}
            onMouseLeave={() => reverseTimeline()}
            href='/'
        >
            <div className={styles.imgBox} style={{backgroundColor: props.imgBoxColor}} ref={imgBox}>
                <img className={styles.img} src={props.imgSrc} alt='Intra' />
            </div>
            <div className={styles.contentBox} style={{backgroundColor: props.boxColor}} ref={contentBox}>
                <div className={styles.textContainer}>
                    <h2
                        className={`${styles.header} ${styles.text}`}
                        style={{color: props.textColor}}
                    >
                        {props.headerText}
                    </h2>
                    <p
                        className={`${styles.subHeader} ${styles.text}`}
                        style={{color: props.textColor}}
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
            </div>
        </a>
    )
}

export default GridPost;