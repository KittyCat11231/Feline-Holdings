import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Home.module.css';

import Carousel from '../components/Carousel';
import Grid from '../components/Grid';

import fhCenter from '../images/fh-center-6.png';
import intraRouteShort from '../intraroute/logos/intraroute-short.svg';
import mbsMls from '../assets/mbs-mls.svg';

function Home() {

    let carouselProps = {
        post1: {
            color: '#ffc90e',
            imgBoxColor: undefined,
            imgSrc: fhCenter,
            imgAlt: 'Feline Holdings Center',
            imgWidth: '100%',
            imgMaxWidth: undefined,
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Feline Holdings is everywhere.',
            descriptorText: 'Our brands bring the MRT to life.',
            buttonText: 'About Us',
            link: '/', 
        },
        post2: {
            color: '#4d4d4d',
            imgBoxColor: 'white',
            imgSrc: intraRouteShort,
            imgAlt: 'IntraRoute',
            imgWidth: '80%',
            imgMaxWidth: '95%',
            imgHeight: undefined,
            imgMaxHeight: '95%',
            imgTransform: undefined,
            headerText: 'Get there with IntraRoute.',
            descriptorText: "Intra's official routefinder. Now in beta.",
            buttonText: 'Find Your Way',
            link: '/intraroute', 
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
            headerText: 'Watch MLS Season 8 on MBS.',
            descriptorText: "Major League Spleef is back.",
            buttonText: 'Watch Now',
            link: 'https://felineholdings.com/MBS', 
        },
    }

    return (
        <div>
            <Helmet>
                <title>Home | Feline Holdings</title>
                <meta property="og:title" content="Home | Feline Holdings" />
                <meta name="twitter:title" content="Home | Feline Holdings" />
            </Helmet>
            <Carousel propsObj={carouselProps} />
            <Grid />
        </div>
    );
}

export default Home;