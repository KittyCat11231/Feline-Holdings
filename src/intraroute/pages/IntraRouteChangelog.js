import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './IntraRouteChangelog.module.css';

import Version from '../components/changelog/Version';

import intraRouteLogo from '../logos/intraroute.svg';
import intraRouteLogoWhite from '../logos/intraroute-white.svg';
import intraRouteLogoShort from '../logos/intraroute-short.svg';
import intraRouteLogoShortWhite from '../logos/intraroute-short-white.svg';

function IntraRouteChangelog() {
    
    let renderVersions = [];

    class subList {
        id = 'subList';
        constructor(header, list) {
            this.header = header;
            this.list = list;
        }
    }

    class versionObj {
        constructor(version, releaseDate, list) {
            this.version = version;
            this.releaseDate = releaseDate;
            this.list = list;
        }
    }

    let versions = [];

    versions.push(
        new versionObj(
            'Beta 1.0.3',
            '11/18/2024',
            [
                'Changed how new IntraRail route numbers are displayed.'
            ]
        )
    )

    versions.push(
        new versionObj(
            'Beta 1.0.2',
            '11/4/2024',
            [
                'Added assets for new IntraRail line colors and route numbers.'
            ]
        )
    )

    versions.push(
        new versionObj(
            'Beta 1.0.1',
            '9/28/2024',
            [
                'The page will no longer go blank when an error occurs during pathfinding.'
            ]
        )
    )

    versions.push(
        new versionObj(
            'Beta 1.0.0',
            '7/13/2024',
            [
                'IntraRoute is now in beta!',
                'IntraRoute (and the rest of felineholdings.com) has been completely rebuilt in React.',
                new subList(
                    'IntraRoute now supports most Intra services serverwide:',
                    [
                        'Support added for IntraAir (including Segville Air, Waypoint, Italiani Volanti, GEMS Airline, SkyWest Airlines, IntraAir Heli Lines, Segville Air Heli Lines, Heampstead Charter, Eastern Airways Heli Lines, & IntraAir Poseidon).',
                        'Support added for IntraRail (including MCR, MCR Urban Scarborough, & MCR Urban Lumeva).',
                        'Support added for IntraBus (including OMEGAbus!).',
                        'Support added for IntraSail.',
                        'Old World Italian Transit Authority is not supported.'
                    ]
                ),
                'All data for both pathfinding and UI information is now sourced from spreadsheet data.',
                new subList(
                    'The user interface has been completely redesigned with a fresh new look.',
                    [
                        'UI components are modular and dynamically rendered.',
                        'The search bars have been redesigned to allow the user to search for locations.',
                        'There are now buttons to randomize the origin and destination.',
                        'There is now a button to flip the origin and destination.',
                        'Added a few UI animations (more coming soon).'
                    ]
                ),
                'Switched hosting provider from GitHub Pages to Vercel.',
                new subList(
                    'Known issues:',
                    [
                        'Recommendation of routes considering number of transfers does not follow the intended behavior.',
                        'IntraBahn (ZQ) destination does not display correctly.',
                        'Dropdown menu to filter between modes is disabled until a future update due to buggy behavior.',
                        'Please report any issues to intra@felineholdings.com. 🙂'
                    ]
                )
            ]
        )
    )

    versions.push(
        new versionObj(
            'Alpha 1.1.0',
            '4/6/2024',
            [
                new subList(
                    'The pathfinding script has been partially rewritten:',
                    [
                        'Routes are now considered during pathfinding, rather than added on after a path has already been found.',
                        'The script will now take transfers into account when deciding on the best route.',
                        'This shouldn\'t change any route recommendations in the current version, but will be necessary later for calculating routes on Intra\'s wider network when considering lots of possible transfers.'
                    ]
                ),
                'There is now an additional "Find Different Route" button at the bottom of the route display page in addition to the one at the top.',
                'Fixed a mistake in which "Zaquar Loreen Terminal" was displayed as the destination for IntraBahn ZQ passengers going to Zaquar Tanzanite Station.'
            ]
        )
    )

    versions.push(
        new versionObj(
            'Alpha 1.0.1',
            '4/6/2024',
            [
                'Fixed the code for Zaquar Air & Sea Ports mistakenly displaying as "WHQ" instead of "ZQA".'
            ]
        )
    )

    versions.push(
        new versionObj(
            'Alpha 1.0.0',
            '3/25/2024',
            [
                'IntraRoute is now live!',
                'Only IntraBahn lines are supported. All Intra services will be supported in future releases.',
                new subList(
                    'Known issues:',
                    [
                        'The bar that shows additional possible routes on trips with more than one route is sometimes the wrong color.',
                        'The desktop UI is scaled up too high.',
                    ]
                )
            ]
        )
    )

    versions.forEach(versionObj => {
        renderVersions.push(
            <Version
                version={versionObj.version}
                releaseDate={versionObj.releaseDate}
                list={versionObj.list}
            />
        )
    })

    return (
        <div>
            <Helmet>
                <title>IntraRoute Version History & Changelog | Feline Holdings</title>
                <meta name="description" content="IntraRoute version history & changelog." />
                <link rel="icon" href='https://svgshare.com/i/16Gj' />
                <link rel="apple-touch-icon" href='https://svgshare.com/i/16Gj' />

                <meta property="og:url" content="https://felineholdings.com/intraroute-changelog" />
                <meta property="og:title" content="IntraRoute Version History & Changelog | Feline Holdings" />
                <meta property="og:description" content="IntraRoute version history & changelog." />
                <meta property="og:image" content='https://svgshare.com/i/16G7' />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="felineholdings.com/intraroute-changelog" />
                <meta property="twitter:url" content="https://felineholdings.com/intraroute-changelog" />
                <meta name="twitter:title" content="IntraRoute Version History & Changelog | Feline Holdings" />
                <meta name="twitter:description" content="IntraRoute version history & changelog." />
                <meta name="twitter:image" content='https://svgshare.com/i/16G7' />
            </Helmet>
            <div className={styles.logoBox}>
                <img className={styles.topLogo} src={intraRouteLogo} alt='IntraRoute' />
            </div>
            <h1 className={`${styles.header} ${styles.grayText}`}>Version History & Changelog</h1>
            <div className={styles.button}>
                <a className={`${styles.buttonText} ${styles.grayText}`} href='https://felineholdings.com/intraroute'>Back to IntraRoute</a>
            </div>
            <div className={styles.container}>
                {renderVersions}
            </div>
        </div>
    )
}

export default IntraRouteChangelog;