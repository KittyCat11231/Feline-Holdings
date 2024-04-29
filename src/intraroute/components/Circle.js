import React from 'react';
import styles from './Circle.module.css';

import trainBahnMainline from '../assets/circle-icons/train-bahn-mainline.svg';

function Circle() {
    return (
            <img className={styles.circle} src={trainBahnMainline} alt='circle' />
    )
}

export default Circle;