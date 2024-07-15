'use client'
 
import React from 'react';
import styles from './IntraStatus.module.css';

import intraAirLogo from '../intraroute/logos/intraair-white.svg';
import intraRailLogo from '../intraroute/logos/intrarail-white.svg';
import intraBusLogo from '../intraroute/logos/intrabus-white.svg';
import intraSailLogo from '../intraroute/logos/intrasail-white.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn-white.svg';

import intraRail54 from '../intraroute/assets/intrarail/bullets/54.png';

function StatusLine(props) {
    return (
        <>
            <div className={styles.lineContainer}>
                <div
                    className={styles.modeBox}
                    style={{
                        backgroundColor: props.modeColor
                    }}
                >
                    <img className={styles.logo} src={props.logoSrc} alt={props.logoAlt} />
                </div>
                <div
                    className={styles.routeBox}
                    style={{
                        backgroundColor: props.routeColor
                    }}
                >
                    {props.showRouteSymbol ?
                        <img
                            className={styles.routeSymbol}
                            src={props.routeSymbol}
                        />
                        :
                        ''
                    }
                    <p
                        className={`${styles.route} ${styles.text}`}
                        style={{
                            color: props.routeNameColor
                        }}
                    >
                        {props.routeName}
                    </p>
                </div>
                <div
                    className={styles.statusBox}
                    style={{
                        backgroundColor: props.statusColor
                    }}
                >
                    <p
                        className={`${styles.status} ${styles.text}`}
                        style={{
                            color: props.statusTextColor
                        }}
                    >
                        {props.status}
                    </p>
                </div>
                {props.showLink ?
                    <a
                        className={styles.moreInfoBox}
                        href={props.link}
                    >
                        <p className={`${styles.moreInfo} ${styles.text}`}>
                            Click here for details.
                        </p>
                    </a>
                    :
                    ''
                }
            </div>
            <div
                className={styles.descriptionBox}
                style={{
                    backgroundColor: props.descriptionBoxColor
                }}
            >
                <p
                    className={`${styles.description} ${styles.text}`}
                    style={{
                        color: props.descriptionColor
                    }}
                >
                    {props.description}
                </p>
            </div>
        </>
    )
}

function IntraStatus() {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraAirLogo.src}
                    logoAlt='IntraAir'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Flight 145'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to airport reconstruction at Geneva Bay New Indigo International Airport (GBE).'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={false}
                    link='/'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraAirLogo.src}
                    logoAlt='IntraAir'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Flight 167'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to airport reconstruction at Caprica International Airport (CAP).'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={false}
                    link='/'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraAirLogo.src}
                    logoAlt='IntraAir'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Flight 246'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to airport reconstruction at Geneva Bay New Indigo International Airport (GBE).'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={false}
                    link='/'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraAirLogo.src}
                    logoAlt='IntraAir'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Flight 556'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to airport reconstruction at Geneva Bay New Indigo International Airport (GBE).'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={false}
                    link='/'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraAirLogo.src}
                    logoAlt='IntraAir'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Flight 652'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to airport reconstruction at Caprica International Airport (CAP).'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={false}
                    link='/'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraRailLogo.src}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='black'
                    routeName='Bee Twelver'
                    routeNameColor='white'
                    showRouteSymbol={true}
                    routeSymbol={intraRail54}
                    status='Station Closure'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Trains bypass Geneva Bay New Indigo International Airport due to airport reconstruction and accidental damage to our station.'
                    descriptionBoxColor='#bab863'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo.src}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Route 102'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to road construction near UCWT International Airport.'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Alert'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo.src}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='#e6e6e6'
                    routeName='Route 103'
                    routeNameColor='black'
                    showRouteSymbol={false}
                    routeSymbol={undefined}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Service is suspended due to road construction near UCWT International Airport.'
                    descriptionBoxColor='#f98585'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Alert'
                />
            </div>
        </div>
    )
}

export default IntraStatus;