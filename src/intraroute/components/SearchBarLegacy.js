'use client'
 
import React from 'react';
import { useState } from 'react';
import styles from './SearchBarLegacy.module.css';

import allStopsForSearch from '../scripts/search-data';

function SearchBarLegacy(props) {
    const [items, setItems] = useState(allStopsForSearch);
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item => {
        return item.keywords.toLowerCase().includes(query.toLowerCase())
    })

    const [displayDropdown, setDisplayDropdown] = useState(false);

    function onChange(e) {
        if (query.length > 1) {
            setDisplayDropdown(true);
            console.log('true');
        } else {
            setDisplayDropdown(false);
            console.log('false');
        }
        setQuery(e.target.value);
    }

    return (
        <div className={styles.container}>
            <input type='search' className={styles.searchBar} onChange={e => onChange(e)} placeholder={props.placeholder} />
            {displayDropdown ?
                <div className={styles.dropdown}>
                    {filteredItems.map(item => (
                        <p>{item.title}</p>
                    ))}
                </div>
                :
                ''
            }
        </div>
    )
}

export default SearchBarLegacy;