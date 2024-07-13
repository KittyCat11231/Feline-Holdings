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
        logoSrc = mbsNewsWhite.src;
        logoAlt = 'MBS News';
        if (props.logoColor === 'black') {
            logoSrc = mbsNewsBlack.src;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsNews.src;
        }
    } else if (props.division === 'sports') {
        logoSrc = mbsSportsWhite.src;
        logoAlt = 'MBS Sports';
        if (props.logoColor === 'black') {
            logoSrc = mbsSportsBlack.src;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsSports.src;
        }
    } else if (props.division === 'events') {
        logoSrc = mbsEventsWhite.src;
        logoAlt = 'MBS Events';
        if (props.logoColor === 'black') {
            logoSrc = mbsEventsBlack.src;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsEvents.src;
        }
    } else if (props.division === 'studios') {
        logoSrc = mbsStudiosWhite.src;
        logoAlt = 'MBS Studios';
        if (props.logoColor === 'black') {
            logoSrc = mbsStudiosBlack.src;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsStudios.src;
        }
    } else if (props.division === 'releasing') {
        logoSrc = mbsReleasingWhite.src;
        logoAlt = 'MBS Releasing';
        if (props.logoColor === 'black') {
            logoSrc = mbsReleasingBlack.src;
        }
        if (props.logoColor === 'main') {
            logoSrc = mbsReleasing.src;
        }
    }

    let embedLink = `https://www.youtube.com/embed/${props.id}`;
    let normalLink = `https://www.youtube.com/watch?v=${props.id}`;

    return (
        <div className={styles.container}>  
            <YouTubeEmbed
                link={embedLink}
                iframeStyles={styles.video}
            />
            <a className={styles.a} href={normalLink} target='_blank' rel='noreferrer noopener'>
                <div className={styles.contentBox} style={{backgroundColor: props.color}}>
                    <img src={logoSrc} alt={logoAlt} className={styles.logo} />
                    <h1 className={`${styles.title} ${styles.text}`} style={{color: props.textColor}}>{props.title}</h1>
                    <h2 className={`${styles.date} ${styles.text}`} style={{color: props.textColor}}>{props.date}</h2>
                </div>
            </a>
        </div>
    )
}

export default MBSVideo;