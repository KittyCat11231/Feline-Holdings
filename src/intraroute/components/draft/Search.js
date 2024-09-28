import React from 'react';
import { useState, useRef } from 'react';
import styles from './Search.module.css';

import helpers from '@kyle11231/helper-functions';

import SearchBar from './SearchBar';

import startIcon from '../../assets/search/start.svg';
import endIcon from '../../assets/search/end.svg';
import swap from '../../assets/search/swap.svg';
import random from '../../assets/search/random.svg';

function Search(props) {
    const swapperRef = useRef();

    function randomizerOnClick(startOrEnd) {
        let index = helpers.getRandomInteger(props.stopsList.length) - 1;
        let id = props.stopsList[index].id;

        let url = new URL(window.location.href);
        url.searchParams.delete(startOrEnd);
        url.searchParams.append(startOrEnd, id);

        window.history.pushState({}, '', url);
    }

    function swapperOnClick() {
        let url = new URL(window.location.href);
        let oldStart = url.searchParams.get('start');
        let oldEnd = url.searchParams.get('end');
        url.searchParams.delete('start');
        url.searchParams.delete('end');
        url.searchParams.append('start', oldEnd);
        url.searchParams.append('end', oldStart);
        window.history.pushState({}, '', url);
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.startContainer}>
                    <img className={styles.icon} src={startIcon} alt='Start' />
                    <div className={`${styles.searchBar} ${styles.searchBarStart}`}>
                        <SearchBar
                            stopsList={props.stopsList}
                            stopsListLoaded={props.stopsListLoaded}
                            startOrEnd={'start'}
                        />
                    </div>
                    <img
                        className={`${styles.icon}
                        ${styles.random}`}
                        onClick={() => randomizerOnClick('start')}
                        src={random}
                        alt='Randomize'
                    />
                </div>
                <div className={styles.endContainer}>
                    <img className={styles.icon} src={endIcon} alt='End' />
                    <div className={`${styles.searchBar} ${styles.searchBarEnd}`}>
                        <SearchBar
                            stopsList={props.stopsList}
                            stopsListLoaded={props.stopsListLoaded}
                            startOrEnd={'end'}
                        />
                    </div>
                    <img
                        className={`${styles.icon}
                        ${styles.random}`}
                        onClick={() => randomizerOnClick('end')}
                        src={random}
                        alt='Randomize'
                    />
                </div>
            </div>
            <img
                className={`${styles.icon} ${styles.swap}`}
                onClick={() => swapperOnClick()}
                src={swap}
                alt='Change direction'
                ref={swapperRef}
            />
        </div>
    )
}

export default Search;