import React from 'react';
import styles from './MBS.module.css';

function MBS() {
    let channelid = "UCdqFWzZ2sTEM3svKajyk9Lg";

    function onlive() {
        console.log('This channel is live!')
    }

    fetch('https://www.youtube.com/channel/' + channelid).then(function (response) {
        return response.text();
    }).then(function (html) {
        if (html.includes("hqdefault_live.jpg")) {
            onlive();
        }
    }).catch(function (err) {
        console.warn('This channel is not live.', err);
    });

    return (
        <div className={styles.container}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCdqFWzZ2sTEM3svKajyk9Lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default MBS;