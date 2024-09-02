import React from 'react';
import { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);

    const [start, setStart] = useState('unselected');
    const [end, setEnd] = useState('unselected');

    useEffect(() => {
        if (queryParams.get('start')) {
            setStart(queryParams.get('start'));
        }
        if (queryParams.get('end')) {
            setEnd(queryParams.get('end'));
        }
    }, [])

    let startEnd;

    if (props.startOrEnd === 'start') {
        startEnd = start;
    } else if (props.startOrEnd === 'end') {
        startEnd = end;
    }

    const [manualStop, setManualStop] = useState('');

    if (startEnd !== 'unselected') {
        setManualStop(startEnd.title);
    }

    const formatResult = (item) => {
        return (
            <>
                <div style={{
                    display: 'block',
                    textAlign: 'left',
                    textWrap: 'wrap',
                }}>{item.name}</div>
            </>
        )
    }

    const handleOnSelect = (item) => {
        let url = new URL(window.location.href);

        url.searchParams.delete(props.startOrEnd);
        url.searchParams.append(props.startOrEnd, item.id);
    }

    return(
        <div className={styles.container}>
            <ReactSearchAutocomplete
                items={props.stopsList}
                onSelect={handleOnSelect}
                onSearch={() => {}}
                autoFocus
                formatResult={formatResult}
                maxResults={props.maxResults}
                placeholder={props.placeholder}
                showIcon={false}
                className={styles.search}
                showNoResults={true}
                inputSearchString={manualStop}
                fuseOptions={{
                    keys: [
                        'keywords', 'mode', 'name'
                    ]
                }}
                resultStringKeyName='name'
                styling={{
                    backgroundColor: '#f2f2f2',
                    border: '0px solid black',
                    color: '#4d4d4d',
                    fontFamily: 'Poppins',
                    borderRadius: '15px',
                    showNoResults: false,
                    boxShadow: 'none',
                }}
            />
        </div>
    )
}

export default SearchBar;