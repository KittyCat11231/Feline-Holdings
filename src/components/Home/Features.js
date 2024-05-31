import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Features.module.css';

import FeaturePost from './FeaturePost';

import fhCenter from '../../images/fh-center-6.png';
import intraRouteShort from '../../intraroute/logos/intraroute-short.svg';

function Features(props) {
    const post1 = useRef();
    const [post1X, setPost1X] = useState(0);
    
    const post2 = useRef();
    const [post2X, setPost2X] = useState(0);

    useGSAP(
        () => {
            gsap.to(post1.current, {
                xPercent: post1X,
                duration: 1,
                ease: 'power4.inOut'
            })
        }, { dependencies: [post1X] }
    )

    useGSAP(
        () => {
            gsap.to(post2.current, {
                xPercent: post2X,
                duration: 1,
                ease: 'power4.inOut'
            })
        }, { dependencies: [post2X] }
    )

    setTimeout(() => {
        setPost1X(-100);
        setPost2X(-100);
    }, 7000);

    return (
        <div className={styles.container}>
            <div className={`${styles.post} ${styles.post1}`} ref={post1}>
                <FeaturePost
                    color='#ffc90e'
                    imgSrc={fhCenter}
                    imgAlt='Feline Holdings Center'
                    imgWidth='100%'
                    imgHeight='100%'
                    headerText='Feline Holdings is everywhere.'
                    descriptorText='Our brands bring the MRT to life.'
                    buttonText='Learn More'
                    link='/'
                />
            </div>
            <div className={`${styles.post} ${styles.post2}`} ref={post2}>
                <FeaturePost
                    color='#4d4d4d'
                    imgSrc={intraRouteShort}
                    imgAlt='IntraRoute'
                    imgWidth='50%'
                    imgHeight='50%'
                    headerText='Get there with IntraRoute.'
                    descriptorText="Intra's official routefinder. Now in beta."
                    buttonText='Visit IntraRoute'
                    link='/intraroute'
                />
            </div>
        </div>
    )
}

export default Features;