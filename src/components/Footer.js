import React from 'react';
import './Footer.css';
import bottomLogo from '../logos/feline-holdings-large.svg';

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="yellow-footer"></div>
            <div className="orange-footer"></div>
            <div className="footer-contents">
                <img className="bottom-logo" src={bottomLogo} alt="Feline Holdings" />
                <div className="footer-text">
                    <p className="footer-text-1">© 2014 - {currentYear} Feline Holdings. All rights reserved.</p>
                    <p className="footer-text-2">Designed by Roy Disney Softworks. A Feline Holdings company.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;