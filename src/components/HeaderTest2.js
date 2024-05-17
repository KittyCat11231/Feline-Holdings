import React from 'react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styles from './Header.module.css';
import topLogo from '../logos/feline-holdings-large.svg';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header() {
    const [navToUse, setNavToUse] = useState();
    const [windowWidth, setWindowWidth] = useState();

    function onResize() {
        setWindowWidth(window.innerWidth);
        if (windowWidth > 1162.5) {
            setNavToUse(<NavDesktop />);
        } else {
            setNavToUse(<NavMobile />);
        }
    }

    const debouncedResize = useDebouncedCallback(
        () => {onResize()},
        20
    );

    window.addEventListener('resize', debouncedResize());

    return (
        <div>
            <a href="/">
                <img className={styles.topLogo} src={topLogo} alt="Feline Holdings" />
            </a>
            {navToUse}
            <div className={styles.yellowHeader}></div>
        </div>
    );
}

export default Header;