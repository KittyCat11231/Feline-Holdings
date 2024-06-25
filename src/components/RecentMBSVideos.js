import React from 'react';
import styles from './RecentMBSVideos.module.css';

import MBSVideo from './MBSVideo';

function RecentMBSVideos() {
    async function getRecentVideos() {
        try {
            const response = await fetch('https://cors.felineholdings.com/?https://feline-holdings-backend.vercel.app/mbs/recent-videos');
            const videos = await response.json();
            console.log(videos);
            videos.forEach(video => {
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    getRecentVideos();
    
    return (
        <div className={styles.container}>
            <MBSVideo />
        </div>
    )
}

export default RecentMBSVideos;