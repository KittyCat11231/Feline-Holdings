import React from 'react';
import styles from './IntraStatus.module.css';

import intraAirLogo from '../intraroute/logos/intraair-white.svg';
import intraRailLogo from '../intraroute/logos/intrarail-white.svg';
import intraBusLogo from '../intraroute/logos/intrabus-white.svg';
import intraSailLogo from '../intraroute/logos/intrasail-white.svg';
import intraBahnLogo from '../intraroute/logos/intrabahn-white.svg';

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
                    routeColor='red'
                    routeName='Bee Twelver'
                    routeNameColor='white'
                    showRouteSymbol={true}
                    routeSymbol={intraRail51}
                    status='Station Closure'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Trains bypass Veldberg SE7.'
                    descriptionBoxColor='#bab863'
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
                    routeColor='black'
                    routeName='Bee Twelver'
                    routeNameColor='white'
                    showRouteSymbol={true}
                    routeSymbol={intraRail54}
                    status='Station Closure'
                    statusColor='olive'
                    statusTextColor='white'
                    description='Trains bypass Geneva Bay New Indigo International Airport.'
                    descriptionBoxColor='#bab863'
                    descriptionColor='white'
                    showLink={true}
                    link='https://wiki.minecartrapidtransit.net/index.php/IntraRail#Service_Changes'
                />
            </div>
        </div>
    )
}

export default IntraStatus;