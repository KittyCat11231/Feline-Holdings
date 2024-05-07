import React from 'react';
import styles from './Segment.module.css';
import Route from './Route';
import Line from './Line';
import Stop from './Stop';
import Dots from './Dots';

function Segment(props) {
    let yellowLine = false;
    if (props.mode === 'mrtYellowLine') {
        yellowLine = true;
    }
    return (
        <div className={styles.segmentBox}>
            <Dots mode={props.mode} type={props.type} />
            <Route mode={props.mode} type={props.type} route={props.route} num={props.num} routeName={props.routeName} />
            <Line mode={props.mode} type={props.type} destinationCity={props.destinationCity} destinationStopName={props.destinationStopName} codeshare1={props.codeshare1} codeshare2={props.codeshare2} city={props.stop1city} stopName={props.stop1stopName} code={props.stop1code} meta1={props.stop1meta1} meta2={props.stop1meta2} stopCount={props.stopCount} />
            <Stop mode={props.mode} type={props.type} city={props.stop2city} stopName={props.stop2stopName} code={props.stop2code} meta1={props.stop2meta1} meta2={props.stop2meta2} />
            {yellowLine ? <div className={styles.yellowDots}><Dots mode={props.mode} type={props.type} /></div> : ''}
        </div>
    )
}

export default Segment;