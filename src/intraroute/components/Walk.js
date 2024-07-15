'use client'
 
import React from 'react';
import styles from './Walk.module.css';

import Segment from './Segment';

import dots from '../assets/dots-long-gray.svg';
import walk from '../assets/walk-gray.svg';
import cart from '../assets/cart-gray.svg';

function Walk(props) {
    let renderWalk = false;
    if (props.route === 'walk') {
        renderWalk = true;
    }
    let renderWalkToBluemont = false;
    if (props.route === 'walkToBluemont') {
        renderWalkToBluemont = true;
    }
    let renderWalkToMandela = false;
    if (props.route === 'walkToMandela') {
        renderWalkToMandela = true;
    }
    let renderMarinaShuttleNorth = false;
    if (props.route === 'marinaShuttleNorth') {
        renderMarinaShuttleNorth = true;
    }
    let renderMarinaShuttleSouth = false;
    if (props.route === 'marinaShuttleSouth') {
        renderMarinaShuttleSouth = true;
    }
    let renderYellowLineToForestville = false;
    if (props.route === 'yellowLineToForestville') {
        renderYellowLineToForestville = true;
    }
    let renderYellowLineToParkour = false;
    if (props.route === 'yellowLineToParkour') {
        renderYellowLineToParkour = true;
    }
    if (props.route !== 'yellowLineToForestville' && props.route !== 'yellowLineToParkour') {
        return(
            <div className={styles.container}>
                <div className={styles.dotsContainer}>
                    <img src={dots.src} className={styles.dots} alt='dotted line' />
                </div>
                {renderWalk ?
                    <div className={styles.walkContainer}>
                        <img src={walk.src} className={styles.walkIcon} alt='icon of person walking' />
                        <p className={`${styles.walkText} ${styles.walkTextMain}`}>Walk to...</p>
                    </div>
                    :
                    ''
                }
                {renderWalkToBluemont ?
                    <div className={styles.walkContainer}>
                        <img src={walk.src} className={styles.walkIcon} alt='icon of person walking' />
                        <p className={`${styles.walkText} ${styles.walkTextLong}`}>Walk 300 blocks west to Bluemont.</p>
                    </div>
                    :
                    ''
                }
                {renderWalkToMandela ?
                    <div className={styles.walkContainer}>
                        <img src={walk.src} className={styles.walkIcon} alt='icon of person walking' />
                        <p className={`${styles.walkText} ${styles.walkTextLong}`}>Walk 300 blocks east to New Kiwi City.</p>
                    </div>
                    :
                    ''
                }
                {renderMarinaShuttleNorth ?
                    <div className={styles.walkContainer}>
                        <img src={cart.src} className={styles.cartIcon} alt='shuttle cart' />
                        <p className={styles.cartText}>Walk, then take the MRT Marina shuttle cart to...</p>
                    </div>
                    :
                    ''
                }
                {renderMarinaShuttleSouth ?
                    <div className={styles.walkContainer}>
                        <img src={cart.src} className={styles.cartIcon} alt='shuttle cart' />
                        <p className={styles.cartText}>Take the MRT Marina shuttle cart, then walk to...</p>
                    </div>
                    :
                    ''
                }
            </div>
        )
    } else {
        return (
            <div className={styles.segment}>
                {renderYellowLineToForestville ?
                    <Segment mode='mrtYellowLine' type='null' route='null' num='null' routeName='MRT Yellow Line' destinationCity='Chuno' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Parkour' stop1stopName='null' stop1code='Y10' stop1meta1='null' stop1meta2='null' stopCount='1' stop2city='Forestville' stop2stopName='null' stop2code='Y11' stop2meta1='null' stop2meta2='null' />
                    :
                    ''
                }
                {renderYellowLineToParkour ?
                    <Segment mode='mrtYellowLine' type='null' route='null' num='null' routeName='MRT Yellow Line' destinationCity='Morningside' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Forestville' stop1stopName='null' stop1code='Y11' stop1meta1='null' stop1meta2='null' stopCount='1' stop2city='Parkour' stop2stopName='null' stop2code='Y10' stop2meta1='null' stop2meta2='null' />
                    :
                    ''
                }
            </div>
        )
    }
}

export default Walk;