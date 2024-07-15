'use client'
 
import React from 'react';
import styles from './FiltersDropdown.module.css';

import FilterItem from './FilterItem';

function FiltersDropdown(props) {
    return (
        <div className={styles.container}>
            <div className={styles.firstItem}>
                <FilterItem mode='air' filters={props.filters} />
            </div>
            <div className={styles.item}>
                <FilterItem mode='rail' filters={props.filters} />
            </div>
            <div className={styles.item}>
                <FilterItem mode='sail' filters={props.filters} />
            </div>
            <div className={styles.item}>
                <FilterItem mode='bahn' filters={props.filters} />
            </div>
            <div className={styles.item}>
                <FilterItem mode='bus' filters={props.filters} />
            </div>
            <div className={styles.item}>
                <FilterItem mode='railLocal' filters={props.filters} />
            </div>
        </div>
    )
}

export default FiltersDropdown;