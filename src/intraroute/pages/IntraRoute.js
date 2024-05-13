import React from 'react';
import styles from './IntraRoute.module.css';

import SearchBarTest from '../components/SearchBarTest';
import Path from '../components/Path';
import Search from '../components/Search';

import intraRouteLogo from '../logos/intraroute.svg';
import intraRouteLogoWhite from '../logos/intraroute-white.svg';
import intraRouteLogoShort from '../logos/intraroute-short.svg';
import intraRouteLogoShortWhite from '../logos/intraroute-short-white.svg';

function IntraRoute() {
    let currentYear = new Date().getFullYear();
    let currentYearEdit;
    if (currentYear === 2024) {
        currentYearEdit = currentYear;
    } else {
        currentYearEdit = `2024 - ${currentYear}`
    }
    return (
        <div>
            <div className={styles.logoBox}>
                <img className={styles.topLogo} src={intraRouteLogo} alt='IntraRoute' />
            </div>
            <div className={styles.search}>
                <Search />
            </div>
            <div className={styles.buffer}></div>
            <div className={styles.logoBox}>
                <img className={styles.bottomLogo} src={intraRouteLogoShort} alt='IntraRoute' />
            </div>
            <div className={styles.footer1}>
                <p className={styles.pGray}>IntraRoute Beta 1.0.0</p>
                <p className={styles.pGray}>5/32/2024</p>
                <p className={styles.pGray}>Created by kyle11231 with help from DNAmaster10 & scarycrumb.</p>
                <a href='intraroute-changelog'><p>Version history & changelog</p></a>
            </div>
            <div className={styles.footer2}>
                <p className={styles.pGray}>© {currentYearEdit} Intra. A Feline Holdings company.</p>
                <p className={styles.pGray}>Designed by Roy Disney Softworks. A Feline Holdings company.</p>
            </div>
        </div>
    )
}

export default IntraRoute;