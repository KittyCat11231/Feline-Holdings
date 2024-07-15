'use client'
 
import React from 'react';
import { useState } from 'react';
import styles from './Console.module.css';

function Console() {
    const [apiEndpoint, setApiEndpoint] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className={styles.container}>
            <p className={styles.text}>Action:</p>
            <select
                name='options'
                onChange={(e) => {
                    setApiEndpoint(e.target.value);
                }}
            >
                <option value=''></option>
                <option value='mbs/add-video'>Add recent MBS video</option>
            </select>
            <p className={styles.text}>Password:</p>
            <input
                type='text'
                onChange={(e) => {
                    setPasswordValue(e.target.value);
                }}
            />
            <br />
            <input
                className={styles.submit}
                type='submit'
                value='Submit'
                onClick={async () => {
                    setSuccess(false);
                    setFailure(false);
                    setIsError(false);
                    setIsLoading(true);
                    try {
                        const response = await fetch(`https://cors.felineholdings.com/?https://api.felineholdings.com/${apiEndpoint}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                password: passwordValue
                            })
                        })
                        console.log(response);
                        if (response === true) {
                            setIsLoading(false);
                            setSuccess(true);
                        } else {
                            setIsLoading(false);
                            setFailure(true);
                        }
                    } catch (error) {
                        console.log(error);
                        setIsLoading(false);
                        setIsError(true);
                    }
                }}
            />
            {success ? <p>Accepted!</p> : ''}
            {failure ? <p>Incorrect password.</p> : ''}
            {isError ? <p>Error. See console.</p> : ''}
            {isLoading ? <p>Waiting for response...</p> : ''}
        </div>
    )
}

export default Console;