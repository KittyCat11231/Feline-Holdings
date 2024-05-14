import React from 'react';
import styles from './Search.module.css';

import start from '../assets/search/start.svg';
import end from '../assets/search/end.svg';
import swap from '../assets/search/swap.svg';
import random from '../assets/search/random.svg';

import SearchBar from './SearchBar';

function Search(props) {
    let setStart = props.setStart;
    let setEnd = props.setEnd;
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.startContainer}>
                    <img className={styles.icon} src={start} alt='Start' />
                    <div className={styles.searchBar}>
                        <SearchBar startOrEnd='start' placeholder='Start at...' start={props.start} setStart={props.setStart} end={props.end} setEnd={props.setEnd} />
                    </div>
                    <img className={`${styles.icon} ${styles.random}`} src={random} alt='Randomize' />
                </div>
                <div className={styles.endContainer}>
                    <img className={styles.icon} src={end} alt='Destination' />
                    <div className={styles.searchBar}>
                        <SearchBar startOrEnd='end' placeholder='Go to...' start={props.start} setStart={props.setStart} end={props.end} setEnd={props.setEnd} />
                    </div>
                    <img className={`${styles.icon} ${styles.random}`} src={random} alt='Randomize' />
                </div>
            </div>
            <img className={`${styles.icon} ${styles.swap}`} src={swap} alt='Change direction' />
        </div>
    )
}

export default Search;