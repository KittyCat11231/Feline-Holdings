import React from 'react';
import styles from './Segment.module.css';
import Route from './Route';
import Line from './Line';
import Stop from './Stop';
import Dots from './Dots';

function Segment(props) {
    return (
        <div className={styles.segmentBox}>
            <Dots mode='bahn' type='mainline' />
            <Route mode='sail' type='mainline' route='sail1bnorth' num='1' routeName='Nansei Gintra' />
            <Line mode='bahn' type='mainline' destinationCity='Whiteley' destinationStopName='Quins Junction' city='Zaquar' stopName='Loreen Terminal' code='ZQL' meta1='Ticket Machine A1' meta2='Track 4' stopCount='3' />
            <Stop mode='bahn' type='mainline' city='Whiteley' stopName='Quins Junction' code='WHQ' meta1='Platform 11' meta2='Platform 11' />
        </div>
    )
}

export default Segment;