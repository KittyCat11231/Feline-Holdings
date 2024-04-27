import React from 'react';
import './ArrowBox.css';

import arrow from '../assets/right-arrow-white.svg';

function ArrowBox() {
    return (
        <div className='arrow-box'>
            <img className='arrow' src={arrow} alt='Arrow pointing right' />
            <p className='stop-count'>3 stops</p>
        </div>
    )
}

export default ArrowBox;