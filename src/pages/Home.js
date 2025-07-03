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
import katiesoftStore from '../images/katiesoft-2.png';
import katiesoftLogoSmall from '../logos/katiesoft-small.svg';
import demoImg from '../images/intrarail-siletz-2.png';

import intraLogo from '../logos/intra-wordmark.svg';
import royDisneyLogo from '../logos/roy-disney-mbs.svg';
import mbsLogo from '../logos/mbs-main.svg';
import katiesoftLogo from '../logos/katiesoft.svg'
import felineRetailLogo from '../logos/feline-retail-group-short.svg';
import bartLogo from '../logos/bart.svg';
import mossackLogo from '../logos/mossack-fonseca.svg';
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
            descriptorText: "Intra's official routefinder.",
            renderButton: true,
            buttonText: 'Find Your Way',
            link: '/intraroute', 
        },
        post3: {
            color: '#ff7bac',
            imgBoxColor: 'white',
            imgSrc: katiesoftLogoSmall,
            imgAlt: 'Katiesoft',
            imgWidth: undefined,
            imgMaxWidth: '1000px',
            imgHeight: '100%',
            imgMaxHeight: undefined,
            imgTransform: undefined,
            headerText: 'Introducing Katiesoft.',
            descriptorText: "Tech should be fun.",
            renderButton: true,
            buttonText: 'Learn More',
            link: '/katiesoft', 
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
            boxColor: '#5a86a8',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: royDisneyLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '650px',
            imgAlt: 'Roy Disney MBS',
            headerText: 'Make moments',
            subHeaderText: 'with Roy Disney MBS.',
            descriptorText: "The MRT's biggest media company.",
            link: '/roy-disney-mbs'
        },
        {
            boxColor: '#ff7bac',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: katiesoftLogo,
            imgWidthDesktop: '350px',
            imgWidthMobile: '550px',
            imgAlt: 'Katiesoft',
            headerText: 'Bring on the fun',
            subHeaderText: 'with Katiesoft.',
            descriptorText: "Tech should be fun.",
            link: '/retail'
        },
        {
            boxColor: '#ffc90e',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: felineRetailLogo,
            imgWidthDesktop: '400px',
            imgWidthMobile: '450px',
            imgAlt: 'Feline Retail Group',
            headerText: 'Shop away',
            subHeaderText: 'with Feline Retail Group.',
            descriptorText: "The retail brands of Feline Holdings.",
            link: '/retail'
        },
        {
            boxColor: '#30acdf',
            textColor: 'white',
            imgBoxColor: 'white',
            imgSrc: bartLogo,
            imgWidthDesktop: '200px',
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
            imgSrc: mossackLogo,
            imgWidthDesktop: '330px',
            imgWidthMobile: '500px',
            imgAlt: 'Fossack Notseca',
            headerText: 'Redacted',
            subHeaderText: 'with Mossack Fonseca.',
            descriptorText: "Redacted.",
            link: '/mossack-fonseca'
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
                    headerText='Get there with IntraRoute.'
                    descriptorText='Intra gets you there. IntraRoute makes it easy.'
                    renderButton={true}
                    buttonText='Find Your Way'
                    link='/intraroute'
                />
            </div>
            <div className={styles.section}>
                <SectionHeader text='Our Companies' color='#ffc90e' border={true} borderColor='#ff7f27' />
                <Grid propsArray={gridProps} />
            </div>
        </div>
    );
}

export default Home;