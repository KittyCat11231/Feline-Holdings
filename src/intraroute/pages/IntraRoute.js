import React from 'react';
import { useState } from 'react';
import styles from './IntraRoute.module.css';

import SearchBarTest from '../components/SearchBarTest';
import Path from '../components/Path';
import Search from '../components/Search';
import Filters from '../components/Filters';

import intraRouteLogo from '../logos/intraroute.svg';
import intraRouteLogoWhite from '../logos/intraroute-white.svg';
import intraRouteLogoShort from '../logos/intraroute-short.svg';
import intraRouteLogoShortWhite from '../logos/intraroute-short-white.svg';

function IntraRoute() {
    const currentYear = new Date().getFullYear();
    let currentYearEdit;
    if (currentYear === 2024) {
        currentYearEdit = currentYear;
    } else {
        currentYearEdit = `2024 - ${currentYear}`
    }

    const [start, setStart] = useState('unselected');
    const [end, setEnd] = useState('unselected');

    const [useAir, setUseAir] = useState(true);
    const [useBahn, setUseBahn] = useState(true);
    const [useBus, setUseBus] = useState(true);
    const [useRail, setUseRail] = useState(true);
    const [useRailLocal, setUseRailLocal] = useState(true);
    const [useSail, setUseSail] = useState(true);

    const filters = {
        useAir: useAir,
        setUseAir: setUseAir,
        useBahn: useBahn,
        setUseBahn: setUseBahn,
        useBus: useBus,
        setUseBus: setUseBus,
        useRail: useRail,
        setUseRail: setUseRail,
        useRailLocal: useRailLocal,
        setUseRailLocal: setUseRailLocal,
        useSail: useSail,
        setUseSail: setUseSail
    }

    const [returnError, setReturnError] = useState(false);
    
    return (
        <div>
            <div className={styles.logoBox}>
                <img className={styles.topLogo} src={intraRouteLogo} alt='IntraRoute' />
            </div>
            <div className={styles.search}>
                <Search
                    start={start}
                    setStart={setStart}
                    end={end} setEnd={setEnd}
                    filters={filters}
                    returnError={returnError}
                    setReturnError={setReturnError}
                />
                <Filters filters={filters} />
            </div>
            {(start === 'unselected' || end === 'unselected') ?
                <div className={styles.buffer}></div>
                :
                <div className={styles.path}>
                    <Path
                        start={start}
                        end={end}
                        filters={filters}
                        returnError={returnError}
                        setReturnError={setReturnError}
                    />
                </div>
            }
            <div className={styles.logoBox}>
                <img className={styles.bottomLogo} src={intraRouteLogoShort} alt='IntraRoute' />
            </div>
            <div className={styles.footer1}>
                <p className={styles.pGray}>IntraRoute Beta 1.0.0</p>
                <p className={styles.pGray}>5/32/2024</p>
                <p className={styles.pGray}>Created by kyle11231 with help from DNAmaster10 & scarycrumb.</p>
                <p className={styles.pGray}>Additional help provided by megascatterbomb & _Kastle.</p>
                <p><a href='intraroute-changelog'>Version history & changelog</a></p>
            </div>
            <div className={styles.footer2}>
                <p className={styles.pGray}>© {currentYearEdit} Intra. A Feline Holdings company.</p>
                <p className={styles.pGray}>Helicopter icon from <a href="https://www.onlinewebfonts.com/icon">onlinewebfonts.com</a> is licensed by CC BY 4.0.</p>
                <p className={styles.pGray}>Designed by Roy Disney Softworks. A Feline Holdings company.</p>
            </div>
        </div>
    )
}

export default IntraRoute;