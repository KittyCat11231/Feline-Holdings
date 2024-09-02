import React from 'react';
import { useState, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import helpers from '@kyle11231/helper-functions';
import styles from './Search.module.css';

import startIcon from '../assets/search/start.svg';
import endIcon from '../assets/search/end.svg';
import swap from '../assets/search/swap.svg';
import random from '../assets/search/random.svg';

import SearchBar from './SearchBar';

import usePrevious from '../../scripts/usePrevious';

function Search(props) {
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

    function handleOnClickSwapper() {
        setSwapperRotation(swapperRotation + 180);
        setTimeout(() => {
            let oldStart = props.start;
            let oldEnd = props.end;

            let url = new URL(window.location.href);

            url.searchParams.delete('start');
            url.searchParams.delete('end');

            url.searchParams.append('start', oldEnd);
            url.searchParams.append('end', oldStart);
        }, 150);
    }

    function handleOnClickRandomizer(startOrEnd) {
        let index = helpers.getRandomInteger(props.stopsList.length);
        let stop = props.stopsList[index].id;

        let url = new URL(window.location.href);
        url.searchParams.delete(startOrEnd);
        url.searchParams.append(startOrEnd, stop);
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
            <div className={styles.startContainer}>
                    <img className={styles.icon} src={startIcon} alt='Start' />
                    <div className={`${styles.searchBar} ${styles.searchBarStart}`}>
                        <SearchBar
                            startOrEnd='start'
                            placeholder='Start at...'
                            stopsList={props.stopsList}
                        />
                    </div>
                    <img
                        className={`${styles.icon}
                        ${styles.random}`}
                        onClick={() => {handleOnClickRandomizer('start')}}
                        src={random}
                        alt='Randomize'
                    />
                </div>
                <div className={styles.endContainer}>
                    <img className={styles.icon} src={endIcon} alt='Destination' />
                    <div className={`${styles.searchBar} ${styles.searchBarEnd}`}>
                        <SearchBar
                            startOrEnd='end'
                            placeholder='Go to...'
                            stopsList={props.stopsList}
                        />
                    </div>
                    <img
                        className={`${styles.icon}
                        ${styles.random}`}
                        onClick={() => {handleOnClickRandomizer('end')}}
                        src={random}
                        alt='Randomize'
                    />
                </div>
            </div>
            <img
                className={`${styles.icon} ${styles.swap}`}
                onClick={() => {handleOnClickSwapper()}}
                src={swap}
                alt='Change direction'
                ref={swapperRef}
            />
        </div>
    )
}

export default Search;