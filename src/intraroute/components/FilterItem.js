import React from 'react';
import { useState } from 'react';
import styles from './FilterItem.module.css';

import checkBox from '../assets/filters/check-box.svg';
import uncheckedBox from '../assets/filters/unchecked-box.svg';
import busBox from '../assets/filters/bus-box.svg';
import metroBox from '../assets/filters/metro-box.svg';
import planeBox from '../assets/filters/plane-box.svg';
import sailBox from '../assets/filters/sail-box.svg';
import trainBox from '../assets/filters/train-box.svg';

function FilterItem(props) {
    let boxSrc;
    let title;
    let setUse;
    
    if (props.mode === 'air') {
        boxSrc = planeBox;
        title = 'IntraAir';
        setUse = props.filters.setUseAir;
    }
    if (props.mode === 'rail') {
        boxSrc = trainBox;
        title = 'IntraRail';
        setUse = props.filters.setUseRail;
    }
    if (props.mode === 'sail') {
        boxSrc = sailBox;
        title = 'IntraSail';
        setUse = props.filters.setUseSail;
    }
    if (props.mode === 'bahn') {
        boxSrc = trainBox;
        title = 'IntraBahn';
        setUse = props.filters.setUseBahn;
    }
    if (props.mode === 'bus') {
        boxSrc = busBox;
        title = 'IntraBus';
        setUse = props.filters.setUseBus;
    }
    if (props.mode === 'railLocal') {
        boxSrc = metroBox;
        title = 'IntraRail Local Systems';
        setUse = props.filters.setUseRailLocal;
    }

    const [checked, setChecked] = useState(true);
    const [checkBoxSrc, setCheckBoxSrc] = useState(checkBox);
    const [checkBoxAlt, setCheckBoxAlt] = useState('Selected');

    function handleClick() {
        if (checked === true) {
            setChecked(false);
            setCheckBoxSrc(uncheckedBox);
            setCheckBoxAlt('Not selected');
            setUse(false);
        } else {
            setChecked(true);
            setCheckBoxSrc(checkBox);
            setCheckBoxAlt('Selected');
            setUse(true);
        }
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <img
                src={checkBoxSrc}
                className={`${styles.box} ${styles.checkBox}`}
                alt={checkBoxAlt}
            />
            <img src={boxSrc} className={`${styles.box} ${styles.modeBox}`} alt={title} />
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default FilterItem;