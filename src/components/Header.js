import React from 'react';
import './Header.css';
import topLogo from '../logos/feline-holdings-large.svg';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header() {
    let navToUse;
    if (window.innerWidth > 1162.5) {
        navToUse = <NavDesktop />;
    } else (
        navToUse = <NavMobile />
    )
    return (
        <div>
            <a href="https://felineholdings.com">
                <img className="top-logo" src={topLogo} alt="Feline Holdings" />
            </a>
            {navToUse}
            <div className="yellow-header"></div>
        </div>
    );
}

export default Header;