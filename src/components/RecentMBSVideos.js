import React from 'react';
import styles from './RecentMBSVideos.module.css';

import MBSVideo from './MBSVideo';

function RecentMBSVideos() {
    let videosArray = [];

    async function getRecentVideos() {
        try {
            const response = await fetch('https://cors.felineholdings.com/?https://feline-holdings-backend.vercel.app/mbs/recent-videos');
            console.log('response', response);
            const videos = await response.json();
            console.log('videos', videos);
            videos.forEach(video => {
                const title = video.snippet.title.split('] ')[1];
                console.log(title);
                videosArray.push(
                    <div className={styles.gridPost}>
                        <MBSVideo
                            link='https://www.youtube.com/embed/vTlR8EbFBtk'
                            division='sports'
                            title='Placeholder Video Title That Is Too Long To Fit On One Line'
                            date='6/32/2024'
                        />
                    </div>
                )
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    // commented out to avoid api rate limit for now
    // getRecentVideos();
    
    return (
        <div className={styles.container}>
            <div className={styles.gridPost}>
                <MBSVideo
                    link='https://www.youtube.com/embed/vTlR8EbFBtk'
                    division='sports'
                    title='Placeholder Video Title That Is Too Long To Fit On One Line'
                    date='6/32/2024'
                />
            </div>
        </div>
    )
}

export default RecentMBSVideos;