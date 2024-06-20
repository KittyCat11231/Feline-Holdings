import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
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
        <>
            <Helmet>
                <title>MBS | Feline Holdings</title>
                <meta property="og:title" content="MBS | Feline Holdings" />
                <meta name="twitter:title" content="MBS | Feline Holdings" />
                <meta name="description" content="The MRT's most watched broadcaster." />
                <link rel="icon" href='https://svgshare.com/i/17Sp.svg' />
                <link rel="apple-touch-icon" href='https://svgshare.com/i/17Sp.svg' />
            </Helmet>
            <div className={styles.container}>
                {isLive ? <LiveFrame /> : ''}
            </div>
        </>
    )
}

export default MBS;