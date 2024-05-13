import React from 'react';
import { useState } from 'react';

import allStopsForSearch from '../scripts/search-data';

function SearchBarTest() {
    console.log(allStopsForSearch[0]);
    const [items, setItems] = useState(allStopsForSearch);
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item => {
        return item.keywords.toLowerCase().includes(query.toLowerCase())
    })

    return(
        <div>
            <input value={query} type='search' onChange={e => setQuery(e.target.value)} />
            <h3>Results:</h3>
            {filteredItems.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}

export default SearchBarTest;