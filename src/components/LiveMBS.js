import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './LiveMBS.module.css';

import YouTubeEmbed from '../components/YouTubeEmbed';

import methods from '../scripts/methods';

function LiveFrame() {
    return (
        <YouTubeEmbed link='https://www.youtube.com/embed/live_stream?channel=UCdqFWzZ2sTEM3svKajyk9Lg' />
    )
}

function LiveMBSWhenLive() {
    let boxColor;
    let textColor = 'white';
    let circleColor = 'red';

    let randomInt = methods.getRandomInteger(4);

    if (randomInt === 1) {
        boxColor = 'blue';
    } else if (randomInt === 2) {
        boxColor = 'red';
        circleColor = 'white';
    } else if (randomInt === 3) {
        boxColor = 'yellow';
        textColor = 'black';
    } else if (randomInt === 4) {
        boxColor = '#00ff00';
        textColor = 'black';
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
    const channelId = "UCdqFWzZ2sTEM3svKajyk9Lg";
    let subDomain = 'www';

    if (matchMedia('(pointer:coarse)').matches) {
        subDomain = 'm';
    }

    const [isLive, setIsLive] = useState(false);

    fetch(`https://cors.felineholdings.com/?https://${subDomain}.youtube.com/channel/${channelId}`)
    .then(function (response) {
        console.log(response);
        return response.text();
    }).then(function (html) {
        if (html.includes("hqdefault_live.jpg")) {
            setIsLive(true);
        } else {
            setIsLive(false);
        }
    }).catch(function (err) {
        console.warn('Failed to fetch.', err);
    });
    return (
        <>{isLive ? <LiveMBSWhenLive /> : ''}</>
    )
}

export default LiveMBS;