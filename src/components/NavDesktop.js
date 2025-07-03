import React from 'react';
import styles from './NavDesktop.module.css';

function NavDesktop() {
    return (
        <nav>
            <div className={`${styles.button} ${styles.intra}`}>
                <a href="/intra">Intra</a>
            </div>
            <div className={`${styles.button} ${styles.mbs}`}>
                <a href="/mbs">MBS</a>
            </div>
            <div className={`${styles.button} ${styles.roy}`}>
                <a href="/roy-disney-mbs">Roy Disney MBS</a>
            </div>
            <div className={`${styles.button} ${styles.katiesoft}`}>
                <a href="/katiesoft">Katiesoft</a>
            </div>
            <div className={`${styles.button} ${styles.retail}`}>
                <a href="/retail">Feline Retail Group</a>
            </div>
            <div className={`${styles.button} ${styles.bart}`}>
                <a href="/bart">BART</a>
            </div>
            <div className={`${styles.button} ${styles.other}`}>
                <a href="/other-companies">Other Companies</a>
            </div>
            <div className={`${styles.button} ${styles.news}`}>
                <a href="/news">News</a>
            </div>
            <div className={`${styles.button} ${styles.about}`}>
                <a href="/about">About Us</a>
            </div>
        </nav>
    )
}

export default NavDesktop;