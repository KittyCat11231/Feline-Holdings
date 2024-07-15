'use client'
 
import React from 'react';
import styles from './YouTubeEmbed.module.css';

function YouTubeEmbed(props) {
    return (
        <iframe
            className={`${styles.video} ${props.iframeStyles}`}
            src={props.link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
        </iframe>
    )
}

export default YouTubeEmbed;