import React from 'react';
import { useState } from 'react';
import styles from './Search.module.css';

import startIcon from '../assets/search/start.svg';
import endIcon from '../assets/search/end.svg';
import swap from '../assets/search/swap.svg';
import random from '../assets/search/random.svg';

import SearchBar from './SearchBar';

import allStopsForSearch from '../scripts/search-data';

function Search(props) {
    let setStart = props.setStart;
    let setEnd = props.setEnd;

    let start = props.start;
    let end = props.end;

    const [manualStart, setManualStart] = useState('');
    const [manualEnd, setManualEnd] = useState('');

    const [maxResultsStart, setMaxResultsStart] = useState(10);
    const [maxResultsEnd, setMaxResultsEnd] = useState(10);

    const [doManualStart, setDoManualStart] = useState(false);
    const [doManualEnd, setDoManualEnd] = useState(false);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function handleOnClickRandomizer(startOrEnd) {
        console.log(startOrEnd);
        if (startOrEnd === 'start') {
            console.log(getRandomInt(allStopsForSearch.length - 1));
            let index = getRandomInt(allStopsForSearch.length - 1);
            setStart(allStopsForSearch[index].id);
            setDoManualStart(true);
            setMaxResultsStart(0);
            setManualStart(allStopsForSearch[index].title);
        } else if (startOrEnd === 'end') {
            console.log(getRandomInt(allStopsForSearch.length - 1));
            let index = getRandomInt(allStopsForSearch.length - 1);
            setEnd(allStopsForSearch[index].id);
            setDoManualEnd(true);
            setMaxResultsEnd(0);
            setManualEnd(allStopsForSearch[index].title);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.startContainer}>
                    <img className={styles.icon} src={startIcon} alt='Start' />
                    <div className={`${styles.searchBar} ${styles.searchBarStart}`}>
                        <SearchBar startOrEnd='start' placeholder='Start at...' start={start} setStart={props.setStart} end={end} setEnd={props.setEnd} doManual={doManualStart} manualStop={manualStart} maxResults={maxResultsStart} setMaxResults={setMaxResultsStart} />
                    </div>
                    <img className={`${styles.icon} ${styles.random}`} onClick={() => {handleOnClickRandomizer('start')}} src={random} alt='Randomize' />
                </div>
                <div className={styles.endContainer}>
                    <img className={styles.icon} src={endIcon} alt='Destination' />
                    <div className={`${styles.searchBar} ${styles.searchBarEnd}`}>
                        <SearchBar startOrEnd='end' placeholder='Go to...' start={start} setStart={props.setStart} end={end} setEnd={props.setEnd} doManual={doManualEnd} manualStop={manualEnd} maxResults={maxResultsEnd} setMaxResults={setMaxResultsEnd} />
                    </div>
                    <img className={`${styles.icon} ${styles.random}`} onClick={() => {handleOnClickRandomizer('end')}} src={random} alt='Randomize' />
                </div>
            </div>
            <img className={`${styles.icon} ${styles.swap}`} src={swap} alt='Change direction' />
        </div>
    )
}

export default Search;