import React from 'react';
import { useState, useRef } from 'react';
import usePrevious from '../../scripts/usePrevious';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Features.module.css';

import FeaturePost from './FeaturePost';

import fhCenter from '../../images/fh-center-6.png';
import intraRouteShort from '../../intraroute/logos/intraroute-short.svg';
import mbsMls from '../../images/mbs-mls.svg';

function Features(props) {
    const post1 = useRef();
    const post2 = useRef();
    const post3 = useRef();
    const post1atEnd = useRef();

    const button1 = useRef();
    const button2 = useRef();
    const button3 = useRef();

    const [isActiveButton1, setIsActiveButton1] = useState(true);
    const [isActiveButton2, setIsActiveButton2] = useState(false);
    const [isActiveButton3, setIsActiveButton3] = useState(false);

    function setActiveButton(buttonNum) {
        if (buttonNum === 1) {
            setIsActiveButton1(true);
            setIsActiveButton2(false);
            setIsActiveButton3(false);
        }
        if (buttonNum === 2) {
            setIsActiveButton1(false);
            setIsActiveButton2(true);
            setIsActiveButton3(false);
        }
        if (buttonNum === 3) {
            setIsActiveButton1(false);
            setIsActiveButton2(false);
            setIsActiveButton3(true);
        }
    }

    let button1styles = styles.button;
    let button2styles = styles.button;
    let button3styles = styles.button;

    if (isActiveButton1 === true) {
        button1styles = `${styles.button} ${styles.activeButton}`
    }
    if (isActiveButton2 === true) {
        button2styles = `${styles.button} ${styles.activeButton}`
    }
    if (isActiveButton3 === true) {
        button3styles = `${styles.button} ${styles.activeButton}`
    }

    useGSAP(
        () => {
            let tl = gsap.timeline({ repeat: -1 });

            tl.to(post1.current, {
                xPercent: -100,
                delay: 7,
                duration: 1,
                ease: 'power4.inOut'
            })
            tl.from(post2.current, {
                xPercent: 100,
                duration: 1,
                ease: 'power4.inOut',
            }, '-=1')
            tl.to(post2.current, {
                xPercent: -100,
                delay: 7,
                duration: 1,
                ease: 'power4.inOut'
            })
            tl.from(post3.current, {
                xPercent: 100,
                duration: 1,
                ease: 'power4.inOut',
            }, '-=1')
            tl.to(post3.current, {
                xPercent: -100,
                delay: 7,
                duration: 1,
                ease: 'power4.inOut'
            })
            tl.from(post1atEnd.current, {
                xPercent: 100,
                duration: 1,
                ease: 'power4.inOut',
            }, '-=1')
        }
    )

    return (
        <>
            <div className={styles.container}>
                <div className={styles.post} ref={post1}>
                    <FeaturePost
                        color='#ffc90e'
                        imgSrc={fhCenter}
                        imgAlt='Feline Holdings Center'
                        imgWidth='100%'
                        imgHeight='100%'
                        headerText='Feline Holdings is everywhere.'
                        descriptorText='Our brands bring the MRT to life.'
                        buttonText='About Us'
                        link='/'
                    />
                </div>
                <div className={styles.post} ref={post2}>
                    <FeaturePost
                        color='#4d4d4d'
                        imgSrc={intraRouteShort}
                        imgAlt='IntraRoute'
                        imgWidth='80%'
                        imgMaxHeight='95%'
                        headerText='Get there with IntraRoute.'
                        descriptorText="Intra's official routefinder. Now in beta."
                        buttonText='Visit IntraRoute'
                        link='/intraroute'
                    />
                </div>
                <div className={styles.post} ref={post3}>
                    <FeaturePost
                        color='#1a2859'
                        imgBoxColor='#e22525'
                        imgSrc={mbsMls}
                        imgAlt='IntraRoute'
                        imgMaxWidth='1000px'
                        imgHeight='100%'
                        headerText='Watch MLS Season 8 on MBS.'
                        descriptorText="Major League Spleef is back."
                        buttonText='Watch Now'
                        link='https://felineholdings.com/MBS'
                    />
                </div>
                <div className={styles.post} ref={post1atEnd}>
                    <FeaturePost
                        color='#ffc90e'
                        imgSrc={fhCenter}
                        imgAlt='Feline Holdings Center'
                        imgWidth='100%'
                        imgHeight='100%'
                        headerText='Feline Holdings is everywhere.'
                        descriptorText='Our brands bring the MRT to life.'
                        buttonText='About Us'
                        link='/'
                    />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div className={button1styles} ref={button1} onClick={() => {setActiveButton(1)}}></div>
                <div className={button2styles} ref={button2} onClick={() => {setActiveButton(2)}}></div>
                <div className={button3styles} ref={button3} onClick={() => {setActiveButton(3)}}></div>
            </div>
        </>
        
    )
}

export default Features;