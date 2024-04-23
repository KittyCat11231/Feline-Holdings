import React from 'react';
import './NavMobile.css';
import { useState, useEffect, useRef } from 'react';

function DropdownContent() {
    return (
        <div className="dropdown-content">
            <a className="intra-mobile" href="home">Intra</a>
            <a className="roy-mobile" href="home">Roy Disney</a>
            <a className="mbs-mobile" href="home">MBS</a>
            <a className="bart-mobile" href="home">BART</a>
            <a className="fossack-mobile" href="home">Fossack Notseca</a>
            <a className="other-mobile" href="home">Other Companies</a>
            <a className="news-mobile" href="home">News</a>
            <a className="about-mobile" href="home">About Us</a>
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
        <nav ref={navRef} className="nav-mobile">
            <div className="dropdown">
                <button className="dropdown-button" onClick={handleClick}>Explore Feline Holdings</button>
                {isDisplayed && <DropdownContent />}
            </div>
        </nav>
    )
}

export default NavMobile;