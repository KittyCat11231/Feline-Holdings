import React from 'react';
import styles from './NavDesktop.module.css';

function NavDesktop() {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.button} ${styles.intra}`}>
                <a href="/intra">Intra</a>
            </div>
            <div className={`${styles.button} ${styles.roy}`}>
                <a href="/roy-disney">Roy Disney</a>
            </div>
            <div className={`${styles.button} ${styles.mbs}`}>
                <a href="/mbs">MBS</a>
            </div>
            <div className={`${styles.button} ${styles.bart}`}>
                <a href="/bart">BART</a>
            </div>
            <div className={`${styles.button} ${styles.fossack}`}>
                <a href="/fossack-notseca">Fossack Notseca</a>
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