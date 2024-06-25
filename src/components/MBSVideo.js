import React from 'react';
import styles from './MBSVideo.module.css';

import YouTubeEmbed from './YouTubeEmbed';

import colorBars from '../assets/mbs-color-bars.png';

function MBSVideo(props) {
    return (
        <div className={styles.container}>
            <div className={styles.videoFrame}>   
                <YouTubeEmbed
                    link='https://www.youtube.com/embed/vTlR8EbFBtk'
                    iframeStyles={styles.video}
                />
            </div>
            <div className={styles.contentBox}>
                <h1 className={`${styles.title} ${styles.text}`}>[MBS Sports] Placeholder Video Title</h1>
                <h2 className={`${styles.date} ${styles.text}`}>Placeholder date</h2>
            </div>
        </div>
    )
}

export default MBSVideo;