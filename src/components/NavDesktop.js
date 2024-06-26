import React from 'react';
import styles from './NavDesktop.module.css';

function NavDesktop() {
    return (
        <nav>
            <div className={`${styles.button} ${styles.intra}`}>
                <a href="/intra">Intra</a>
            </div>
            <div className={`${styles.button} ${styles.roy}`}>
                <a href="/">Roy Disney</a>
            </div>
            <div className={`${styles.button} ${styles.mbs}`}>
                <a href="/mbs">MBS</a>
            </div>
            <div className={`${styles.button} ${styles.bart}`}>
                <a href="/">BART</a>
            </div>
            <div className={`${styles.button} ${styles.fossack}`}>
                <a href="/">Fossack Notseca</a>
            </div>
            <div className={`${styles.button} ${styles.other}`}>
                <a href="/">Other Companies</a>
            </div>
            <div className={`${styles.button} ${styles.news}`}>
                <a href="/">News</a>
            </div>
            <div className={`${styles.button} ${styles.about}`}>
                <a href="/">About Us</a>
            </div>
        </nav>
    )
}

export default NavDesktop;