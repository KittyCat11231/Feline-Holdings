import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './MBS.module.css';

import LiveMBS from '../components/LiveMBS';

function MBS() {

    return (
        <>
            <Helmet>
                <title>MBS | Feline Holdings</title>
                <meta property="og:title" content="MBS | Feline Holdings" />
                <meta name="twitter:title" content="MBS | Feline Holdings" />
                <meta name="description" content="The MRT's most watched broadcaster." />
                <link rel="icon" href='https://svgshare.com/i/17Sp.svg' />
                <link rel="apple-touch-icon" href='https://svgshare.com/i/17Sp.svg' />
            </Helmet>
            <div className={styles.container}>
                <LiveMBS />
            </div>
        </>
    )
}

export default MBS;