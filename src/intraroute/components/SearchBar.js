import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

import allStopsForSearch from '../scripts/search-data';

function SearchBar() {
    return (
        <div>
            <input type="search" />
        </div>
    )
}

export default SearchBar;