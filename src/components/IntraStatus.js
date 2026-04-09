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
                    routeColor='#f082a5'
                    routeName='1X Republic Express'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Segville and Zaquar. Use the 7X. Makes an additional stop at Siletz Salvador Station.'
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
                    routeName='2 Mountain Lion'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Reroute'
                    statusColor='blue'
                    statusTextColor='white'
                    description="Trains don't stop at Utopia Plano, Delta City Henry Avenue, or Matheson Araya Avenue. Use the 404 and IntraBus 906. Trains run via the 103 between Utopia and Schillerton, and via the MCR 501 between Schillerton and Zaquar."
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
                    routeColor='#63dbd6'
                    routeName='4 Imperial Service'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Siletz and Zaquar. Use the 2X and IntraBus 390 and 906. Makes additional stops to replace the 7 between Siletz and Elecna Bay.'
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
                    routeName='4X Mason Limited'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Siletz and Zaquar. Use IntraBus 906. Makes additional stops to replace the 7X between Siletz and Elecna Bay.'
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
                    routeColor='#63dbd6'
                    routeName='7 Tundrean Bear'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Siletz and Zaquar. Use the 4 and IntraBus 906.'
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
                    routeName='7X Sunshine Limited'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Siletz and Zaquar. Use the 4X and IntraBus 906.'
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
                    routeName='101 Whiteliner'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Whiteley and Zaquar. Use the 2.'
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
                    routeColor='#63dbd6'
                    routeName='102 EPIC Express'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Zaquar and Elecna Bay. Use IntraBus 906.'
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
                    routeColor='#63dbd6'
                    routeName='103 Anthony Fokker'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Trains are not running. Use the 2, 7X, and 405.'
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
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#27d950'
                    routeName='301 Zaquar Zephyr'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='yellow'
                    statusTextColor='black'
                    description='Suspended between Zaquar Shores and Zaquar Hummingbird Dock. For Zaquar North, use IntraBus 390.'
                    descriptionBoxColor='#27d950'
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
                    routeColor='#f4bd21'
                    routeName='404 Southern Cardinal'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Temporary service between Utopia and Isle of Chez to replace the 2.'
                    descriptionBoxColor='#f4bd21'
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
                    routeColor='#f4bd21'
                    routeName='405 Waterloo Shuttle'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Temporary service between Boston Waterloo Station and Boston Clapham Junction to replace the 103.'
                    descriptionBoxColor='#f4bd21'
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
                    routeName='4'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Buses make an additional stop at Antioch-Bay Point Garvey International Airport.'
                    descriptionBoxColor='#333333'
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
                    routeName='399'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Suspended'
                    statusColor='red'
                    statusTextColor='white'
                    description='Buses are not running on this route. Use route 4.'
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
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='#f4bd21'
                    routeName='906'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Temporary service stopping at Siletz, Matheson, Elecna Bay, and Zaquar to replace the IntraRail 2, 4, 4X, 7, 7X, and 102.'
                    descriptionBoxColor='#f4bd21'
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
                    routeColor='#f4bd21'
                    routeName='907'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Temporary service between Larkspur Lilyflower Bus Station and Larkspur Public Hospital.'
                    descriptionBoxColor='#f4bd21'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraBus#Service_Changes'
                />
            </div>
        </div>
    )
}

export default IntraStatus;