import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Home.module.css';

import Features from '../components/Home/Features';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | Feline Holdings</title>
                <meta property="og:title" content="Home | Feline Holdings" />
                <meta name="twitter:title" content="Home | Feline Holdings" />
            </Helmet>
            <Features />
        </div>
    );
}

export default Home;