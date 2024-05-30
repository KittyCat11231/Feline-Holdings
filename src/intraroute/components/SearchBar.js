import React from 'react';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const setStart = props.setStart;
    const setEnd = props.setEnd;

    const handleOnSelect = (item) => {
        console.log(item);
        if (props.startOrEnd === 'start') {
            setStart(item.id);
        }
        if (props.startOrEnd === 'end') {
            setEnd(item.id);
        }
    }

    const formatResult = (item) => {
        return (
            <>
                <div style={{
                    display: 'block',
                    textAlign: 'left',
                    textWrap: 'wrap',
                }}>{item.title}</div>
            </>
        )
    }

    let setMaxResults = props.setMaxResults;

    let manualStop = props.manualStop;

    const setReturnError = props.setReturnError;

    if (props.stopsMap.get(props.start)) {
        if (props.filters.useAir === false && props.stopsMap.get(props.start).mode === 'air') {
            setReturnError(true);
        }
        if (props.filters.useRail === false && props.stopsMap.get(props.start).mode === 'rail') {
            setReturnError(true);
        }
        if (props.filters.useSail === false && props.stopsMap.get(props.start).mode === 'sail') {
            setReturnError(true);
        }
        if (props.filters.useBahn === false && props.stopsMap.get(props.start).mode === 'bahn') {
            setReturnError(true);
        }
        if (props.filters.useBus === false && (props.stopsMap.get(props.start).mode === 'bus' || props.stopsMap.get(props.start).mode === 'omega')) {
            setReturnError(true);
        }
        if (props.filters.useRailLocal === false && (props.stopsMap.get(props.start).mode === 'railLumeva' || props.stopsMap.get(props.start).mode === 'railScar')) {
            setReturnError(true);
        }
    }
    if (props.stopsMap.get(props.end)) {
        if (props.filters.useAir === false && props.stopsMap.get(props.end).mode === 'air') {
            setReturnError(true);
        }
        if (props.filters.useRail === false && props.stopsMap.get(props.end).mode === 'rail') {
            setReturnError(true);
        }
        if (props.filters.useSail === false && props.stopsMap.get(props.end).mode === 'sail') {
            setReturnError(true);
        }
        if (props.filters.useBahn === false && props.stopsMap.get(props.end).mode === 'bahn') {
            setReturnError(true);
        }
        if (props.filters.useBus === false && (props.stopsMap.get(props.end).mode === 'bus' || props.stopsMap.get(props.end).mode === 'omega')) {
            setReturnError(true);
        }
        if (props.filters.useRailLocal === false && (props.stopsMap.get(props.end).mode === 'railLumeva' || props.stopsMap.get(props.end).mode === 'railScar')) {
            setReturnError(true);
        }
    }

    return (
        <div className={styles.container}>
            <ReactSearchAutocomplete
                items={props.allStopsForSearch}
                onSelect={handleOnSelect}
                onSearch={() => {setMaxResults(10)}}
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
                        'keywords', 'mode', 'title'
                    ]
                }}
                resultStringKeyName='title'
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