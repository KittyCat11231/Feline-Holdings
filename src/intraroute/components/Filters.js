import React from 'react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Filters.module.css';

import FiltersDropdown from './FiltersDropdown';
import FiltersPlaceholder from './FiltersPlaceholder';

import downArrow from '../assets/filters/down-arrow.svg';

function Filters(props) {
    let filtersEnabled = false;

    const [displayDropdown, setDisplayDropdown] = useState(false);
    const [arrowStyles, setArrowStyles] = useState(styles.arrowRight);

    function handleClick() {
        setDisplayDropdown(!displayDropdown);
        if (displayDropdown === true) {
            setArrowStyles(styles.arrowRight);
        } else {
            setArrowStyles(styles.arrowDown);
        }
    }

    let labelRef = useRef();

    useEffect(() => {
        const onDown = (event) => {
            if (!labelRef.current.contains(event.target)) {
                setDisplayDropdown(false);
                setArrowStyles(styles.arrowDown);
            }
        }
        document.addEventListener('mouseDown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.labelContainer} ref={labelRef} onClick={handleClick}>
                <p className={styles.label}>Filters</p>
                <img className={arrowStyles} src={downArrow.src} alt='Arrow' />
            </div>
            {displayDropdown ? 
                <div className={styles.dropdown}>
                    {filtersEnabled ?
                        <FiltersDropdown filters={props.filters} />
                        :
                        <FiltersPlaceholder />
                    }
                </div>
                :
                ''
            }
        </div>
    )
}

export default Filters;