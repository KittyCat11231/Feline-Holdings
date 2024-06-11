import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './GridPost.module.css';

import intraLogo from '../logos/intra-wordmark.svg';

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
            console.log(true);
            tl.play();
        }
    }

    function reverseTimeline() {
        if (!(matchMedia('(pointer:coarse)') && window.innerWidth < 1000)) {
            console.log(true);
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
            <div className={styles.imgBox} ref={imgBox}>
                <img className={styles.img} src={intraLogo} alt='Intra' />
            </div>
            <div className={styles.contentBox} ref={contentBox}>
                <div className={styles.textContainer}>
                    <h2 className={`${styles.header} ${styles.text}`}>Go everywhere</h2>
                    <p className={`${styles.subHeader} ${styles.text}`}>with Intra.</p>
                    <p className={`${styles.descriptor} ${styles.text}`}>The MRT's biggest transportation conglomerate.</p>
                </div>
            </div>
        </a>
    )
}

export default GridPost;