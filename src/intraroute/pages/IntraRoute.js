import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './IntraRoute.module.css';

import Path from '../components/Path';
import Search from '../components/Search';
import Filters from '../components/Filters';

import intraRouteLogo from '../logos/intraroute.svg';
import intraRouteLogoWhite from '../logos/intraroute-white.svg';
import intraRouteLogoShort from '../logos/intraroute-short.svg';
import intraRouteLogoShortWhite from '../logos/intraroute-short-white.svg';

import ErrorNotice from '../components/ErrorNotice';

import Route from '../components/Route';

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

    const showErrorNotice = true;
    const errorNoticeDate = 'Service Alert';
    const errorText1 = 'IntraAir is rolling out its 2025 network changes.'
    const errorText2 = 'Expect service disruptions and some duplicate flight numbers as we transition to our new network.';
    
    return (
        <div>
            <Helmet>
                <title>IntraRoute | Feline Holdings</title>
                <meta name="description" content="The official routefinder of Intra." />
                <link rel="icon" href='https://svgshare.com/i/16Gj' />
                <link rel="apple-touch-icon" href='https://svgshare.com/i/16Gj' />

                <meta property="og:url" content="https://felineholdings.com/intraroute" />
                <meta property="og:title" content="IntraRoute | Feline Holdings" />
                <meta property="og:description" content="The official routefinder of Intra." />
                <meta property="og:image" content='https://svgshare.com/i/16G7' />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="felineholdings.com/intraroute" />
                <meta property="twitter:url" content="https://felineholdings.com/intraroute" />
                <meta name="twitter:title" content="IntraRoute | Feline Holdings" />
                <meta name="twitter:description" content="The official routefinder of Intra." />
                <meta name="twitter:image" content='https://svgshare.com/i/16G7' />
            </Helmet>
            <div className={styles.logoBox}>
                <img className={styles.topLogo} src={intraRouteLogo} alt='IntraRoute' />
            </div>
            {showErrorNotice ? <ErrorNotice date={errorNoticeDate} text1={errorText1} text2={errorText2} /> : ''}
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
                <p className={styles.pGray}>IntraRoute Beta 1.0.6</p>
                <p className={styles.pGray}>8/20/2025</p>
                <p className={styles.pGray}>Created by katiee11231 with help from DNAmaster10 & scarycrumb.</p>
                <p className={styles.pGray}>Additional help provided by megascatterbomb & _Kastle.</p>
                <p><a href='intraroute/changelog'>Version history & changelog</a></p>
            </div>
            <div className={styles.footer2}>
                <p className={styles.pGray}>Find any problems? Let us know!</p>
                <p className={styles.pGray}>Email us at <a href='mailto:intra@felineholdings.com'>intra@felineholdings.com</a>.</p>
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