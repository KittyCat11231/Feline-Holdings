import React from 'react';
import styles from './Segment.module.css';
import Route from './Route';
import Line from './Line';
import Stop from './Stop';
import Dots from './Dots';

function Segment() {
    return (
        <div className={styles.segmentBox}>
            <Dots />
            <Route mode='bahn' type='mainline' routeName='Intrepid' />
            <Line mode='bahn' type='mainline' destinationCity='Whiteley' destinationStopName='Quins Junction' city='Zaquar' stopName='Loreen Terminal' code='ZQL' meta1='Ticket Machine A1' meta2='Track 4' stopCount='3' />
            <Stop />
        </div>
    )
}

export default Segment;