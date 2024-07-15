'use client'
 
import React from 'react';
import styles from './Circle.module.css';

import busGray from '../assets/circle-icons/bus-gray.svg';
import busOmega from '../assets/circle-icons/bus-omega.svg';
import ferryGray from '../assets/circle-icons/ferry-gray.svg';
import ferrySailMainline from '../assets/circle-icons/ferry-sail-mainline.svg';
import ferrySailExpress from '../assets/circle-icons/ferry-sail-express.svg';
import ferrySailBranch from '../assets/circle-icons/ferry-sail-branch.svg';
import heliGray from '../assets/circle-icons/heli-gray.svg';
import heliEastern from '../assets/circle-icons/heli-eastern.svg';
import heliHeampstead from '../assets/circle-icons/heli-heampstead.svg';
import heliSegville from '../assets/circle-icons/heli-segville.svg';
import metroGray from '../assets/circle-icons/metro-gray.svg';
import metroMCR from '../assets/circle-icons/metro-mcr.svg';
import planeGray from '../assets/circle-icons/plane-gray.svg';
import planeGemsDiamond from '../assets/circle-icons/plane-gems-diamond.svg';
import planeGemsEmerald from '../assets/circle-icons/plane-gems-emerald.svg';
import planeGemsGold from '../assets/circle-icons/plane-gems-gold.svg';
import planeGemsLapis from '../assets/circle-icons/plane-gems-lapis.svg';
import planeSegville from '../assets/circle-icons/plane-segville.svg';
import planeSkywest from '../assets/circle-icons/plane-skywest.svg';
import planeVolanti from '../assets/circle-icons/plane-volanti.svg';
import planeWaypoint from '../assets/circle-icons/plane-waypoint.svg';
import seaplaneGray from '../assets/circle-icons/seaplane-gray.svg';
import trainGray from '../assets/circle-icons/train-gray.svg';
import trainBahnBranch from '../assets/circle-icons/train-bahn-branch.svg';
import trainBahnExpress from '../assets/circle-icons/train-bahn-express.svg';
import trainBahnMainline from '../assets/circle-icons/train-bahn-mainline.svg';
import trainBahnShuttle from '../assets/circle-icons/train-bahn-shuttle.svg';
import trainMCR from '../assets/circle-icons/train-mcr.svg';
import trainRailBlack from '../assets/circle-icons/train-rail-black.svg';
import trainRailBlue from '../assets/circle-icons/train-rail-blue.svg';
import trainRailBrown from '../assets/circle-icons/train-rail-brown.svg';
import trainRailCyan from '../assets/circle-icons/train-rail-cyan.svg';
import trainRailDarkRed from '../assets/circle-icons/train-rail-dark-red.svg';
import trainRailLime from '../assets/circle-icons/train-rail-lime.svg';
import trainRailOrange from '../assets/circle-icons/train-rail-orange.svg';
import trainRailPink from '../assets/circle-icons/train-rail-pink.svg';
import trainRailPurple from '../assets/circle-icons/train-rail-purple.svg';
import trainRailRed from '../assets/circle-icons/train-rail-red.svg';
import trainRailTan from '../assets/circle-icons/train-rail-tan.svg';
import trainRailYellow from '../assets/circle-icons/train-rail-yellow.svg';
import mrtLogo from '../assets/mrt-logo.svg';

