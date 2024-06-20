import React from 'react';
import { useState } from 'react';
import styles from './MBS.module.css';

function LiveFrame() {
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCdqFWzZ2sTEM3svKajyk9Lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
}

function MBS() {
    const channelid = "UCdqFWzZ2sTEM3svKajyk9Lg";

    const [isLive, setIsLive] = useState(false);

    function onlive() {
        console.log('This channel is live!');
        setIsLive(true);
    }

    fetch('https://feline-holdings-cors.kittycat61500.workers.dev/?https://www.youtube.com/channel/' + channelid)
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