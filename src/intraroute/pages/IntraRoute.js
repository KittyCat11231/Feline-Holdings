import React from 'react';
import styles from './IntraRoute.module.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Segment from '../components/Segment';
import Stop from '../components/Stop';

function IntraRoute() {
    return (
        <div id="page-container">
            <div id="container-wrap">
                <Header />
                <div className={`${styles.firstLastStop} ${styles.firstStop}`}>
                    <Stop mode='bahn' type='null' city='Whiteley' stopName='Quins Junction' code='WHQ' meta1='null' meta2='null' />
                </div>
                <div className={styles.segment}>
                    <Segment />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IntraRoute;