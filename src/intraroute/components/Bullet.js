import React from 'react';
import styles from './Bullet.module.css';

import bulletBahn1 from '../assets/intrabahn/bullets/1-white.png';
import bulletBahn1X from '../assets/intrabahn/bullets/1X-white.png';
import bulletBahn1A from '../assets/intrabahn/bullets/1a-white.png';
import bulletBahn1AX from '../assets/intrabahn/bullets/1aX-white.png';
import bulletBahn1B from '../assets/intrabahn/bullets/1b-white.png';
import bulletBahn1BX from '../assets/intrabahn/bullets/1bX-white.png';
import bulletBahn1C from '../assets/intrabahn/bullets/1c-white.png';
import bulletBahn1CX from '../assets/intrabahn/bullets/1cX-white.png';
import bulletBahn1D from '../assets/intrabahn/bullets/1d-white.png';
import bulletBahn1DX from '../assets/intrabahn/bullets/1dX-white.png';
import bulletBahn1E from '../assets/intrabahn/bullets/1e-white.png';
import bulletBahn1EX from '../assets/intrabahn/bullets/1eX-white.png';
import bulletBahn1F from '../assets/intrabahn/bullets/1f-white.png';
import bulletBahn1FX from '../assets/intrabahn/bullets/1fX-white.png';
import bulletBahn1G from '../assets/intrabahn/bullets/1g-white.png';
import bulletBahn1GX from '../assets/intrabahn/bullets/1gX-white.png';
import bulletBahn1H from '../assets/intrabahn/bullets/1h-white.png';
import bulletBahn1HX from '../assets/intrabahn/bullets/1hX-white.png';
import bulletBahn1I from '../assets/intrabahn/bullets/1i-white.png';
import bulletBahn1IX from '../assets/intrabahn/bullets/1iX-white.png';
import bulletBahn1J from '../assets/intrabahn/bullets/1j-white.png';
import bulletBahn1JX from '../assets/intrabahn/bullets/1jX-white.png';
import bulletBahnRF from '../assets/intrabahn/bullets/RF-white.png';
import bulletBahnWV from '../assets/intrabahn/bullets/WV-white.png';
import bulletBahnZQ from '../assets/intrabahn/bullets/ZQ-white.png';

import bulletRail1 from '../assets/intrarail/bullets/1.png';
import bulletRail2 from '../assets/intrarail/bullets/2.png';
import bulletRail3 from '../assets/intrarail/bullets/3.png';
import bulletRail4 from '../assets/intrarail/bullets/4.png';
import bulletRail6 from '../assets/intrarail/bullets/6-white.png';
import bulletRail7 from '../assets/intrarail/bullets/7.png';
import bulletRail11 from '../assets/intrarail/bullets/11.png';
import bulletRail12 from '../assets/intrarail/bullets/12.png';
import bulletRail13 from '../assets/intrarail/bullets/14.png';
import bulletRail14 from '../assets/intrarail/bullets/14.png';
import bulletRail15 from '../assets/intrarail/bullets/15-white.png';
import bulletRail16 from '../assets/intrarail/bullets/16.png';
import bulletRail17 from '../assets/intrarail/bullets/17.png';
import bulletRail18 from '../assets/intrarail/bullets/18.png';
import bulletRail20 from '../assets/intrarail/bullets/20.png';
import bulletRail21 from '../assets/intrarail/bullets/21.png';
import bulletRail22 from '../assets/intrarail/bullets/22.png';
import bulletRail23 from '../assets/intrarail/bullets/23.png';
import bulletRail24 from '../assets/intrarail/bullets/24.png';
import bulletRail26 from '../assets/intrarail/bullets/26.png';
import bulletRail29 from '../assets/intrarail/bullets/29.png';
import bulletRail32 from '../assets/intrarail/bullets/32-white.png';
import bulletRail33 from '../assets/intrarail/bullets/33.png';
import bulletRail34 from '../assets/intrarail/bullets/34.png';
import bulletRail36 from '../assets/intrarail/bullets/36.png';
import bulletRail37 from '../assets/intrarail/bullets/37.png';
import bulletRail38 from '../assets/intrarail/bullets/38-white.png';
import bulletRail39 from '../assets/intrarail/bullets/39.png';
import bulletRail40 from '../assets/intrarail/bullets/40-white.png';
import bulletRail42 from '../assets/intrarail/bullets/42.png';
import bulletRail43 from '../assets/intrarail/bullets/43-white.png';
import bulletRail46 from '../assets/intrarail/bullets/46.png';
import bulletRail48 from '../assets/intrarail/bullets/48-white.png';
import bulletRail49 from '../assets/intrarail/bullets/49-white.png';
import bulletRail50 from '../assets/intrarail/bullets/50.png';
import bulletRail51 from '../assets/intrarail/bullets/51-white.png';
import bulletRail52 from '../assets/intrarail/bullets/52-white.png';
import bulletRail54 from '../assets/intrarail/bullets/54.png';
import bulletRail55 from '../assets/intrarail/bullets/55.png';
import bulletRail56 from '../assets/intrarail/bullets/56.png';
import bulletRail57 from '../assets/intrarail/bullets/57.png';
import bulletRail58 from '../assets/intrarail/bullets/58.png';
import bulletRail59 from '../assets/intrarail/bullets/59.png';
import bulletRail63 from '../assets/intrarail/bullets/63-white.png';
import bulletRail64 from '../assets/intrarail/bullets/64-white.png';
import bulletRail66 from '../assets/intrarail/bullets/66.png';
import bulletRail66X from '../assets/intrarail/bullets/66x.png';
import bulletRail67 from '../assets/intrarail/bullets/67.png';
import bulletRail69 from '../assets/intrarail/bullets/69.png';
import bulletRail70 from '../assets/intrarail/bullets/70.png';
import bulletMCR1 from '../assets/intrarail/bullets/mcr-1-white.png';
import bulletMCR1A from '../assets/intrarail/bullets/mcr-1a-white.png';
import bulletMCR2 from '../assets/intrarail/bullets/mcr-2-white.png';
import bulletMCR3 from '../assets/intrarail/bullets/mcr-3-white.png';
import bulletMCR4 from '../assets/intrarail/bullets/mcr-4-white.png';
import bulletMCR5 from '../assets/intrarail/bullets/mcr-5-white.png';
import bulletMCR6 from '../assets/intrarail/bullets/mcr-6-white.png';
import bulletMCR7 from '../assets/intrarail/bullets/mcr-7-white.png';
import bulletMCR8 from '../assets/intrarail/bullets/mcr-8-white.png';
import bulletMCR9 from '../assets/intrarail/bullets/mcr-9-white.png';

function Bullet(props) {
    let useBullets = false;
    if (props.mode === 'bahn' || props.mode === 'rail') {
        useBullets = true;
}
    return (
        <img className={styles.bullet} src={bulletBahn1} alt='IntraBahn 1' />
    )
}

export default Bullet;