import React from 'react';
import './RouteBoxes.css';

import bahnBullet1 from '../assets/intrabahn/bullets/1.png';
import bahnBulletWhite1 from '../assets/intrabahn/bullets/1-white.png';

import LogoBox from './LogoBox';

function BahnRouteBox(props) {
    let staticClasses = "route-box bahn-route-box ";
    let typeClass = `bahn-${props.type}-route-box`;
    return (
        <div className="route-box-container">
            <LogoBox mode="bahn" />
            <div className={staticClasses + typeClass}>
                <div className="route">
                    <img src={bahnBulletWhite1} className="route-bullet" />
                    <p className="route-name">Whiteliner</p>
                </div>
            </div>
        </div>
    )
}

export default BahnRouteBox;