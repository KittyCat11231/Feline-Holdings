import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Home.module.css';

import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import SectionHeader from '../components/SectionHeader';
import ItemSmall from '../components/ItemSmall';
import ItemLarge from '../components/ItemLarge';

import fhCenter from '../images/fh-center-6.png';
import intraRouteLogo from '../intraroute/logos/intraroute.svg';
import intraRouteShort from '../intraroute/logos/intraroute-short.svg';
import mbsMls from '../assets/mbs-mls.svg';
import demoImg from '../images/intrarail-siletz-2.png';

import intraLogo from '../logos/intra-wordmark.svg';
import royDisneyLogo from '../logos/roy-disney.svg';
import mbsLogo from '../logos/mbs-main.svg';
import bartLogo from '../logos/bart.svg';
import fossackLogo from '../logos/fossack-notseca.svg';
import fhLogoSmall from '../logos/feline-holdings-small.svg';

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
            renderButton: true,
            buttonText: 'About Us',
            link: '/about', 
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
            link: 'https://www.youtube.com/@MBS_MRT', 
        },
    }

    let gridProps = [
        {
            boxColor: '#4d4d4d',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: intraLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '500px',
            imgAlt: 'Intra',
            headerText: 'Go everywhere',
            subHeaderText: 'with Intra.',
            descriptorText: "The MRT's largest transportation conglomerate.",
            link: '/intra'
        },
        {
            boxColor: '#5a86a8',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: royDisneyLogo,
            imgWidthDesktop: '400px',
            imgWidthMobile: '600px',
            imgAlt: 'Roy Disney',
            headerText: 'Make moments',
            subHeaderText: 'with Roy Disney.',
            descriptorText: "The MRT's biggest media company.",
            link: '/roy-disney'
        },
        {
            boxColor: 'blue',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: mbsLogo,
            imgWidthDesktop: '300px',
            imgWidthMobile: '450px',
            imgAlt: 'MBS',
            headerText: 'On the air',
            subHeaderText: 'with MBS.',
            descriptorText: "The MRT's most watched broadcaster.",
            link: '/mbs'
        },
        {
            boxColor: '#30acdf',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: bartLogo,
            imgWidthDesktop: '270px',
            imgWidthMobile: '350px',
            imgAlt: 'BART',
            headerText: 'Keep on moving',
            subHeaderText: 'with BART.',
            descriptorText: "Bringing you to the world.",
            link: '/bart'
        },
        {
            boxColor: '#003875',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: fossackLogo,
            imgWidthDesktop: '330px',
            imgWidthMobile: '500px',
            imgAlt: 'Fossack Notseca',
            headerText: 'Redacted',
            subHeaderText: 'with Fossack Notseca.',
            descriptorText: "Redacted.",
            link: '/fossack-notseca'
        },
        {
            boxColor: '#ffc90e',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: fhLogoSmall,
            imgWidthDesktop: '240px',
            imgWidthMobile: '310px',
            imgTranslateYDesktop: '40px',
            imgTranslateYMobile: '56px',
            imgAlt: 'Feline Holdings',
            headerText: 'Learn more',
            subHeaderText: 'about our other brands.',
            descriptorText: "The Feline Holdings family of companies.",
            link: '/other-companies'
        }
    ]

    return (
        <div>
            <Helmet>
                <title>Home | Feline Holdings</title>
                <meta property="og:title" content="Home | Feline Holdings" />
                <meta name="twitter:title" content="Home | Feline Holdings" />
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
                <SectionHeader text='Our Brands' color='#ffc90e' border={true} borderColor='#ff7f27' />
                <Grid propsArray={gridProps} />
            </div>
        </div>
    );
}

export default Home;