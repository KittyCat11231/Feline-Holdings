import React from 'react';
import styles from './IntraStatus.module.css';

import intraAirLogo from '../intraroute/logos/intraair-white.svg';
import intraRailLogo from '../intraroute/logos/intrarail-white.svg';
import intraBusLogo from '../intraroute/logos/intrabus-white.svg';
import intraSailLogo from '../intraroute/logos/intrasail-white.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn-white.svg';

import intraBusLogoGray from '../intraroute/logos/intrabus.svg';

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
                    logoSrc={intraRailLogo}
                    logoAlt='IntraRail'
                    modeColor='#4d4d4d'
                    routeColor='#da1714'
                    routeName='201 Utopiary'
                    routeNameColor='white'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Part Suspended'
                    statusColor='gold'
                    statusTextColor='black'
                    description='No service between Espil Sanders Station and Aprix.'
                    descriptionBoxColor='#da1714'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
            <div className={styles.line}>
                <StatusLine
                    logoSrc={intraBusLogo}
                    logoAlt='IntraBus'
                    modeColor='#4d4d4d'
                    routeColor='white'
                    routeName='901'
                    routeNameColor='#4d4d4d'
                    showRouteSymbol={false}
                    routeSymbol={null}
                    status='Special Service'
                    statusColor='blue'
                    statusTextColor='white'
                    description='Rail replacement service between Espil and Aprix for the IntraRail 201.'
                    descriptionBoxColor='#4d4d4d'
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
        </div>
    )
}

export default IntraStatus;