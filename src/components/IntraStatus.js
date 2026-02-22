import React from 'react';
import styles from './IntraStatus.module.css';

import intraAirLogo from '../intraroute/logos/intraair-white.svg';
import intraRailLogo from '../intraroute/logos/intrarail-white.svg';
import intraBusLogo from '../intraroute/logos/intrabus-white.svg';
import intraSailLogo from '../intraroute/logos/intrasail-white.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn-white.svg';
import mcrLogo from '../intraroute/logos/mcr-white.svg';

import intraBusLogoGray from '../intraroute/logos/intrabus.svg';
import intraAirLogoGray from '../intraroute/logos/intraair.svg';
import mcrLogoBlue from '../intraroute/logos/mcr.svg';

import intraRail51 from '../intraroute/assets/intrarail/bullets/51-white.png';
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
                    logoSrc={intraAirLogoGray}
                    logoAlt='IntraAir'
                    modeColor='white'
                    routeColor='#4d4d4d'
                    routeName='All Flights'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Notice'
                    statusColor='orange'
                    statusTextColor='black'
                    description='Expect service disruptions and some duplicate flight numbers as IntraAir rolls out its 2025 network changes.'
                    descriptionBoxColor='#4d4d4d'
                    descriptionColor='white'
                    showLink={false}
                    link=''
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#63dbd6'
                    routeName='6 Grand Northern'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Stop Skipped'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Trains bypass Titsensaki Sealerwhale International Airport.'
                    descriptionBoxColor='#63dbd6'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#f082a5'
                    routeName='10X East Mesan'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Stop Skipped'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Trains bypass Plage Rouge-Seki City.'
                    descriptionBoxColor='#f082a5'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#63dbd6'
                    routeName='106 Joeliner'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Some trains terminate at Marblegate-Lakeview Heathrow Airport instead of Marblegate Centraal.'
                    descriptionBoxColor='#63dbd6'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#DA1714'
                    routeName='211 Taiga Crescent'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Larkspur and Willow. After Willow, makes 214 stops between Borealia and Skogheim.'
                    descriptionBoxColor='#DA1714'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#DA1714'
                    routeName='214 Lilyflower'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Skogheim and Snowtopic.'
                    descriptionBoxColor='#DA1714'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={mcrLogoBlue}
                    logoAlt='MCR'
                    modeColor='white'
                    routeColor='#0000ff'
                    routeName='505 Salvador Line'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Trains are not running. Use the IntraRail 106 or IntraBus routes 1, 201, and 313.'
                    descriptionBoxColor='#0000ff'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogoGray}
                    logoAlt='IntraBus'
                    modeColor='white'
                    routeColor='#333333'
                    routeName='1'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Sunshine Cove and Inkwell. Buses make an additional stop at Sunshine Cove Waterside.'
                    descriptionBoxColor='#333333'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogoGray}
                    logoAlt='IntraBus'
                    modeColor='white'
                    routeColor='#4D4D4D'
                    routeName='103'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Bean City and Blackberry City Main Street. Use the IntraRail 107.'
                    descriptionBoxColor='#4D4D4D'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogoGray}
                    logoAlt='IntraBus'
                    modeColor='white'
                    routeColor='#4D4D4D'
                    routeName='112'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Extended from Inkwell to Eastbourne via route 1. Buses make an additional stop at Ellerton Fosby Ferry Port.'
                    descriptionBoxColor='#4D4D4D'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='#b3b3b3'
                    routeName='332'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Stop Skipped'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Buses skip Ellerton Fosby Ferry Port. Use route 112.'
                    descriptionBoxColor='#b3b3b3'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='#b3b3b3'
                    routeName='347'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Buses are not running on this route. Use route 1.'
                    descriptionBoxColor='#b3b3b3'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='#b3b3b3'
                    routeName='405'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Stop Skipped'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Buses skip Larkspur Beckham Cross Terminal.'
                    descriptionBoxColor='#b3b3b3'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
        </div>
    )
}

export default IntraStatus;