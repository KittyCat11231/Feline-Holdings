import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Intra.module.css';

import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import SectionHeader from '../components/SectionHeader';
import ImageScroller from '../components/ImageScroller';

import intraAirPhoto from '../images/intraair-1.png';
import intraRouteShort from '../intraroute/logos/intraroute-short.svg';

import intraAirLogo from '../intraroute/logos/intraair.svg';
import intraRailLogo from '../intraroute/logos/intrarail.svg';
import intraBusLogo from '../intraroute/logos/intrabus.svg';
import intraSailLogo from '../intraroute/logos/intrasail.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn.svg';

import easternHeliLogo from '../intraroute/logos/eastern-airways-heli-lines.svg';
import heampsteadCharterLogo from '../intraroute/logos/heampstead-charter.svg';
import intraHeliLogo from '../intraroute/logos/intraair-heli-lines.svg';
import intraPoseidonLogo from '../intraroute/logos/intraair-poseidon.svg';
import volantiLogo from '../intraroute/logos/italiani-volanti.svg';
import mcrLogo from '../intraroute/logos/mcr.svg';
import mcrLumevaLogo from '../intraroute/logos/mcr-urban-lumeva.svg';
import mcrScarLogo from '../intraroute/logos/mcr-urban-scarborough.svg';
import omegaLogo from '../intraroute/logos/omegabus.svg';
import segvilleAirLogo from '../intraroute/logos/segville-air.svg';
import segvilleHeliLogo from '../intraroute/logos/segville-air-heli-lines.svg';
import skyWestLogo from '../intraroute/logos/skywest-airlines.svg';
import waypointLogo from '../intraroute/logos/waypoint.svg';
import gemsLogo from '../intraroute/logos/gems-airline.png';
import puntaLogo from '../logos/punta-airport-company.png';
import intraTrainsLogo from '../logos/intratrains.svg';
import intraJetEamLogoSmall from '../logos/intrajet-eam-small.svg';

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
            headerText: 'Service status. Anytime.',
            descriptorText: 'Your home for service status across all of Intra.',
            renderButton: true,
            buttonText: 'Check Service Status',
            link: '/', 
        },
    }

    let gridProps1 = [
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraAirLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'IntraAir',
            headerText: 'IntraAir',
            subHeaderText: 'We are the MRT\'s airline.',
            descriptorText: "Hundreds of flights to over 100 airports.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraAir'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraRailLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'IntraRail',
            headerText: 'IntraRail',
            subHeaderText: 'The way to ride.',
            descriptorText: "The MRT's biggest warp rail company.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraRail'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraBusLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'IntraBus',
            headerText: 'IntraBus',
            subHeaderText: 'Even more connections.',
            descriptorText: "Bringing Intra to even more places.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraBus'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraSailLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'IntraSail',
            headerText: 'IntraSail',
            subHeaderText: 'Set sail with us.',
            descriptorText: "Intra's passenger ferry service.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraSail'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraBahnLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'IntraBahn',
            headerText: 'IntraBahn',
            subHeaderText: 'Ride the open rails.',
            descriptorText: "Intra's traincart rail service.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraBahn'
        },
    ]

    let gridProps2 = [
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraJetEamLogoSmall,
            imgHeightDesktop: '95px',
            imgHeightMobile: '150px',
            imgAlt: 'IntraJet-EAM',
            headerText: 'IntraJet-EAM',
            subHeaderText: 'Designing your journey.',
            descriptorText: "One of the MRT's biggest aircraft manufacturers.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraJet-EAM'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraTrainsLogo,
            imgHeightDesktop: '55px',
            imgHeightMobile: '100px',
            imgAlt: 'IntraTrains',
            headerText: 'IntraTrains',
            subHeaderText: 'Getting you on track.',
            descriptorText: "We build the trains that move the world.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraTrains'
        },
        {
            boxColor: '#1c7ec2',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: puntaLogo,
            imgHeightDesktop: '140px',
            imgHeightMobile: '200px',
            imgAlt: 'Punta Airport Company',
            headerText: 'Punta Airport Co.',
            subHeaderText: 'The world\'s gateway.',
            descriptorText: "Managing airports across the MRT.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Punta_Airport_Company',
            headerFontSize: '36px',
            subHeaderTopMargin: '-2px'
        },
    ]

    let imageScrollerProps = [
        {
            src: intraAirLogo,
            alt: 'IntraAir'
        },
        {
            src: segvilleAirLogo,
            alt: 'Segville Air'
        },
        {
            src: waypointLogo,
            alt: 'Waypoint'
        },
        {
            src: volantiLogo,
            alt: 'Italiani Volanti'
        },
        {
            src: skyWestLogo,
            alt: 'SkyWest Airlines'
        },
        {
            src: gemsLogo,
            alt: 'GEMS Airline'
        },
        {
            src: intraHeliLogo,
            alt: 'IntraAir Heli Lines'
        },
        {
            src: segvilleHeliLogo,
            alt: 'Segville Air Heli Lines'
        },
        {
            src: heampsteadCharterLogo,
            alt: 'Heampstead Charter'
        },
        {
            src: easternHeliLogo,
            alt: 'Eastern Airways Heli Lines'
        },
        {
            src: intraPoseidonLogo,
            alt: 'IntraAir Poseidon'
        },
        {
            src: intraRailLogo,
            alt: 'IntraRail'
        },
        {
            src: mcrLogo,
            alt: 'MCR'
        },
        {
            src: intraBusLogo,
            alt: 'IntraBus'
        },
        {
            src: omegaLogo,
            alt: 'OMEGAbus!'
        },
        {
            src: intraSailLogo,
            alt: 'IntraSail'
        },
        {
            src: intraBahnLogo,
            alt: 'IntraBahn'
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
                <Grid propsArray={gridProps1} />
            </div>
            <div className={styles.section}>
                <SectionHeader text='Other Intra Companies' color='#4d4d4d' border={false} />
                <Grid propsArray={gridProps2} />
            </div>
            <div className={styles.scroller}>
                <ImageScroller propsArray={imageScrollerProps} />
            </div>
        </>
    )
}

export default Intra;