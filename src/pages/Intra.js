import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Intra.module.css';

import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import SectionHeader from '../components/SectionHeader';
import ImageScroller from '../components/ImageScroller';
import ItemSmall from '../components/ItemSmall';
import IntraStatus from '../components/IntraStatus';

import intraAirPhoto from '../images/intraair-1.png';
import siletzPhoto from '../images/intrarail-siletz-5.png';

import intraRouteShort from '../intraroute/logos/intraroute-short.svg';
import intraRouteLogo from '../intraroute/logos/intraroute.svg';

import intraAirLogo from '../intraroute/logos/intraair.svg';
import intraRailLogo from '../intraroute/logos/intrarail.svg';
import intraBusLogo from '../intraroute/logos/intrabus.svg';
import intraSailLogo from '../intraroute/logos/intrasail.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn.svg';

import easternHeliLogo from '../intraroute/logos/eastern-airways-heli-lines-condensed.svg';
import heampsteadCharterLogo from '../intraroute/logos/heampstead-charter-condensed.png';
import intraHeliLogo from '../intraroute/logos/intraair-heli-lines-condensed.svg';
import intraPoseidonLogo from '../intraroute/logos/intraair-poseidon-condensed.svg';
import volantiLogo from '../intraroute/logos/italiani-volanti.svg';
import mcrLogo from '../intraroute/logos/mcr.svg';
import mcrLumevaLogo from '../intraroute/logos/mcr-urban-lumeva.svg';
import mcrScarLogo from '../intraroute/logos/mcr-urban-scarborough.svg';
import omegaLogo from '../intraroute/logos/omegabus.svg';
import segvilleAirLogo from '../intraroute/logos/segville-air.svg';
import segvilleHeliLogo from '../intraroute/logos/segville-air-heli-lines-condensed.svg';
import skyWestLogo from '../intraroute/logos/skywest-airlines.svg';
import waypointLogo from '../intraroute/logos/waypoint.svg';
import gemsLogo from '../intraroute/logos/gems-airline.svg';
import acaciaLogo from '../intraroute/logos/acaciaair.svg';
import puntaLogo from '../logos/punta-airport-company.png';
import intraJetEamLogoSmall from '../logos/intrajet-eam-small.svg';
import intraTrainsLogo from '../logos/intratrains.svg';
import intraFleetLogo from '../logos/intrafleet.svg';

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
            imgSrc: intraRouteLogo,
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
            imgSrc: siletzPhoto,
            imgAlt: 'IntraRail train',
            imgWidth: '100%',
            imgMaxWidth: undefined,
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Service status. Anytime.',
            descriptorText: 'Your home for service status across all of Intra.',
            renderButton: true,
            buttonText: 'Check Service Status',
            link: '#alerts', 
        },
    }

    let gridPropsMain = [
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

    let gridPropsAir = [
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
            descriptorText: "The core of our airline brand.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraAir'
        },
        {
            boxColor: '#faa918',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: waypointLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'Waypoint',
            headerText: 'Waypoint',
            subHeaderText: 'It\'s a big world out there.',
            descriptorText: "From Airchester to the world.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Waypoint'
        },
        {
            boxColor: '#c1272d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: segvilleAirLogo,
            imgHeightDesktop: '55px',
            imgHeightMobile: '100px',
            imgAlt: 'Segville Air',
            headerText: 'Segville Air',
            subHeaderText: 'Segville\'s airline.',
            descriptorText: "Fly with Segville's hometown airline.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Segville_Air'
        },
        {
            boxColor: '#f9801d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: acaciaLogo,
            imgHeightDesktop: '95px',
            imgHeightMobile: '170px',
            imgAlt: 'AcaciaAir',
            headerText: 'AcaciaAir',
            subHeaderText: 'Coming soon!',
            descriptorText: "Coming soon to an NPR near you.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/AcaciaAir'
        },
        {
            boxColor: '#157d9e',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: skyWestLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'SkyWest Airlines',
            headerText: 'SkyWest Airlines',
            headerFontSize: '37px',
            subHeaderText: 'Off to Whitechapel.',
            descriptorText: "Whitechapel's hometown airline.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/SkyWest_Airlines'
        },
        {
            boxColor: '#00663f',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: volantiLogo,
            imgHeightDesktop: '40px',
            imgHeightMobile: '80px',
            imgAlt: 'Italiani Volanti',
            headerText: 'Italiani Volanti',
            subHeaderText: 'Ciao MineCity.',
            descriptorText: "Flying across the Old World.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Italiani_Volanti'
        },
        {
            boxColor: '#9dced1',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: gemsLogo,
            imgHeightDesktop: '80px',
            imgHeightMobile: '160px',
            imgAlt: 'GEMS Airline',
            headerText: 'GEMS Airline',
            subHeaderText: 'Be the sparkle in the sky.',
            descriptorText: "Shine bright like a diamond.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/GEMS_Airline'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraPoseidonLogo,
            imgHeightDesktop: '90px',
            imgHeightMobile: '160px',
            imgAlt: 'IntraAir Poseidon',
            headerText: 'IntraAir Poseidon',
            headerFontSize: '36px',
            subHeaderText: 'From air to sea.',
            descriptorText: "IntraAir's seaplane airline.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraAir_Poseidon'
        },
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraHeliLogo,
            imgHeightDesktop: '90px',
            imgHeightMobile: '160px',
            imgAlt: 'IntraAir Heli Lines',
            headerText: 'IntraAir Heli Lines',
            headerFontSize: '36px',
            subHeaderText: 'To even more places.',
            descriptorText: "Reach more places with IntraAir's helicopters.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraAir_Heli_Lines'
        },
        {
            boxColor: '#c1272d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: segvilleHeliLogo,
            imgHeightDesktop: '100px',
            imgHeightMobile: '180px',
            imgAlt: 'Segville Air Heli Lines',
            headerText: 'Segville Air Heli Lines',
            headerFontSize: '35px',
            subHeaderText: '',
            descriptorText: "Segville's hometown helicopters.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Segville_Air_Heli_Lines'
        },
        {
            boxColor: '#ff8c0f',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: heampsteadCharterLogo,
            imgHeightDesktop: '90px',
            imgHeightMobile: '160px',
            imgAlt: 'Heampstead Charter',
            headerText: 'Heampstead Charter',
            headerFontSize: '35px',
            subHeaderText: '',
            descriptorText: "Heampstead's hometown helicopters.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Heampstead_Charter'
        },
        {
            boxColor: '#faa61a',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: easternHeliLogo,
            imgHeightDesktop: '100px',
            imgHeightMobile: '180px',
            imgAlt: 'Eastern Airways Heli Lines',
            headerText: 'Eastern Airways Heli Lines',
            headerFontSize: '35px',
            subHeaderText: '',
            descriptorText: "Simply fly.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/Eastern_Airways_Heli_Lines'
        },
    ]

    let gridPropsRail = [
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
            boxColor: '#1300fe',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: mcrLogo,
            imgHeightDesktop: '65px',
            imgHeightMobile: '100px',
            imgAlt: 'MCR',
            headerText: 'MCR',
            subHeaderText: 'On the line, on the go.',
            descriptorText: "Bring IntraRail's network even further.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/MCR'
        },
    ]

    let gridPropsBus = [
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
            boxColor: '#ff0000',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: omegaLogo,
            imgHeightDesktop: '50px',
            imgHeightMobile: '100px',
            imgAlt: 'OMEGAbus!',
            headerText: 'OMEGAbus!',
            subHeaderText: 'Connect the Old World.',
            descriptorText: "Ride on the classic IntraBus network.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/OMEGAbus!'
        },
    ]

    let gridPropsManufacturing = [
        {
            boxColor: '#cca77f',
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
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraFleetLogo,
            imgHeightDesktop: '90px',
            imgHeightMobile: '170px',
            imgAlt: 'IntraFleet',
            headerText: 'IntraFleet',
            subHeaderText: 'The engine of the world.',
            descriptorText: "We build the buses that move the world.",
            link: 'https://wiki.minecartrapidtransit.net/index.php/IntraFleet'
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
                <ItemSmall
                    imgSrc={intraRouteShort}
                    imgAlt='IntraRoute'
                    imgWidthDesktop='350px'
                    imgWidthMobile=''
                    imgHeightDesktop=''
                    imgHeightMobile='100px'
                    boxColor='#4d4d4d'
                    textColor='white'
                    headerText='IntraRoute is now in beta.'
                    descriptorText='Going everywhere has never been easier.'
                    renderButton={true}
                    buttonText='Find Your Way'
                    link='/intraroute'
                />
            </div>
            <div className={styles.section}>
                <SectionHeader text='Our Core Brands' color='#4d4d4d' border={false} />
                <Grid propsArray={gridPropsMain} />
            </div>
            <div className={styles.section}>
                <SectionHeader text='The IntraAir Family' color='#4d4d4d' border={false} />
                <Grid propsArray={gridPropsAir} />
            </div>
            <div className={styles.section}>
                <SectionHeader text='The IntraRail Family' color='#4d4d4d' border={false} />
                <Grid propsArray={gridPropsRail} />
            </div>
            <div className={styles.section}>
                <SectionHeader text='The IntraBus Family' color='#4d4d4d' border={false} />
                <Grid propsArray={gridPropsBus} />
            </div>
            <div className={styles.section}>
                <SectionHeader text='Intra Manufacturing' color='#4d4d4d' border={false} />
                <Grid propsArray={gridPropsManufacturing} />
            </div>
            <div className={styles.section} id='alerts'>
                <SectionHeader text='Service Alerts' color='#4d4d4d' border={false} />
                <IntraStatus />
            </div>
        </>
    )
}

export default Intra;