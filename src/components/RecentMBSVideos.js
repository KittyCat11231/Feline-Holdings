import React from 'react';
import { useEffect, useState } from 'react';
import styles from './RecentMBSVideos.module.css';

import MBSVideo from './MBSVideo';

import methods from '../scripts/methods';

function RecentMBSVideos() {
    let videosArray = [];
    const [renderVideosArray, setRenderVideosArray] = useState();

    const [isLoaded, setIsLoaded] = useState(false);

    async function getRecentVideos() {
        try {
            const response = await fetch('https://cors.felineholdings.com/?https://api.felineholdings.com/mbs/recent-videos');
            const videos = await response.json();
            for (let i = 0; i < await videos.length; i++) {
                let video = videos[i];
                let year = video.date.split('-')[0];
                let monthNum = Number(video.date.split('-')[1]);
                let month = methods.getMonthNameFromNumber(monthNum, false);
                let day = video.date.split('-')[2];
                let date = `${month} ${day}, ${year}`;
                videosArray.push(
                    <div className={styles.gridPost}>
                        <MBSVideo
                            link={`https://www.youtube.com/embed/${video.videoId}`}
                            division={video.division}
                            title={video.title}
                            date={date}
                            color='#e6e6e6'
                            textColor='black'
                            logoColor='main'
                            dateColor='white'
                            wasLive={video.wasLive}
                        />
                    </div>
                )
                if (i >= 5) {
                    break;
                    // the loop should only run 5 times,
                    // or for the number of videos.length,
                    // whichever is lower
                }
            }
            setIsLoaded(true);
            setRenderVideosArray(videosArray);
        }
        catch(error) {
            console.log(error);
            setIsLoaded(true);
            setRenderVideosArray(<h1>Failed to load</h1>);
        }
    }

    useEffect(() => {
        getRecentVideos();
    }, []);
    
    if (isLoaded === true) {
        return (
            <div className={styles.container}>
                {renderVideosArray}
            </div>
        )
    } else {
        return(
            <p></p>
        )
    }
}

export default RecentMBSVideos;