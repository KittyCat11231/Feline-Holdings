import React from 'react';
import styles from './Mode.module.css';

import bahnLogo from '../logos/intrabahn-white.svg';
import airLogo from '../logos/intraair-white.svg';
import heliLogo from '../logos/intraair-heli-lines-white.svg';
import poseidonLogo from '../logos/intraair-poseidon-white.svg';
import acaciaAirLogo from '../logos/acaciaair-white.svg';
import segAirLogo from '../logos/segville-air-white.svg';
import segHeliLogo from '../logos/segville-air-heli-lines-white.svg';
import waypointLogo from '../logos/waypoint-white.svg';
import waypointHopperLogo from '../logos/waypoint-hopper-white.svg';
import volantiLogo from '../logos/italiani-volanti-white.svg';
import skywestLogo from '../logos/skywest-airlines-white.svg';
import portonLogo from '../logos/porton-global-white.svg';
import gemsLogo from '../logos/gems-airline.png';
import heampsteadLogo from '../logos/heampstead-charter-white.svg';
import easternLogo from '../logos/eastern-airways-heli-lines-white.svg';
import busLogo from '../logos/intrabus-white.svg';
import omegaLogo from '../logos/omegabus-white.svg';
import railLogo from '../logos/intrarail-white.svg';
import mcrLogo from '../logos/mcr-white.svg';
import sailLogo from '../logos/intrasail-white.svg';
import railScarLogo from '../logos/mcr-urban-scarborough-white.svg';
import railLumevaLogo from '../logos/mcr-urban-lumeva-white.svg';

function Mode(props) {
    let srcToUse;
    let boxStyles;
    let logoStyles;
    if (props.mode === 'bahn') {
        srcToUse = bahnLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'air' && props.type === 'mainline') {
        srcToUse = airLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'air' && props.type === 'heli') {
        srcToUse = heliLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'air' && props.type === 'poseidon') {
        srcToUse = poseidonLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'air' && props.type === 'acacia') {
        srcToUse = acaciaAirLogo;
        boxStyles = styles.acaciaBox;
        logoStyles = styles.acaciaLogo;
    }
    if (props.mode === 'air' && props.type === 'segville') {
        srcToUse = segAirLogo;
        boxStyles = styles.segvilleBox;
        logoStyles = styles.segvilleLogos;
    }
    if (props.mode === 'air' && props.type === 'segHeli') {
        srcToUse = segHeliLogo;
        boxStyles = styles.segvilleBox;
        logoStyles = styles.segvilleLogos;
    }
    if (props.mode === 'air' && props.type === 'waypoint') {
        srcToUse = waypointLogo;
        boxStyles = styles.waypointBox;
        logoStyles = styles.waypointLogo;
    }
    if (props.mode === 'air' && props.type === 'waypointHopper') {
        srcToUse = waypointHopperLogo;
        boxStyles = styles.waypointHopperBox;
        logoStyles = styles.waypointLogo;
    }
    if (props.mode === 'air' && props.type === 'volanti') {
        srcToUse = volantiLogo;
        boxStyles = styles.volantiBox;
        logoStyles = styles.volantiLogo;
    }
    if (props.mode === 'air' && props.type === 'skywest') {
        srcToUse = skywestLogo;
        boxStyles = styles.skywestBox;
        logoStyles = styles.skywestLogo;
    }
    if (props.mode === 'air' && props.type === 'porton') {
        srcToUse = portonLogo;
        boxStyles = styles.portonBox;
        logoStyles = styles.portonLogo;
    }
    if (props.mode === 'air' && (props.type === 'gemsEmerald' || props.type === 'gemsGold' || props.type === 'gemsDiamond' || props.type === 'gemsLapis')) {
        srcToUse = gemsLogo;
        boxStyles = styles.gemsBox;
        logoStyles = styles.gemsLogo;
    }
    if (props.mode === 'air' && props.type === 'heampstead') {
        srcToUse = heampsteadLogo;
        boxStyles = styles.heampsteadBox;
        logoStyles = styles.heampsteadLogo;
    }
    if (props.mode === 'air' && props.type === 'eastern') {
        srcToUse = easternLogo;
        boxStyles = styles.easternBox;
        logoStyles = styles.easternLogo;
    }
    if (props.mode === 'bus') {
        srcToUse = busLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'omega') {
        srcToUse = omegaLogo;
        boxStyles = styles.omegaBox;
        logoStyles = styles.omegaLogo;
    }
    if (props.mode === 'rail' && props.type !== 'mcr' && props.type !== 'mcrNew') {
        srcToUse = railLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'rail' && (props.type === 'mcr' || props.type === 'mcrNew')) {
        srcToUse = mcrLogo;
        boxStyles = styles.mcrBox;
        logoStyles = styles.mcrLogo;
    }
    if (props.mode === 'sail') {
        srcToUse = sailLogo;
        boxStyles = styles.intraBox;
        logoStyles = styles.intraLogos;
    }
    if (props.mode === 'railScar') {
        srcToUse = railScarLogo;
        boxStyles = styles.mcrBox;
        logoStyles = styles.railScarLogo;
    }
    if (props.mode === 'railLumeva') {
        srcToUse = railLumevaLogo;
        boxStyles = styles.mcrBox;
        logoStyles = styles.railLumevaLogo;
    }

    let outlineStyle = styles.nonExistantStyle;
    if (props.mode === 'air' && (props.type === 'mainline' || props.type === 'heli' || props.type === 'poseidon')) {
        outlineStyle = styles.whiteOutline;
    }
    if ((props.mode === 'rail' && (props.type ==='mcr' || props.type === 'mcrNew')) || props.mode === 'bus' || props.mode === 'railScar' || props.mode === 'railLumeva') {
        outlineStyle = styles.whiteOutline;
    }

    return (
        <div className={`${styles.modeBox} ${outlineStyle} ${boxStyles}`}>
            <img className={logoStyles} src={srcToUse} alt='IntraBahn' />
        </div>
    )
}

export default Mode;