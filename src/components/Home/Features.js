import React from 'react';
import { useRef } from 'react';
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
    )
}

export default Features;