import React from 'react';
import styles from './MBSVideo.module.css';

import YouTubeEmbed from './YouTubeEmbed';

import mbsNews from '../logos/mbs-divisions/mbs-news-white.svg';
import mbsSports from '../logos/mbs-divisions/mbs-sports-white.svg';
import mbsEvents from '../logos/mbs-divisions/mbs-events-white.svg';
import mbsStudios from '../logos/mbs-divisions/mbs-studios-white.svg';
import mbsReleasing from '../logos/mbs-divisions/mbs-releasing-white.svg';

function MBSVideo(props) {
    let logoSrc;
    let logoAlt;

    if (props.division === 'news') {
        logoSrc = mbsNews;
        logoAlt = 'MBS News';
    } else if (props.division === 'sports') {
        logoSrc = mbsSports;
        logoAlt = 'MBS Sports';
    } else if (props.division === 'events') {
        logoSrc = mbsEvents;
        logoAlt = 'MBS Events';
    } else if (props.division === 'studios') {
        logoSrc = mbsStudios;
        logoAlt = 'MBS Studios';
    } else if (props.division === 'releasing') {
        logoSrc = mbsReleasing;
        logoAlt = 'MBS Releasing';
    }

    return (
        <div className={styles.container}>  
            <YouTubeEmbed
                link={props.link}
                iframeStyles={styles.video}
            />
            <div className={styles.contentBox}>
                <img src={logoSrc} alt={logoAlt} className={styles.logo} />
                <h1 className={`${styles.title} ${styles.text}`}>{props.title}</h1>
                <h2 className={`${styles.date} ${styles.text}`}>{props.date}</h2>
            </div>
        </div>
    )
}

export default MBSVideo;