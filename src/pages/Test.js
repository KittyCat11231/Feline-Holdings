import React from 'react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Helmet } from 'react-helmet';
import styles from './Test.module.css';

function Test() {
    const [value, setValue] = useState('');

    const debounced = useDebouncedCallback(
        (value) => {
            setValue(value);
        },
        1000
    );

    return (
        <div>
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
            <h1>Development test page</h1>
            <input onChange={(e) => debounced(e.target.value)} />
            <p>{value}</p>
            <h2 className={styles.test}>Mobile: lime, desktop: magenta</h2>
        </div>
    )
}

export default Test;