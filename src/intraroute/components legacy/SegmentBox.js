import React from 'react';
import './SegmentBox.css';
import RouteBox from './RouteBox.js';
import FirstStop from './FirstStop.js';
import FirstStopMeta from './FirstStopMeta.js';
import ArrowBox from './ArrowBox.js';
import LastStop from './LastStop.js';
import LastStopMeta from './LastStopMeta.js';

function SegmentBox(props) {
    return (
        <div className='segment-box'>
            <RouteBox mode='bahn' />
            <div className='stops-container'>
                <div className='first-stop-container'>
                    <FirstStop />
                    <FirstStopMeta />
                </div>
                <ArrowBox />
                <div className='last-stop-container'>
                    <LastStop />
                    <LastStopMeta />
                </div>
            </div>
        </div>
    )
}

export default SegmentBox;