import React from 'react';
import { useState } from 'react';
import styles from './MBS.module.css';

import YouTubeEmbed from '../components/YouTubeEmbed';

function LiveFrame() {
    return (
        <YouTubeEmbed link='https://www.youtube.com/embed/live_stream?channel=UCdqFWzZ2sTEM3svKajyk9Lg' />
    )
}

function MBS() {
    const channelid = "UCdqFWzZ2sTEM3svKajyk9Lg";

    const [isLive, setIsLive] = useState(false);

    function onlive() {
        console.log('This channel is live!');
        setIsLive(true);
    }

    fetch('https://cors.felineholdings.com/?https://www.youtube.com/channel/' + channelid)
    .then(function (response) {
        console.log(response);
        return response.text();
    }).then(function (html) {
        if (html.includes("hqdefault_live.jpg")) {
            onlive();
        }
    }).catch(function (err) {
        console.warn('Failed to fetch.', err);
    });

    return (
        <div className={styles.container}>
            {isLive ? <LiveFrame /> : ''}
        </div>
    )
}

export default MBS;