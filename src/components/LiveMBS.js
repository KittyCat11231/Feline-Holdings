import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './LiveMBS.module.css';

import YouTubeEmbed from '../components/YouTubeEmbed';

import methods from '../scripts/methods';

import mbsLogoWhite from '../logos/mbs-icon-white.svg';
import mbsLogoBlack from '../logos/mbs-icon-black.svg';

function LiveFrame() {
    return (
        <YouTubeEmbed
            link='https://www.youtube.com/embed/live_stream?channel=UCdqFWzZ2sTEM3svKajyk9Lg'
            iframeStyles={styles.video}
        />
    )
}

function LiveMBSWhenLive() {
    let boxColor;
    let textColor = 'white';
    let circleColor = 'red';
    let mbsLogo = mbsLogoWhite;

    let randomInt = methods.getRandomInteger(4);

    if (randomInt === 1) {
        boxColor = 'blue';
    } else if (randomInt === 2) {
        boxColor = 'red';
        circleColor = 'white';
    } else if (randomInt === 3) {
        boxColor = 'yellow';
        textColor = 'black';
        mbsLogo = mbsLogoBlack;
    } else if (randomInt === 4) {
        boxColor = '#00ff00';
        textColor = 'black';
        mbsLogo = mbsLogoBlack;
    }
    console.log(randomInt);
    console.log(boxColor);

    const circleAnimated = useRef();

    let [tl, setTl] = useState();

    useGSAP(
        () => {
            tl = gsap.timeline({ repeat: -1 });

            tl.to(circleAnimated.current, {
                scale: 2.3,
                opacity: 0,
                duration: 1.3,
                ease: 'power4.out',
            })

            setTl(tl);
        }
    )

    return (
        <div className={styles.container} style={{backgroundColor: boxColor}}>
            <div className={styles.liveFrame}>
                <LiveFrame />
            </div>
            <div className={styles.textBox}>
                <div className={styles.topLine}>
                    <div className={styles.circleBox}>
                        <div
                            className={styles.circle}
                            style={{backgroundColor: circleColor}}
                        >
                        </div>
                        <div
                            className={styles.circleAnimated}
                            style={{backgroundColor: circleColor}}
                            ref={circleAnimated}
                        >
                        </div>
                    </div>
                    <img className={styles.logo} src={mbsLogo} alt='MBS' />
                    <p
                        className={`${styles.text} ${styles.header}`}
                        style={{color: textColor}}
                    >
                        MBS is live.
                    </p>
                </div>
                <p
                    className={`${styles.text} ${styles.descriptor}`}
                    style={{color: textColor}}
                >Watch live right now.</p>
            </div>
        </div>
    )
}

function LiveMBS() {
    const [isLive, setIsLive] = useState(false);

    async function isMBSLive() {
        const response = await fetch('https://cors.felineholdings.com/?https://feline-holdings-backend.vercel.app/mbs/live-now')
        const responseJson = await response.json();
        if (responseJson.isLive === true) {
            setIsLive(true);
        } else {
            setIsLive(false);
        }
    }

    isMBSLive();

    return (
        <>{isLive ? <LiveMBSWhenLive /> : ''}</>
    )
}

export default LiveMBS;