import React from 'react';
import './ModeBox.css';

import bahnLogo from '../logos/intrabahn-white.svg';

function ModeBox(props) {
    if (props.mode === 'bahn') {
        return (
            <div className='intra-mode-box'>
                <img className='intra-mode-logo' src={bahnLogo} alt='IntraBahn' />
            </div>
        )
    }
}

export default ModeBox;