import React from 'react';
import styles from './Header.module.css';
import topLogo from '../logos/feline-holdings-large.svg';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header() {
    let navToUse;

    if (matchMedia('(pointer:coarse)').matches) {
        navToUse = <NavMobile />
    } else {
        navToUse = <NavDesktop />
    }

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