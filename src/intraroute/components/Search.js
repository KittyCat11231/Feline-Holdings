'use client'
 
import React from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import helpers from '@kyle11231/helper-functions';
import styles from './Search.module.css';

import startIcon from '../assets/search/start.svg';
import endIcon from '../assets/search/end.svg';
import swap from '../assets/search/swap.svg';
import random from '../assets/search/random.svg';

import SearchBar from './SearchBar';

import createAllStopsForSearch from '../scripts/search-data';
import usePrevious from '../../scripts/usePrevious';

function Search(props) {
    let allStopsForSearch = [];
    createAllStopsForSearch(allStopsForSearch);

    let setStart = props.setStart;
    let setEnd = props.setEnd;

    let start = props.start;
    let end = props.end;

    const stopsMap = new Map();

    for (let i = 0; i < allStopsForSearch.length; i++) {
        stopsMap.set(allStopsForSearch[i].id, allStopsForSearch[i]);
    }

    const [manualStart, setManualStart] = useState('');
    const [manualEnd, setManualEnd] = useState('');

    const [maxResultsStart, setMaxResultsStart] = useState(10);
    const [maxResultsEnd, setMaxResultsEnd] = useState(10);

    const [swapper, setSwapper] = useState(1);
    const prevSwapper = usePrevious(swapper);

    const swapperRef = useRef();
    const [swapperRotation, setSwapperRotation] = useState(0);

    useGSAP(
        () => {
            gsap.to(swapperRef.current, {
                rotation: swapperRotation,
                duration: 0.25,
                ease: 'power4.out',
            })
        }, { dependencies: [swapperRotation] }
    )

    function swapperFunc() {
        setSwapper(swapper + 1);
        let oldStart = start;
        let oldEnd = end;
        setStart(oldEnd);
        setEnd(oldStart);
        setMaxResultsStart(0);
        setMaxResultsEnd(0);
        if (stopsMap.get(oldEnd)) {
            setManualStart(stopsMap.get(oldEnd).title);
        }
        if (stopsMap.get(oldStart)) {
            setManualEnd(stopsMap.get(oldStart).title);
        }
    }

    function handleOnClickSwapper() {
        setSwapperRotation(swapperRotation + 180);
        setTimeout(() => {
            swapperFunc();
        }, 150);
    }

    function handleOnClickRandomizer(startOrEnd) {
        if (startOrEnd === 'start') {
            let index = helpers.getRandomInteger(allStopsForSearch.length - 1);
            setStart(allStopsForSearch[index].id);
            setMaxResultsStart(0);
            setManualStart(allStopsForSearch[index].title);
        } else if (startOrEnd === 'end') {
            let index = helpers.getRandomInteger(allStopsForSearch.length - 1);
            setEnd(allStopsForSearch[index].id);
            setMaxResultsEnd(0);
            setManualEnd(allStopsForSearch[index].title);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.startContainer}>
                    <img className={styles.icon} src={startIcon.src} alt='Start' />
                    <div className={`${styles.searchBar} ${styles.searchBarStart}`}>
                        <SearchBar
                            startOrEnd='start'
                            placeholder='Start at...'
                            start={start}
                            setStart={props.setStart}
                            end={end} setEnd={props.setEnd}
                            manualStop={manualStart}
                            maxResults={maxResultsStart}
                            setMaxResults={setMaxResultsStart}
                            swapper={swapper}
                            prevSwapper={prevSwapper}
                            allStopsForSearch={allStopsForSearch}
                            returnError={props.returnError}
                            setReturnError={props.setReturnError}
                            filters={props.filters}
                            stopsMap={stopsMap}
                        />
                    </div>
                    <img
                        className={`${styles.icon}
                        ${styles.random}`}
                        onClick={() => {handleOnClickRandomizer('start')}}
                        src={random.src}
                        alt='Randomize'
                    />
                </div>
                <div className={styles.endContainer}>
                    <img className={styles.icon} src={endIcon.src} alt='Destination' />
                    <div className={`${styles.searchBar} ${styles.searchBarEnd}`}>
                        <SearchBar
                            startOrEnd='end'
                            placeholder='Go to...'
                            start={start}
                            setStart={props.setStart}
                            end={end}
                            setEnd={props.setEnd}
                            manualStop={manualEnd}
                            maxResults={maxResultsEnd}
                            setMaxResults={setMaxResultsEnd}
                            swapper={swapper}
                            prevSwapper={prevSwapper}
                            allStopsForSearch={allStopsForSearch}
                            returnError={props.returnError}
                            setReturnError={props.setReturnError}
                            filters={props.filters}
                            stopsMap={stopsMap}
                        />
                    </div>
                    <img
                        className={`${styles.icon}
                        ${styles.random}`}
                        onClick={() => {handleOnClickRandomizer('end')}}
                        src={random.src}
                        alt='Randomize'
                    />
                </div>
            </div>
            <img
                className={`${styles.icon} ${styles.swap}`}
                onClick={() => {handleOnClickSwapper()}}
                src={swap.src}
                alt='Change direction'
                ref={swapperRef}
            />
        </div>
    )
}

export default Search;