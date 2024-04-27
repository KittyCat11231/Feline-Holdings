import React from 'react';
import './RouteBox.css';
import ModeBox from './ModeBox.js';

import bahnBulletWhite1 from '../assets/intrabahn/bullets/1-white.png';

function RouteBox(props) {
    return (
        <div className='route bahn-mainline-route'>
            <ModeBox mode={props.mode} />
            <img className='bullet' src={bahnBulletWhite1} alt='IntraBahn 1' />
            <p className='bahn-rail-route-name'>Intrepid</p>
        </div>
    )
}

export default RouteBox;