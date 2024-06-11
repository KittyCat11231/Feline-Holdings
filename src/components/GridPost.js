import React from 'react';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './GridPost.module.css';

import intraLogo from '../logos/intra-wordmark.svg';

function GridPost(props) {
    const contentBox = useRef();
    const imgBox = useRef();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
 
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let contentBoxToHeight;
    let imgBoxToHeight;

    if (windowWidth > 2000) {
        contentBoxToHeight = '300px';
        imgBoxToHeight = '100px';
    } else {
        contentBoxToHeight = '15vw';
        imgBoxToHeight = '5vw';
    }

    let tl;

    useGSAP(
        () => {
            tl = gsap.timeline({paused: true})
            tl.to(contentBox.current, {
                height: contentBoxToHeight,
                duration: 0.5,
                ease: 'power2.inOut',
            })
            tl.to(imgBox.current, {
                height: imgBoxToHeight,
                duration: 0.5,
                ease: 'power2.inOut',
            }, '-=0.5')
        },
    )

    return (
        <a
            className={styles.container}
            onMouseEnter={() => tl.play()}
            onMouseLeave={() => tl.reverse()}
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