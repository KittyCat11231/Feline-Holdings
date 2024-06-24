import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './MBS.module.css';

import LiveMBS from '../components/LiveMBS';
import Carousel from '../components/Carousel';
import CarouselPost from '../components/CarouselPost';

import mbsLogoMain from '../logos/mbs-main.svg';
import mbsLogoWhite from '../logos/mbs-main-white.svg';
import mbsLogoBlack from '../logos/mbs-main-black.svg';

import mbsMls from '../assets/mbs-mls.svg';
import adTeaser from '../assets/mbs-advertising-teaser.svg';

function MBS() {

    let carouselProps = {
        post1: {
            color: 'blue',
            imgBoxColor: 'white',
            imgSrc: mbsLogoMain,
            imgAlt: 'MBS',
            imgWidth: '60%',
            imgMaxWidth: undefined,
            imgHeight: undefined,
            imgMaxHeight: '95%',
            imgTransform: undefined,
            headerText: 'The MRT\'s broadcasting system.',
            descriptorText: 'MBS brings the MRT to you.',
            renderButton: true,
            buttonText: 'Watch MBS',
            link: 'https://www.youtube.com/@mbs_mrt', 
        },
        post2: {
            color: '#1a2859',
            imgBoxColor: '#e22525',
            imgSrc: mbsMls,
            imgAlt: 'MLS on MBS',
            imgWidth: undefined,
            imgMaxWidth: '1000px',
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Watch MLS Season 8 on MBS.',
            descriptorText: "Major League Spleef is back.",
            renderButton: true,
            buttonText: 'Watch Now',
            link: 'https://felineholdings.com/MBS', 
        },
        post3: {
            color: 'red',
            imgBoxColor: '#333333',
            imgSrc: adTeaser,
            imgAlt: 'MLS on MBS',
            imgWidth: '90%',
            imgMaxWidth: undefined,
            imgHeight: undefined,
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Advertise with us.',
            descriptorText: "Broadcast your ads on MBS. For free.",
            renderButton: true,
            buttonText: 'Get Started',
            link: '/', 
        },
    }

    return (
        <>
            <Helmet>
                <title>MBS | Feline Holdings</title>
                <meta property="og:title" content="MBS | Feline Holdings" />
                <meta name="twitter:title" content="MBS | Feline Holdings" />
                <meta name="description" content="The MRT's most watched broadcaster." />
                <link rel="icon" href='https://svgshare.com/i/17Sp.svg' />
                <link rel="apple-touch-icon" href='https://svgshare.com/i/17Sp.svg' />
            </Helmet>
            <div className={styles.container}>
                <LiveMBS />
                <div className={styles.topPost}>
                    <Carousel propsObj={carouselProps} />
                </div>
            </div>
        </>
    )
}

export default MBS;