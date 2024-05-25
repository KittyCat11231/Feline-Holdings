import React from 'react';
import styles from './Route.module.css';
import colorStyles from './Colors.module.css';
import Mode from './Mode';
import Bullet from './Bullet';
import Circle from './Circle';
import Num from './Num';
import CircleWhite from './CircleWhite';

import colors from '../scripts/colors';

function Route(props) {
    let colorObj = {
        containerColor: undefined,
        mainColor: undefined,
        filterColor: undefined,
        textColor: colorStyles.whiteColor,
    }

    colors(colorStyles, colorObj, props.mode, props.type);
    
    let renderMode = true;
    if (props.mode === 'mrtYellowLine') {
        renderMode = false;
    }

    let useBullet = false;
    let useNum = false;
    let useCircle = false;

    if (['bahn', 'rail'].includes(props.mode)) {
        useBullet = true;
    }
    if (['sail', 'railScar', 'railLumeva'].includes(props.mode)) {
        useNum = true;
    }
    if (useBullet === false && useNum === false) {
        useCircle = true;
    }

    return (
        <div>
            {renderMode ?
                <div className={styles.modeBox}>
                    <Mode mode={props.mode} type={props.type} />
                </div>
                :
                <div className={`${styles.modeBox} ${colorStyles.hidden}`}>
                    <Mode mode={props.mode} type={props.type} />
                </div>
            }
            <div className={styles.container}>
                <div className={`${styles.routeContainer} ${colorObj.containerColor}`}>
                    {useBullet ? <Bullet mode={props.mode} type={props.type} route={props.route} /> : ''}
                    {useNum ? <Num mode={props.mode} type={props.type} num={props.num} /> : ''}
                    {useCircle ? <Circle mode={props.mode} type={props.type} /> : ''}
                    <p className={`${styles.routeName} ${colorObj.textColor}`}>{props.routeName}</p>
                </div>
            </div>
        </div>
    )
}

export default Route;