import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useOutsideClick } from 'rooks';
import styles from './SearchBar.module.css';

function DropdownItem(props) {
    return (
        <div className={styles.dropdownItem} onClick={() => {
            let url = new URL(window.location.href);
            url.searchParams.delete(props.startOrEnd);
            url.searchParams.append(props.startOrEnd, props.id);
            props.setInputValue(props.name);
            window.history.pushState({}, '', url);
        }}>
            <p className={styles.dropdownText}>{props.name}</p>
        </div>
    )
}

function Dropdown(props) {
    function handleClick() {
        props.setRenderDropdown(false);
    }

    let i = 1;

    if (props.stopsListLoaded) {
        return (
            <div className={styles.dropdown} onClick={() => handleClick()}>
                {props.stopsList.map(stop => {
                    if (stop.keywords.toLowerCase().includes(props.query.toLowerCase()) && props.query !== '' && i < 11) {
                        i++;
                        return (
                            <DropdownItem
                                name={stop.name}
                                id={stop.id}
                                startOrEnd={props.startOrEnd}
                                setInputValue={props.setInputValue}
                            />
                        )
                    }
                })}
            </div>
        )
    } else {
        return (
            <div className={styles.dropdown}>
                <div className={styles.dropdownItem}>
                    <p className={styles.dropdownText}>Loading...</p>
                </div>
            </div>
        )
    }
}

function SearchBar(props) {
    const [query, setQuery] = useState('');
    const [renderDropdown, setRenderDropdown] = useState(false);

    let placeholderText;

    if (props.startOrEnd === 'start') {
        placeholderText = 'Start at...'
    } else if (props.startOrEnd === 'end') {
        placeholderText = 'Go to...'
    }

    const dropdownRef = useRef();

    useOutsideClick(dropdownRef, () => {
        setRenderDropdown(false);
    })

    const [inputValue, setInputValue] = useState('');

    let location = useLocation();

    function findStopNameFromId(id) {
        for (let stop in props.stopsList) {
            if (id === stop.id) {
                return stop.name;
            }
        }
        return null;
    }

    useEffect(() => {
        let url = new URL(window.location.href);
        if (url.searchParams.get(props.startOrEnd)) {
            let id = url.searchParams.get(props.startOrEnd);
            let name = findStopNameFromId(id);
            setInputValue(name);
        }
    }, [location])

    return (
        <div className={styles.container}>
            <input
                className={styles.bar}
                type='search'
                placeholder={placeholderText}
                value={inputValue}
                onChange={e => {
                    setInputValue(e.target.value);
                    setQuery(e.target.value);
                    if (query.length > 0) {
                        setRenderDropdown(true);
                    } else {
                        setRenderDropdown(false);
                    }
                }}
            />
            {renderDropdown ?
                <div ref={dropdownRef}>
                    <Dropdown
                        stopsList={props.stopsList}
                        stopsListLoaded={props.stopsListLoaded}
                        query={query}
                        startOrEnd={props.startOrEnd}
                        setRenderDropdown={setRenderDropdown}
                        setInputValue={setInputValue}
                    />
                </div>
            :
                ''
            }
            
        </div>
    )
}

export default SearchBar;