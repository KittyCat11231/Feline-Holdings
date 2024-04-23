import React from 'react';
import './RouteBoxes.css'

import bahnLogoWhite from '../logos/intrabahn-white.svg';

function LogoBox(props) {
    let imgSrc;
    let altText;
    if (props.mode === 'bahn') {
        imgSrc = bahnLogoWhite;
        altText = 'IntraBahn';
    }
    return (
        <div className="logo-box">
            <img src={imgSrc} className={`${props.mode}-logo`} alt={altText} />
        </div>
    )
}

export default LogoBox;