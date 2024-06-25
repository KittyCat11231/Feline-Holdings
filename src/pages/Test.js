import React from 'react';
import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styles from './Test.module.css';

import airStops from '../intraroute/data/pathfinding/air.json';
import bahnStops from '../intraroute/data/pathfinding/bahn.json';
import busStops from '../intraroute/data/pathfinding/bus.json';
import omegaStops from '../intraroute/data/pathfinding/omega.json';
import railStops from '../intraroute/data/pathfinding/rail.json';
import railLumevaStops from '../intraroute/data/pathfinding/railLumeva.json';
import railScarStops from '../intraroute/data/pathfinding/railScar.json';
import sailStops from '../intraroute/data/pathfinding/sail.json';

function Test1() {

    let validIds = [];
    
    function addValidIds(modeStops) {
        modeStops.forEach(stop => {
            validIds.push(stop.id);
        })
    }

    addValidIds(airStops);
    addValidIds(bahnStops);
    addValidIds(busStops);
    addValidIds(omegaStops);
    addValidIds(railStops);
    addValidIds(railLumevaStops);
    addValidIds(railScarStops);
    addValidIds(sailStops);

    const [inputValue, setInputValue] = useState('');

    const baseUrl = window.location.href;
    let url = new URL(baseUrl);
    if (!(validIds.includes(url.searchParams.get('start')))) {
        let urlSplit = baseUrl.toString().split('?');
        url = urlSplit[0];
        url = new URL(url);
    }
    url.searchParams.forEach((value, key) => {
        if (key !== 'start') {
            url.searchParams.delete(key);
        }
    })

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleClick() {
        if (validIds.includes(inputValue)) {
            url.searchParams.delete('start');
            url.searchParams.append('start', inputValue);
            window.location.replace(url);
        }
    }

    const [testColor, setTestColor] = useState('red');
    const testDiv = useRef();

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
            <button onClick={handleClick}>Test</button>
            <input onChange={e => handleChange(e)} />
            <p>{url.toString()} text after url</p>

            <div
                className={styles.testDiv}
                ref={testDiv}
                onClick={() => {
                    if (testColor === 'red') {
                        setTestColor('lime');
                    } else if (testColor === 'lime') {
                        setTestColor('red');
                    }
                    testDiv.current.style.setProperty('--background-color', testColor);
                }}
            >
            </div>
        </div>
    )
}

function Test() {
    function handleOnClick() {
        console.log('Click!');

        async function fetchRequest() {
            try {
                const response = await fetch('https://cors.felineholdings.com/?https://feline-holdings-backend.vercel.app/echoback', {
                    method: 'POST',
                    body: JSON.stringify({
                        firstValue: 'foo',
                        secondValue: 'bar'
                    })
                });
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.error(error)
            }
        }

        fetchRequest();
    }

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
            <h1>Development Test Page</h1>
            <button onClick={handleOnClick}>Fetch Request</button>
        </>
    )
}

export default Test;