'use client'
 
import React from 'react';
import { useState } from 'react';
import styles from './SearchBarTest.module.css';

import allStopsForSearch from '../scripts/search-data';

function Dropdown(props) {
  return (
    <div className={styles.dropdownContainer}>
      {props.filteredItems.map(item => {
        return <p className={styles.searchItem}>{item.title}</p>
      })}
    </div>
  )
}

function SearchBarTest() {
    console.log(allStopsForSearch[0]);
    const [items, setItems] = useState(allStopsForSearch);
    const [query, setQuery] = useState('');
    
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredItems = items.filter(item => {
        return item.keywords.toLowerCase().includes(query.toLowerCase())
    })
    
    function handleChange(e) {
      setQuery(e.target.value);
      if (query.length > 0 && showDropdown === false) {
        setShowDropdown(true);
      } else if (query.length < 1 && showDropdown === true) {
        setShowDropdown(false);
      }
    }

    return (
        <div>
            <input value={query} type='search' onChange={handleChange(e)} />
            {showDropdown ? <Dropdown filteredItems={filteredItems} /> : ''}
            <h3>Results:</h3>
            {filteredItems.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}

export default SearchBarTest;