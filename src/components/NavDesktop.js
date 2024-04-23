import React from 'react';
import './NavDesktop.css';

function NavDesktop() {
    return (
        <nav className="nav-desktop">
            <div className="nav-button nav-intra">
                <a href="https://felineholdings.com">Intra</a>
            </div>
            <div className="nav-button nav-roy">
                <a href="https://felineholdings.com">Roy Disney</a>
            </div>
            <div className="nav-button nav-mbs">
                <a href="https://felineholdings.com">MBS</a>
            </div>
            <div className="nav-button nav-bart">
                <a href="https://felineholdings.com">BART</a>
            </div>
            <div className="nav-button nav-fossack">
                <a href="https://felineholdings.com">Fossack Notseca</a>
            </div>
            <div className="nav-button nav-other">
                <a href="https://felineholdings.com">Other Companies</a>
            </div>
            <div className="nav-button nav-news">
                <a href="https://felineholdings.com">News</a>
            </div>
            <div className="nav-button nav-about">
                <a href="https://felineholdings.com">About Us</a>
            </div>
        </nav>
    )
}

export default NavDesktop;