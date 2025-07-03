import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './MBS.module.css';

import LiveMBS from '../components/LiveMBS';
import Carousel from '../components/Carousel';
import RecentMBSVideos from '../components/RecentMBSVideos';
import SectionHeader from '../components/SectionHeader';

import mbsLogoMain from '../logos/mbs-main.svg';
import mbsLogoWhite from '../logos/mbs-main-white.svg';
import mbsLogoBlack from '../logos/mbs-main-black.svg';

import mbsMls from '../assets/mbs-mls.svg';
import adTeaser from '../assets/mbs-advertising-teaser.svg';
import tar from '../images/tar-14.png';

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
            color: '#ff0000',
            imgBoxColor: 'white',
            imgSrc: tar,
            imgAlt: 'The Amazing Race 14',
            imgWidth: undefined,
            imgMaxWidth: '1000px',
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Watch The Amazing Race 14.',
            descriptorText: "Watch the entire season from start to finish.",
            renderButton: true,
            buttonText: 'Watch Now',
            link: 'https://www.youtube.com/playlist?list=PLpJqrCslu9hE4aUf7wArB4OpSLqYEgk7T', 
        },
        post3: {
            color: '#1a2859',
            imgBoxColor: '#e22525',
            imgSrc: mbsMls,
            imgAlt: 'MLS on MBS',
            imgWidth: undefined,
            imgMaxWidth: '1000px',
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Watch MLS Season 9 on MBS.',
            descriptorText: "Major League Spleef is here.",
            renderButton: true,
            buttonText: 'Watch Now',
            link: 'https://www.youtube.com/@mbs_mrt', 
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
                <Carousel propsObj={carouselProps} />
                <div className={styles.section}>
                    <SectionHeader text='Recent Broadcasts' color='blue' border={false} borderColor='' />
                    <RecentMBSVideos />
                </div>
            </div>
        </>
    )
}

export default MBS;