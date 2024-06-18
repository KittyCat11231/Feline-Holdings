import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Test.module.css';

function Test() {
    

    return (
        <>
            <Helmet>
                <title>Test Page | Feline Holdings</title>
        
                <meta property="og:url" content="https://felineholdings.com/test" />
                <meta property="og:title" content="Test Page | Feline Holdings" />
                <meta property="og:description" content="Feline Holdings development test page" />

                <meta property="twitter:domain" content="felineholdings.com/test" />
                <meta property="twitter:url" content="https://felineholdings.com/test" />
                <meta name="twitter:title" content="Test Page | Feline Holdings" />
                <meta name="twitter:description" content="Feline Holdings development test page" />
            </Helmet>
            <h1>Placeholder</h1>
        </>
    )
}

export default Test;