import React from 'react';
import styles from './NavMobile.module.css';
import { useState, useEffect, useRef } from 'react';

function DropdownContent() {
    return (
        <div className={styles.dropdownContent}>
            <a className={styles.intra} href="/">Intra</a>
            <a className={styles.roy} href="/">Roy Disney</a>
            <a className={styles.mbs} href="/">MBS</a>
            <a className={styles.bart} href="/">BART</a>
            <a className={styles.fossack} href="/">Fossack Notseca</a>
            <a className={styles.other} href="/">Other Companies</a>
            <a className={styles.news} href="/">News</a>
            <a className={styles.about} href="/">About Us</a>
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