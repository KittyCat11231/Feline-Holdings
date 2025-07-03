import React from 'react';
import { useEffect, useState } from 'react';
import helpers from '@kyle11231/helper-functions';
import styles from './RecentMBSVideos.module.css';

import MBSVideo from './MBSVideo';
import SectionHeader from './SectionHeader';

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
                let month = helpers.getMonthNameFromNumber(monthNum, false);
                let day = video.date.split('-')[2];
                let date = `${month} ${day}, ${year}`;
                videosArray.push(
                    <div className={styles.gridPost}>
                        <MBSVideo
                            id={video.videoId}
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
                    // the loop should only run 6 times,
                    // or for the number of videos.length,
                    // whichever is lower
                }
            }
            setIsLoaded(true);
            setRenderVideosArray(videosArray);
        }
        catch(error) {
            console.error(error);
            setIsLoaded(true);
            setRenderVideosArray(<SectionHeader text='Failed to load.' color='red' border={false} borderColor='' />);
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
            <SectionHeader text='Loading...' color='red' border={false} borderColor='' />
        )
    }
}

export default RecentMBSVideos;