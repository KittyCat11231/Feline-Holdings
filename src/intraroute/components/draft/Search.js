import React from 'react';
import { useState, useRef } from 'react';
import styles from './Search.module.css';

import SearchBar from './SearchBar';

import startIcon from '../../assets/search/start.svg';
import endIcon from '../../assets/search/end.svg';
import swap from '../../assets/search/swap.svg';
import random from '../../assets/search/random.svg';

function Search(props) {
    const swapperRef = useRef();

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
                        onClick={() => console.log('click')}
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
                        onClick={() => console.log('click')}
                        src={random}
                        alt='Randomize'
                    />
                </div>
            </div>
            <img
                className={`${styles.icon} ${styles.swap}`}
                onClick={() => console.log('click')}
                src={swap}
                alt='Change direction'
                ref={swapperRef}
            />
        </div>
    )
}

export default Search;