import React from 'react';
import styles from './MBSVideo.module.css';

import YouTubeEmbed from './YouTubeEmbed';

import mbsNewsWhite from '../logos/mbs-divisions/mbs-news-white.svg';
import mbsSportsWhite from '../logos/mbs-divisions/mbs-sports-white.svg';
import mbsEventsWhite from '../logos/mbs-divisions/mbs-events-white.svg';
import mbsStudiosWhite from '../logos/mbs-divisions/mbs-studios-white.svg';
import mbsReleasingWhite from '../logos/mbs-divisions/mbs-releasing-white.svg';

import mbsNewsBlack from '../logos/mbs-divisions/mbs-news-black.svg';
import mbsSportsBlack from '../logos/mbs-divisions/mbs-sports-black.svg';
import mbsEventsBlack from '../logos/mbs-divisions/mbs-events-black.svg';
import mbsStudiosBlack from '../logos/mbs-divisions/mbs-studios-black.svg';
import mbsReleasingBlack from '../logos/mbs-divisions/mbs-releasing-black.svg';

import mbsNews from '../logos/mbs-divisions/mbs-news.svg';
import mbsSports from '../logos/mbs-divisions/mbs-sports.svg';
import mbsEvents from '../logos/mbs-divisions/mbs-events.svg';
import mbsStudios from '../logos/mbs-divisions/mbs-studios.svg';
import mbsReleasing from '../logos/mbs-divisions/mbs-releasing.svg';

function MBSVideo(props) {
    let logoSrc;
    let logoAlt;

    if (props.division === 'news') {
        logoSrc = mbsNewsWhite;
        logoAlt = 'MBS News';
        if (props.logoColor === 'black') {
            logoSrc = mbsNewsBlack;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsNews;
        }
    } else if (props.division === 'sports') {
        logoSrc = mbsSportsWhite;
        logoAlt = 'MBS Sports';
        if (props.logoColor === 'black') {
            logoSrc = mbsSportsBlack;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsSports;
        }
    } else if (props.division === 'events') {
        logoSrc = mbsEventsWhite;
        logoAlt = 'MBS Events';
        if (props.logoColor === 'black') {
            logoSrc = mbsEventsBlack;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsEvents;
        }
    } else if (props.division === 'studios') {
        logoSrc = mbsStudiosWhite;
        logoAlt = 'MBS Studios';
        if (props.logoColor === 'black') {
            logoSrc = mbsStudiosBlack;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsStudios;
        }
    } else if (props.division === 'releasing') {
        logoSrc = mbsReleasingWhite;
        logoAlt = 'MBS Releasing';
        if (props.logoColor === 'black') {
            logoSrc = mbsReleasingBlack;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsReleasing;
        }
    }

    return (
        <div className={styles.container}>  
            <YouTubeEmbed
                link={props.link}
                iframeStyles={styles.video}
            />
            <div className={styles.contentBox} style={{backgroundColor: props.color}}>
                <img src={logoSrc} alt={logoAlt} className={styles.logo} />
                <h1 className={`${styles.title} ${styles.text}`} style={{color: props.textColor}}>{props.title}</h1>
                <h2 className={`${styles.date} ${styles.text}`} style={{color: props.textColor}}>{props.date}</h2>
            </div>
        </div>
    )
}

export default MBSVideo;