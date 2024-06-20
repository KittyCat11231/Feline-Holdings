import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Intra.module.css';

import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import SectionHeader from '../components/SectionHeader';

import intraAirPhoto from '../images/intraair-1.png';
import intraRouteShort from '../intraroute/logos/intraroute-short.svg';

import intraAirLogo from '../intraroute/logos/intraair.svg';
import intraRailLogo from '../intraroute/logos/intrarail.svg';
import intraBusLogo from '../intraroute/logos/intrabus.svg';
import intraSailLogo from '../intraroute/logos/intrasail.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn.svg';

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
            renderButton: false,
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
            renderButton: true,
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
            renderButton: false,
            buttonText: 'About Us',
            link: '/', 
        },
    }

    let gridProps = [
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraAirLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraAir',
            headerText: 'IntraAir',
            subHeaderText: 'We are the MRT\'s airline.',
            descriptorText: "Hundreds of flights to over 100 airports.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRailLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraRail',
            headerText: 'IntraRail',
            subHeaderText: 'The way to ride.',
            descriptorText: "The MRT's biggest warp rail company.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraBusLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraBus',
            headerText: 'IntraBus',
            subHeaderText: 'Even more connections.',
            descriptorText: "Bringing Intra to even more places.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraSailLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraSail',
            headerText: 'IntraSail',
            subHeaderText: 'Set sail with us.',
            descriptorText: "Intra's passenger ferry service.",
            link: '/'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraBahnLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'IntraBahn',
            headerText: 'IntraBahn',
            subHeaderText: 'Ride the open rails.',
            descriptorText: "Intra's traincart rail service.",
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