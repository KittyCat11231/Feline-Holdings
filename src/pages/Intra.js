import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Intra.module.css';

import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import SectionHeader from '../components/SectionHeader';

import intraAirPhoto from '../images/intraair-1.png';
import intraRouteShort from '../intraroute/logos/intraroute-short.svg';

function Intra() {

    let carouselProps = {
        post1: {
            color: '#4d4d4d',
            imgBoxColor: undefined,
            imgSrc: intraAirPhoto,
            imgAlt: 'IntraAir plane',
            imgWidth: '100%',
            imgMaxWidth: undefined,
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Go everywhere.',
            descriptorText: 'Intra is the MRT\'s largest transportation company.',
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
            color: '#4d4d4d',
            imgBoxColor: undefined,
            imgSrc: intraAirPhoto,
            imgAlt: 'IntraAir plane',
            imgWidth: '100%',
            imgMaxWidth: undefined,
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Go everywhere.',
            descriptorText: 'Intra is the MRT\'s largest transportation company.',
            buttonText: 'About Us',
            link: '/', 
        },
    }

    let gridProps = [
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRouteShort,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraAir',
            headerText: 'IntraAir',
            subHeaderText: 'Text',
            descriptorText: "The MRT's biggest airline.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRouteShort,
            imgWidthDesktop: '400px',
            imgWidthMobile: '600px',
            imgAlt: 'IntraRail',
            headerText: 'IntraRail',
            subHeaderText: 'Text',
            descriptorText: "The MRT's biggest warp rail company.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRouteShort,
            imgWidthDesktop: '300px',
            imgWidthMobile: '450px',
            imgAlt: 'IntraBus',
            headerText: 'IntraBus',
            subHeaderText: 'Text',
            descriptorText: "Connecting you to even more places.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRouteShort,
            imgWidthDesktop: '270px',
            imgWidthMobile: '350px',
            imgAlt: 'IntraSail',
            headerText: 'IntraSail',
            subHeaderText: 'Text',
            descriptorText: "Set forth on the high seas.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRouteShort,
            imgWidthDesktop: '330px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraBahn',
            headerText: 'IntraBahn',
            subHeaderText: 'Text',
            descriptorText: "Enjoy the journey.",
            link: '/'
        },
    ]

    return (
        <>
            <Helmet>
                <title>Intra | Feline Holdings</title>
                <meta property="og:title" content="Intra | Feline Holdings" />
                <meta name="twitter:title" content="Intra | Feline Holdings" />
                <meta name="description" content="The MRT's largest transportation company." />
                <link rel="icon" href='https://svgshare.com/i/16Gj' />
                <link rel="apple-touch-icon" href='https://svgshare.com/i/16Gj' />
            </Helmet>
            <Carousel propsObj={carouselProps} />
            <div className={styles.topSection}>
                <SectionHeader text='Our Core Brands' color='#4d4d4d' border={false} />
                <Grid propsArray={gridProps} />
            </div>
        </>
    )
}

export default Intra;