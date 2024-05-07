import React from "react";
import styles from './Path.module.css';

import Segment from './Segment';
import Stop from './Stop';
import Walk from './Walk';

import finalPath from '../scripts/pathfinding';

function Path(props) {
    console.log(finalPath);
    return (
        <div>
            <div className={`${styles.stop} ${styles.firstStop}`}>
                <Stop mode='air' type='origin' city='MRT International Airport' stopName='null' code='MRI' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='air' type='skywest' route='skywest1toMRI' num='1' routeName='Flight 1' destinationCity='null' destinationStopName='null' codeshare1='IntraAir Flight 1301' codeshare2='null' stop1city='MRT International Airport' stop1stopName='null' stop1code='MRI' stop1meta1='Gate A6' stop1meta2='null' stopCount='1' stop2city='Whitechapel' stop2stopName='Sky Harbor' stop2code='WHT' stop2meta1='Gate B8' stop2meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='air' type='waypointHopper' route='wp101toMAX' num='101' routeName='Flight 101' destinationCity='null' destinationStopName='null' codeshare1='IntraAir Flight 1101' codeshare2='null' stop1city='Whitechapel' stop1stopName='Sky Harbor' stop1code='WHT' stop1meta1='Gate B7' stop1meta2='null' stopCount='1' stop2city='Murrville-Arcadia' stop2stopName='International Airport' stop2code='MAX' stop2meta1='Terminal 2' stop2meta2='Gate A1' />
            </div>
            <Walk route='walk' />
            <div className={`${styles.stop} ${styles.transferStop}`}>
                <Stop mode='rail' type='origin' city='Murrville-Arcadia' stopName='International Airport' code='MAX' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='rail' type='red' route='rail51west' num='51' routeName='Victorian Regional' destinationCity='Foresne' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Murrville-Arcadia' stop1stopName='International Airport' stop1code='MAX' stop1meta1='Track 5' stop1meta2='null' stopCount='7' stop2city='Veldberg' stop2stopName='SE7' stop2code='VLD' stop2meta1='null' stop2meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='rail' type='mcr' route='mcr4north' num='4' routeName='Southeast Longitudinal' destinationCity='Alexandriasburg' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Veldberg' stop1stopName='SE7' stop1code='VLD' stop1meta1='null' stop1meta2='null' stopCount='2' stop2city='New Stone City' stop2stopName='Intermodal Hub' stop2code='NSC' stop2meta1='null' stop2meta2='null' />
            </div>
            <Walk route='walk' />
            <div className={`${styles.stop} ${styles.transferStop}`}>
                <Stop mode='sail' type='origin' city='New Stone City' stopName='Intermodal Hub' code='NSC' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='sail' type='mainline' route='sail4north' num='4' routeName='Meridian' destinationCity='Zaquar' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='New Stone City' stop1stopName='Intermodal Hub' stop1code='NSC' stop1meta1='null' stop1meta2='null' stopCount='2' stop2city='Zaquar' stop2stopName='Winfrey Waterport' stop2code='ZQW' stop2meta1='Gate 5' stop2meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='sail' type='express' route='sail2Xnorth' num='2X' routeName='Intra Express' destinationCity='MRT Marina' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Zaquar' stop1stopName='Winfrey Waterport' stop1code='ZQW' stop1meta1='Gate 4' stop1meta2='null' stopCount='1' stop2city='MRT Marina' stop2stopName='null' stop2code='MMN' stop2meta1='null' stop2meta2='null' />
            </div>
            <Walk route='marinaShuttleSouth' />
            <div className={`${styles.stop} ${styles.transferStop}`}>
                <Stop mode='rail' type='origin' city='MRT Marina' stopName='null' code='MMN' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='rail' type='black' route='rail39south' num='39' routeName='Lakeshore Line' destinationCity='Achowalogen Takachsin-Covina' destinationStopName='International Airport' codeshare1='null' codeshare2='null' stop1city='MRT Marina' stop1stopName='null' stop1code='MMN' stop1meta1='Track 2' stop1meta2='null' stopCount='2' stop2city='Achowalogen Takachsin-Covina' stop2stopName='International Airport' stop2code='ATC' stop2meta1='null' stop2meta2='null' />
            </div>
            <Walk route='walk' />
            <div className={`${styles.stop} ${styles.transferStop}`}>
                <Stop mode='air' type='origin' city='Achowalogen Takachsin-Covina' stopName='International Airport' code='ATC' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='air' type='mainline' route='air408toWOI' num='408' routeName='Flight 408' destinationCity='null' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Achowalogen Takachsin-Covina' stop1stopName='International Airport' stop1code='ATC' stop1meta1='IntraAir Annex Terminal' stop1meta2='null' stopCount='1' stop2city='Western Ocean International Airport' stop2stopName='null' stop2code='WOI' stop2meta1='Gate A12' stop2meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='air' type='mainline' route='air418toAIR' num='418' routeName='Flight 418' destinationCity='null' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Western Ocean International Airport' stop1stopName='null' stop1code='WOI' stop1meta1='Gate B10' stop1meta2='null' stopCount='1' stop2city='Alturas' stop2stopName='InterRegional Airport' stop2code='AIR' stop2meta1='null' stop2meta2='null' />
            </div>
            <Walk route='walk' />
            <div className={`${styles.stop} ${styles.transferStop}`}>
                <Stop mode='omega' type='origin' city='Alturas' stopName='null' code='ALT' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='omega' type='null' route='omega802north' num='802' routeName='Route 802' destinationCity='Jones Beach' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Alturas' stop1stopName='null' stop1code='ALT' stop1meta1='null' stop1meta2='null' stopCount='1' stop2city='Fairfax' stop2stopName='Northern Cross' stop2code='FNC' stop2meta1='Gate S13' stop2meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='omega' type='null' route='omega808west' num='808' routeName='Route 808' destinationCity='Welcomeville' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Fairfax' stop1stopName='Northern Cross' stop1code='FNC' stop1meta1='Gate S22' stop1meta2='null' stopCount='2' stop2city='Parkour City' stop2stopName='null' stop2code='PAK' stop2meta1='null' stop2meta2='null' />
            </div>
            <Walk route='yellowLineToForestville' />
            <div className={`${styles.stop} ${styles.transferStop}`}>
                <Stop mode='omega' type='origin' city='Forestville' stopName='null' code='FST' meta1='null' meta2='null' />
            </div>
            <div className={styles.segment}>
                <Segment mode='omega' type='null' route='omega816west' num='816' routeName='Route 816' destinationCity='Edenmorr' destinationStopName='null' codeshare1='null' codeshare2='null' stop1city='Forestville' stop1stopName='null' stop1code='FST' stop1meta1='null' stop1meta2='null' stopCount='1' stop2city='Edenmorr' stop2stopName='Bus Station' stop2code='EDM' stop2meta1='Platform 2' stop2meta2='null' />
            </div>
        </div>
    )
}

export default Path;