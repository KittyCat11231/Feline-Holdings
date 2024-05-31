import React from 'react';
import { useState, useRef } from 'react';
import usePrevious from '../../scripts/usePrevious';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Features.module.css';

import FeaturePost from './FeaturePost';

import fhCenter from '../../images/fh-center-6.png';
import intraRouteShort from '../../intraroute/logos/intraroute-short.svg';
import mbsMls from '../../assets/mbs-mls.svg';
import pause from '../../assets/pause.svg';
import play from '../../assets/play.svg';

function Features(props) {
    const post1 = useRef();
    const post2 = useRef();
    const post3 = useRef();
    const post1atEnd = useRef();

    const button1 = useRef();
    const button2 = useRef();
    const button3 = useRef();

    const pauseButton = useRef();
    const playButton = useRef();

    const [isPaused, setIsPaused] = useState(false);
    const [pausePlaySrc, setPausePlaySrc] = useState(pause);
    const [pausePlayRef, setPausePlayRef] = useState(pauseButton);
    const [pausePlayAlt, setPausePlayAlt] = useState('Pause');

    let [tl, setTl] = useState();

    useGSAP(
        () => {
            tl = gsap.timeline({ repeat: -1 });

            tl.to(post1.current, {
                xPercent: -100,
                delay: 5,
                duration: 1,
                ease: 'power4.inOut'
            })
            tl.from(post2.current, {
                xPercent: 100,
                duration: 1,
                ease: 'power4.inOut',
                onStart: () => {setActiveButton(2)},
            }, '-=1')
            tl.to(post2.current, {
                xPercent: -100,
                delay: 5,
                duration: 1,
                ease: 'power4.inOut'
            })
            tl.from(post3.current, {
                xPercent: 100,
                duration: 1,
                ease: 'power4.inOut',
                onStart: () => {setActiveButton(3)},
            }, '-=1')
            tl.to(post3.current, {
                xPercent: -100,
                delay: 5,
                duration: 1,
                ease: 'power4.inOut'
            })
            tl.from(post1atEnd.current, {
                xPercent: 100,
                duration: 1,
                ease: 'power4.inOut',
                onStart: () => {setActiveButton(1)},
            }, '-=1')

            setTl(tl);
        }
    )

    const [isActiveButton1, setIsActiveButton1] = useState(true);
    const [isActiveButton2, setIsActiveButton2] = useState(false);
    const [isActiveButton3, setIsActiveButton3] = useState(false);

    const [currentActiveButton, setCurrentActiveButton] = useState(1);

    function setActiveButton(buttonNum) {
        if (buttonNum === 1) {
            setIsActiveButton1(true);
            setIsActiveButton2(false);
            setIsActiveButton3(false);
            setCurrentActiveButton(1);
        }
        if (buttonNum === 2) {
            setIsActiveButton1(false);
            setIsActiveButton2(true);
            setIsActiveButton3(false);
            setCurrentActiveButton(2);
        }
        if (buttonNum === 3) {
            setIsActiveButton1(false);
            setIsActiveButton2(false);
            setIsActiveButton3(true);
            setCurrentActiveButton(3);
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

    function buttonClick(buttonNum) {
        manualPausePlay('play');
        if (buttonNum === 1) {
            if (currentActiveButton === 1) {
                tl.seek(0);
                manualPausePlay('pause');
            }
            if (currentActiveButton === 2) {
                tl.seek(11);
                setTimeout(() => {
                    tl.seek(17);
                }, 1000);
                setTimeout(() => {
                    manualPausePlay('pause');
                }, 2000);
            }
            if (currentActiveButton === 3) {
                tl.seek(17);
                setTimeout(() => {
                    manualPausePlay('pause');
                }, 1000);
            }
        }
        if (buttonNum === 2) {
            if (currentActiveButton === 1) {
                tl.seek(5);
                setTimeout(() => {
                    manualPausePlay('pause');
                }, 1000);
            }
            if (currentActiveButton === 2) {
                tl.seek(6);
                manualPausePlay('pause');
            }
            if (currentActiveButton === 3) {
                tl.seek(17);
                setTimeout(() => {
                    tl.seek(5);
                }, 1000);
                setTimeout(() => {
                    manualPausePlay('pause');
                }, 2000);
            }
        }
        if (buttonNum === 3) {
            if (currentActiveButton === 1) {
                tl.seek(5);
                setTimeout(() => {
                    tl.seek(11);
                }, 1000);
                setTimeout(() => {
                    manualPausePlay('pause');
                }, 2000);
            }
            if (currentActiveButton === 2) {
                tl.seek(11);
                setTimeout(() => {
                    manualPausePlay('pause');
                }, 1000);
            }
            if (currentActiveButton === 3) {
                tl.seek(12);
                manualPausePlay('pause');
            }
        }
    }

    function manualPausePlay(pauseOrPlay) {
        if (pauseOrPlay === 'pause') {
            tl.pause();
            setIsPaused(true);
            setPausePlaySrc(play);
            setPausePlayRef(playButton);
            setPausePlayAlt('Play');
        }
        if (pauseOrPlay === 'play') {
            tl.play();
            setIsPaused(false);
            setPausePlaySrc(pause);
            setPausePlayRef(pauseButton);
            setPausePlayAlt('Pause');
        }
    }

    function pausePlayOnClick() {
        if (isPaused === false) {
            manualPausePlay('pause');
        }
        if (isPaused === true) {
            manualPausePlay('play');
        }
    }

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
                <img
                    src={pausePlaySrc}
                    ref={pausePlayRef}
                    alt={pausePlayAlt}
                    className={styles.pausePlay}
                    onClick={() => pausePlayOnClick()}
                />
                <div className={styles.buttonHitBox} ref={button1} onClick={() => buttonClick(1)}>
                    <div className={button1styles}></div>
                </div>
                <div className={styles.buttonHitBox} ref={button2} onClick={() => buttonClick(2)}>
                    <div className={button2styles}></div>
                </div>
                <div className={styles.buttonHitBox} ref={button3} onClick={() => buttonClick(3)}>
                    <div className={button3styles}></div>
                </div>
                
                
            </div>
        </>
        
    )
}

export default Features;