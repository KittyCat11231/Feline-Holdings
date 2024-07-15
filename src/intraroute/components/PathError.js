'use client'
 
import React from 'react';
import styles from './PathError.module.css';

import intraRouteLogoShortWhite from '../logos/intraroute-short-white.svg';

function PathError(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Something went wrong.</h1>
            <p className={styles.p}>IntraRoute encountered a problem processing this route, and was unable to continue.</p>
            <p className={styles.p}>Please send the following to <span className={styles.bold}>intra@felineholdings.com</span> or contact kyle11231 so we can identify and fix the issue:</p>
            <br />
            <p className={styles.p}>start: <span className={styles.bold}>{props.start}</span></p>
            <p className={styles.p}>end: <span className={styles.bold}>{props.end}</span></p>
            <p className={styles.p}>useAir: <span className={styles.bold}>{props.filters.useAir.toString()}</span></p>
            <p className={styles.p}>useRail: <span className={styles.bold}>{props.filters.useRail.toString()}</span></p>
            <p className={styles.p}>useSail: <span className={styles.bold}>{props.filters.useSail.toString()}</span></p>
            <p className={styles.p}>useBahn: <span className={styles.bold}>{props.filters.useBahn.toString()}</span></p>
            <p className={styles.p}>useBus: <span className={styles.bold}>{props.filters.useBus.toString()}</span></p>
            <p className={styles.p}>useRailLocal: <span className={styles.bold}>{props.filters.useRailLocal.toString()}</span></p>
            <br />
            <h2 className={styles.h2}>Sorry about that. :/</h2>
            <img className={styles.logo} src={intraRouteLogoShortWhite} alt='IntraRoute' />
        </div>
    )
}

export default PathError;