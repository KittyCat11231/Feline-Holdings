import React from 'react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styles from './Header.module.css';
import topLogo from '../logos/feline-holdings-large.svg';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header() {
    const [useMobileNav, setUseMobileNav] = useState();
    const [windowWidth, setWindowWidth] = useState();

    function onResize() {
        setWindowWidth(window.innerWidth);
        if (windowWidth > 1162.5) {
            setUseMobileNav(false);
        } else {
            setUseMobileNav(true);
        }
    }

    window.addEventListener('load', onResize);
    window.addEventListener('resize', onResize);

    return (
        <div>
            <a href="/">
                <img className={styles.topLogo} src={topLogo} alt="Feline Holdings" />
            </a>
            {useMobileNav ? <NavMobile /> : <NavDesktop />}
            <div className={styles.yellowHeader}></div>
        </div>
    );
}

export default Header;