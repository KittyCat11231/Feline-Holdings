import React from 'react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styles from './Test.module.css';

function Test() {
    document.title = 'Development Test Page | Feline Holdings'
    
    const [value, setValue] = useState('');

    const debounced = useDebouncedCallback(
        (value) => {
            setValue(value);
        },
        1000
    );

    return (
        <div>
            <h1>Development test page</h1>
            <input onChange={(e) => debounced(e.target.value)} />
            <p>{value}</p>
            <h2 className={styles.test}>Mobile: lime, desktop: magenta</h2>
        </div>
    )
}

export default Test;