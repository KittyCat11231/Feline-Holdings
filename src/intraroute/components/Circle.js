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

function Circle(props) {
    let srcToUse;
    if (props.mode === 'bus') {
        srcToUse = busGray;
    }
    if (props.mode === 'omega' && props.type === 'null') {
        srcToUse = busGray;
    }
    if (props.mode === 'omega' && props.type !== 'null') {
        srcToUse = busOmega;
    }
    if (props.mode === 'sail' && props.type === 'null') {
        srcToUse = ferryGray;
    }
    if (props.mode === 'sail' && props.type === 'mainline') {
        srcToUse = ferrySailMainline;
    }
    if (props.mode === 'sail' && props.type === 'express') {
        srcToUse = ferrySailExpress;
    }
    if (props.mode === 'sail' && props.type === 'branch') {
        srcToUse = ferrySailBranch;
    }
    if (props.mode === 'air' && props.type === 'heli') {
        srcToUse = heliGray;
    }
    if (props.mode === 'air' && props.type === 'eastern') {
        srcToUse = heliEastern;
    }
    if (props.mode === 'air' && props.type === 'heampstead') {
        srcToUse = heliHeampstead;
    }
    if (props.mode === 'air' && props.type === 'segHeli') {
        srcToUse = heliSegville;
    }
    if ((props.mode === 'railScar' || props.mode === 'railLumeva') && props.type === 'null') {
        srcToUse = metroGray;
    }
    if ((props.mode === 'railScar' || props.mode === 'railLumeva') && props.type !== 'null') {
        srcToUse = metroMCR;
    }
    if (props.mode === 'air' && (props.type === 'mainline' || props.type === 'null')) {
        srcToUse = planeGray;
    }
    if (props.mode === 'air' && props.type === 'gemsDiamond') {
        srcToUse = planeGemsDiamond;
    }
    if (props.mode === 'air' && props.type === 'gemsEmerald') {
        srcToUse = planeGemsEmerald;
    }
    if (props.mode === 'air' && props.type === 'gemsGold') {
        srcToUse = planeGemsGold;
    }
    if (props.mode === 'air' && props.type === 'gemsLapis') {
        srcToUse = planeGemsLapis;
    }
    if (props.mode === 'air' && props.type === 'segville') {
        srcToUse = planeSegville;
    }
    if (props.mode === 'air' && props.type === 'skywest') {
        srcToUse = planeSkywest;
    }
    if (props.mode === 'air' && props.type === 'volanti') {
        srcToUse = planeVolanti;
    }
    if (props.mode === 'air' && (props.type === 'waypoint' || props.type === 'waypoint-hopper')) {
        srcToUse = planeWaypoint;
    }
    if (props.mode === 'air' && props.type === 'poseidon') {
        srcToUse = seaplaneGray;
    }
    if (props.mode === 'bahn' && props.type === 'null') {
        srcToUse = trainGray;
    }
    if (props.mode === 'bahn' && props.type === 'branch') {
        srcToUse = trainBahnBranch;
    }
    if (props.mode === 'bahn' && props.type === 'express') {
        srcToUse = trainBahnExpress;
    }
    if (props.mode === 'bahn' && props.type === 'mainline') {
        srcToUse = trainBahnMainline;
    }
    if (props.mode === 'bahn' && props.type === 'shuttle') {
        srcToUse = trainBahnShuttle;
    }
    if (props.mode === 'rail' && props.type === 'null') {
        srcToUse = trainGray;
    }
    if (props.mode === 'rail' && props.type === 'mcr') {
        srcToUse = trainMCR;
    }
    if (props.mode === 'rail' && props.type === 'black') {
        srcToUse = trainRailBlack;
    }
    if (props.mode === 'rail' && props.type === 'blue') {
        srcToUse = trainRailBlue;
    }
    if (props.mode === 'rail' && props.type === 'brown') {
        srcToUse = trainRailBrown;
    }
    if (props.mode === 'rail' && props.type === 'cyan') {
        srcToUse = trainRailCyan;
    }
    if (props.mode === 'rail' && props.type === 'dark-red') {
        srcToUse = trainRailDarkRed;
    }
    if (props.mode === 'rail' && props.type === 'lime') {
        srcToUse = trainRailLime;
    }
    if (props.mode === 'rail' && props.type === 'orange') {
        srcToUse = trainRailOrange;
    }
    if (props.mode === 'rail' && props.type === 'pink') {
        srcToUse = trainRailPink;
    }
    if (props.mode === 'rail' && props.type === 'purple') {
        srcToUse = trainRailPurple;
    }
    if (props.mode === 'rail' && props.type === 'red') {
        srcToUse = trainRailRed;
    }
    if (props.mode === 'rail' && props.type === 'tan') {
        srcToUse = trainRailTan;
    }
    if (props.mode === 'rail' && props.type === 'yellow') {
        srcToUse = trainRailYellow;
    }
    return (
            <img className={styles.circle} src={srcToUse} alt='circle' />
    )
}

export default Circle;