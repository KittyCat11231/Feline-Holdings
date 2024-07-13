import React from 'react';
import styles from './Footer.module.css';
import bottomLogo from '../logos/feline-holdings-large.svg';

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer className={styles.container}>
            <div className={styles.yellowFooter}></div>
            <div className={styles.orangeFooter}></div>
            <div className={styles.footerContents}>
                <img className={styles.bottomLogo} src={bottomLogo.src} alt="Feline Holdings" />
                <div className={styles.footerText}>
                    <p className={styles.footerText1}>© 2014 - {currentYear} Feline Holdings. All rights reserved.</p>
                    <p className={styles.footerText2}>Designed by Roy Disney Softworks. A Feline Holdings company.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;