function Circle(props) {
    let srcToUse;
    if (props.mode === 'bus') {
        srcToUse = busGray.src;
    }
    if (props.mode === 'omega' && props.type === 'origin') {
        srcToUse = busGray.src;
    }
    if (props.mode === 'omega' && props.type !== 'origin') {
        srcToUse = busOmega.src;
    }
    if (props.mode === 'sail' && props.type === 'origin') {
        srcToUse = ferryGray.src;
    }
    if (props.mode === 'sail' && props.type === 'mainline') {
        srcToUse = ferrySailMainline.src;
    }
    if (props.mode === 'sail' && props.type === 'express') {
        srcToUse = ferrySailExpress.src;
    }
    if (props.mode === 'sail' && props.type === 'branch') {
        srcToUse = ferrySailBranch.src;
    }
    if (props.mode === 'air' && props.type === 'heli') {
        srcToUse = heliGray.src;
    }
    if (props.mode === 'air' && props.type === 'eastern') {
        srcToUse = heliEastern.src;
    }
    if (props.mode === 'air' && props.type === 'heampstead') {
        srcToUse = heliHeampstead.src;
    }
    if (props.mode === 'air' && props.type === 'segHeli') {
        srcToUse = heliSegville.src;
    }
    if ((props.mode === 'railScar' || props.mode === 'railLumeva') && props.type === 'origin') {
        srcToUse = metroGray.src;
    }
    if ((props.mode === 'railScar' || props.mode === 'railLumeva') && props.type !== 'origin') {
        srcToUse = metroMCR.src;
    }
    if (props.mode === 'air' && (props.type === 'mainline' || props.type === 'origin')) {
        srcToUse = planeGray.src;
    }
    if (props.mode === 'air' && props.type === 'gemsDiamond') {
        srcToUse = planeGemsDiamond.src;
    }
    if (props.mode === 'air' && props.type === 'gemsEmerald') {
        srcToUse = planeGemsEmerald.src;
    }
    if (props.mode === 'air' && props.type === 'gemsGold') {
        srcToUse = planeGemsGold.src;
    }
    if (props.mode === 'air' && props.type === 'gemsLapis') {
        srcToUse = planeGemsLapis.src;
    }
    if (props.mode === 'air' && props.type === 'segville') {
        srcToUse = planeSegville.src;
    }
    if (props.mode === 'air' && props.type === 'skywest') {
        srcToUse = planeSkywest.src;
    }
    if (props.mode === 'air' && props.type === 'volanti') {
        srcToUse = planeVolanti.src;
    }
    if (props.mode === 'air' && (props.type === 'waypoint' || props.type === 'waypointHopper')) {
        srcToUse = planeWaypoint.src;
    }
    if (props.mode === 'air' && props.type === 'poseidon') {
        srcToUse = seaplaneGray.src;
    }
    if (props.mode === 'bahn' && props.type === 'origin') {
        srcToUse = trainGray.src;
    }
    if (props.mode === 'bahn' && props.type === 'branch') {
        srcToUse = trainBahnBranch.src;
    }
    if (props.mode === 'bahn' && props.type === 'express') {
        srcToUse = trainBahnExpress.src;
    }
    if (props.mode === 'bahn' && props.type === 'mainline') {
        srcToUse = trainBahnMainline.src;
    }
    if (props.mode === 'bahn' && props.type === 'shuttle') {
        srcToUse = trainBahnShuttle.src;
    }
    if (props.mode === 'rail' && props.type === 'origin') {
        srcToUse = trainGray.src;
    }
    if (props.mode === 'rail' && props.type === 'mcr') {
        srcToUse = trainMCR.src;
    }
    if (props.mode === 'rail' && props.type === 'black') {
        srcToUse = trainRailBlack.src;
    }
    if (props.mode === 'rail' && props.type === 'blue') {
        srcToUse = trainRailBlue.src;
    }
    if (props.mode === 'rail' && props.type === 'brown') {
        srcToUse = trainRailBrown.src;
    }
    if (props.mode === 'rail' && props.type === 'cyan') {
        srcToUse = trainRailCyan.src;
    }
    if (props.mode === 'rail' && props.type === 'dark-red') {
        srcToUse = trainRailDarkRed.src;
    }
    if (props.mode === 'rail' && props.type === 'lime') {
        srcToUse = trainRailLime.src;
    }
    if (props.mode === 'rail' && props.type === 'orange') {
        srcToUse = trainRailOrange.src;
    }
    if (props.mode === 'rail' && props.type === 'pink') {
        srcToUse = trainRailPink.src;
    }
    if (props.mode === 'rail' && props.type === 'purple') {
        srcToUse = trainRailPurple.src;
    }
    if (props.mode === 'rail' && props.type === 'red') {
        srcToUse = trainRailRed.src;
    }
    if (props.mode === 'rail' && props.type === 'tan') {
        srcToUse = trainRailTan.src;
    }
    if (props.mode === 'rail' && props.type === 'yellow') {
        srcToUse = trainRailBlack.src;
    }
    if (props.mode === 'mrtYellowLine') {
        srcToUse = mrtLogo.src;
    }
    return (
        <img className={styles.circle} src={srcToUse} alt='icon' />
    )
}

export default Circle;