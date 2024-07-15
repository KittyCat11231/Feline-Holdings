'use client'
 
import React from 'react';
import styles from './NavMobile.module.css';
import { useState, useEffect, useRef } from 'react';

function DropdownContent() {
    return (
        <div className={styles.dropdownContent}>
            <a className={styles.intra} href="/intra">Intra</a>
            <a className={styles.roy} href="/roy-disney">Roy Disney</a>
            <a className={styles.mbs} href="/mbs">MBS</a>
            <a className={styles.bart} href="/bart">BART</a>
            <a className={styles.fossack} href="/fossack-notseca">Fossack Notseca</a>
            <a className={styles.other} href="/other-companies">Other Companies</a>
            <a className={styles.news} href="/news">News</a>
            <a className={styles.about} href="/about">About Us</a>
        </div>
    )
}

function NavMobile() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const handleClick = () => {
        setIsDisplayed(!isDisplayed);
    }
    let navRef = useRef();
    useEffect(() => {
        const onDown = (event) => {
            if (!navRef.current.contains(event.target)) {
                setIsDisplayed(false);
            }
        }
        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [])
    return (
        <nav ref={navRef}>
            <div className={styles.dropdown}>
                <button className={styles.dropdownButton} onClick={handleClick}>Explore Feline Holdings</button>
                {isDisplayed && <DropdownContent />}
            </div>
        </nav>
    )
}

export default NavMobile;