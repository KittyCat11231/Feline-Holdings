import React from 'react';
import styles from './Num.module.css';
import colorStyles from './Colors.module.css';

import circle from '../assets/circle-white.svg';

function Num(props) {
    let containerColor;
    let mainColor;
    let filterColor;
    if (props.mode === 'bahn') {
        if (props.type === 'null') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'mainline') {
            containerColor = colorStyles.bahnMainlineBackground;
            mainColor = colorStyles.bahnMainlineColor;
            filterColor = colorStyles.bahnMainlineFilter;
        }
        if (props.type === 'express') {
            containerColor = colorStyles.bahnExpressBackground;
            mainColor = colorStyles.bahnExpressColor;
            filterColor = colorStyles.bahnExpressFilter;
        }
        if (props.type === 'branch') {
            containerColor = colorStyles.bahnBranchBackground;
            mainColor = colorStyles.bahnBranchColor;
            filterColor = colorStyles.bahnBranchFilter;
        }
        if (props.type === 'shuttle') {
            containerColor = colorStyles.bahnShuttleBackground;
            mainColor = colorStyles.bahnShuttleColor;
            filterColor = colorStyles.bahnShuttleFilter;
        }
    }
    if (props.mode === 'air') {
        if (props.type === 'null' || props.type === 'mainline' || props.type === 'heli' || props.type === 'poseidon') {
            containerColor = colorStyles.grayBackground;
            mainColor = colorStyles.grayColor;
        }
        if (props.type === 'segville' || props.type === 'segHeli') {
            containerColor = colorStyles.airSegvilleBackground;
            mainColor = colorStyles.airSegvilleColor;
            filterColor = colorStyles.airSegvilleFilter;
        }
        if (props.type === 'waypoint' || props.type === 'waypointHopper') {
            containerColor = colorStyles.airWaypointBackground;
            mainColor = colorStyles.airWaypointColor;
            filterColor = colorStyles.airWaypointFilter;
        }
        if (props.type === 'volanti') {
            containerColor = colorStyles.airVolantiBackground;
            mainColor = colorStyles.airVolantiColor;
            filterColor = colorStyles.airVolantiFilter;
        }
        if (props.type === 'gemsEmerald') {
            containerColor = colorStyles.airGemsEmeraldBackground;
            mainColor = colorStyles.airGemsEmeraldColor;
            filterColor = colorStyles.airGemsEmeraldFilter;
        }
        if (props.type === 'gemsGold') {
            containerColor = colorStyles.airGemsGoldBackground;
            mainColor = colorStyles.blackColor;
            filterColor = colorStyles.airGemsGoldFilter;
        }
        if (props.type === 'gemsDiamond') {
            containerColor = colorStyles.airGemsDiamondBackground;
            mainColor = colorStyles.airGemsDiamondColor;
            filterColor = colorStyles.airGemsDiamondFilter;
        }
        if (props.type === 'gemsLapis') {
            containerColor = colorStyles.airGemsLapisBackground;
            mainColor = colorStyles.airGemsLapisColor;
            filterColor = colorStyles.airGemsLapisFilter;
        }
        if (props.type === 'skywest') {
            containerColor = colorStyles.airSkywestBackground;
            mainColor = colorStyles.airSkywestColor;
            filterColor = colorStyles.airSkywestFilter;
        }
        if (props.type === 'heampstead') {
            containerColor = colorStyles.airHeampsteadBackground;
            mainColor = colorStyles.airHeampsteadColor;
            filterColor = colorStyles.airHeampsteadFilter;
        }
        if (props.type === 'eastern') {
            containerColor = colorStyles.airEasternBackground;
            mainColor = colorStyles.airEasternColor;
            filterColor = colorStyles.airEasternFilter;
        }
    }
    if (props.mode === 'rail') {
        if (props.type === 'null') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'black') {
            containerColor = colorStyles.blackBackground;
            mainColor = colorStyles.blackColor;
        }
        if (props.type === 'pink') {
            containerColor = colorStyles.railPinkBackground;
            mainColor = colorStyles.railPinkColor;
            filterColor = colorStyles.railPinkFilter;
        }
        if (props.type === 'cyan') {
            containerColor = colorStyles.railCyanBackground;
            mainColor = colorStyles.railCyanColor;
            filterColor = colorStyles.railCyanFilter;
        }
        if (props.type === 'blue') {
            containerColor = colorStyles.railBlueBackground;
            mainColor = colorStyles.railBlueColor;
            filterColor = colorStyles.railBlueFilter;
        }
        if (props.type === 'yellow') {
            containerColor = colorStyles.railYellowBackground;
            mainColor = colorStyles.blackColor;
            filterColor = colorStyles.railYellowFilter;
        }
        if (props.type === 'lime') {
            containerColor = colorStyles.railLimeBackground;
            mainColor = colorStyles.railLimeColor;
            filterColor = colorStyles.railLimeFilter;
        }
        if (props.type === 'orange') {
            containerColor = colorStyles.railOrangeBackground;
            mainColor = colorStyles.railOrangeColor;
            filterColor = colorStyles.railOrangeFilter;
        }
        if (props.type === 'darkRed') {
            containerColor = colorStyles.railDarkRedBackground;
            mainColor = colorStyles.railDarkRedColor;
            filterColor = colorStyles.railDarkRedFilter;
        }
        if (props.type === 'tan') {
            containerColor = colorStyles.railTanBackground;
            mainColor = colorStyles.railTanColor;
            filterColor = colorStyles.railTanFilter;
        }
        if (props.type === 'purple') {
            containerColor = colorStyles.railPurpleBackground;
            mainColor = colorStyles.railPurpleColor;
            filterColor = colorStyles.railPurpleFilter;
        }
        if (props.type === 'red') {
            containerColor = colorStyles.railRedBackground;
            mainColor = colorStyles.railRedColor;
            filterColor = colorStyles.railRedFilter;
        }
        if (props.type === 'brown') {
            containerColor = colorStyles.railBrownBackground;
            mainColor = colorStyles.railBrownColor;
            filterColor = colorStyles.railBrownFilter;
        }
        if (props.type === 'mcr') {
            containerColor = colorStyles.railMCRBackground;
            mainColor = colorStyles.railMCRColor;
            filterColor = colorStyles.railMCRFilter;
        }
    }
    if (props.mode === 'bus') {
        containerColor = colorStyles.grayBackground;
        mainColor = colorStyles.grayColor;
    }
    if (props.mode === 'omega') {
        if (props.type === 'null') {
            containerColor = colorStyles.grayBackground;
        } else {
            containerColor = colorStyles.busOmegaBackground;
            mainColor = colorStyles.busOmegaColor;
            filterColor = colorStyles.busOmegaFilter;
        }
    }
    if (props.mode === 'sail') {
        if (props.type === 'null') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'mainline') {
            containerColor = colorStyles.sailMainlineBackground;
            mainColor = colorStyles.sailMainlineColor;
            filterColor = colorStyles.sailMainlineFilter;
        }
        if (props.type === 'express') {
            containerColor = colorStyles.sailExpressBackground;
            mainColor = colorStyles.sailExpressColor;
            filterColor = colorStyles.sailExpressFilter;
        }
        if (props.type === 'branch') {
            containerColor = colorStyles.sailBranchBackground;
            mainColor = colorStyles.sailBranchColor;
            filterColor = colorStyles.sailBranchFilter;
        }
    }
    if (props.mode === 'railScar' || props.mode === 'railLumeva') {
        if (props.type === 'null') {
            containerColor = colorStyles.grayBackground;
        } else {
            containerColor = colorStyles.railLocalBackground;
            mainColor = colorStyles.railLocalColor;
            filterColor = colorStyles.railLocalFilter;
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.circle} src={circle} alt='circle' />
            <p className={`${styles.num} ${styles.mainColor}`}>[ 1 ]</p>
        </div>
    )
}

export default Num;