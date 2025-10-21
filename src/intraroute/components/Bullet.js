import React from 'react';
import styles from './Bullet.module.css';

import circle from '../assets/circle-white.svg';

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
import bulletRail13 from '../assets/intrarail/bullets/13.png';
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

import bulletRailNew1 from '../assets/intrarail/bullets new/1.png';
import bulletRailNew2 from '../assets/intrarail/bullets new/2.png';
import bulletRailNew3 from '../assets/intrarail/bullets new/3.png';
import bulletRailNew4 from '../assets/intrarail/bullets new/4.png';
import bulletRailNew5 from '../assets/intrarail/bullets new/5.png';
import bulletRailNew6 from '../assets/intrarail/bullets new/6.png';
import bulletRailNew7 from '../assets/intrarail/bullets new/7.png';
import bulletRailNew8 from '../assets/intrarail/bullets new/8.png';
import bulletRailNew9 from '../assets/intrarail/bullets new/9.png';
import bulletRailNew1X from '../assets/intrarail/bullets new/1X.png';
import bulletRailNew2X from '../assets/intrarail/bullets new/2X.png';
import bulletRailNew3X from '../assets/intrarail/bullets new/3X.png';
import bulletRailNew4X from '../assets/intrarail/bullets new/4X.png';
import bulletRailNew5X from '../assets/intrarail/bullets new/5X.png';
import bulletRailNew7X from '../assets/intrarail/bullets new/7X.png';
import bulletRailNew9X from '../assets/intrarail/bullets new/9X.png';
import bulletRailNew101 from '../assets/intrarail/bullets new/101.png';
import bulletRailNew102 from '../assets/intrarail/bullets new/102.png';
import bulletRailNew103 from '../assets/intrarail/bullets new/103.png';
import bulletRailNew104 from '../assets/intrarail/bullets new/104.png';
import bulletRailNew105 from '../assets/intrarail/bullets new/105.png';
import bulletRailNew106 from '../assets/intrarail/bullets new/106.png';
import bulletRailNew107 from '../assets/intrarail/bullets new/107.png';
import bulletRailNew107X from '../assets/intrarail/bullets new/107X.png';
import bulletRailNew201 from '../assets/intrarail/bullets new/201.png';
import bulletRailNew202 from '../assets/intrarail/bullets new/202.png';
import bulletRailNew203 from '../assets/intrarail/bullets new/203.png';
import bulletRailNew204 from '../assets/intrarail/bullets new/204.png';
import bulletRailNew205 from '../assets/intrarail/bullets new/205.png';
import bulletRailNew206 from '../assets/intrarail/bullets new/206.png';
import bulletRailNew207 from '../assets/intrarail/bullets new/207.png';
import bulletRailNew208 from '../assets/intrarail/bullets new/208.png';
import bulletRailNew209 from '../assets/intrarail/bullets new/209.png';
import bulletRailNew210W from '../assets/intrarail/bullets new/210W.png';
import bulletRailNew210E from '../assets/intrarail/bullets new/210E.png';
import bulletRailNew211 from '../assets/intrarail/bullets new/211.png';
import bulletRailNew212 from '../assets/intrarail/bullets new/212.png';
import bulletRailNew213 from '../assets/intrarail/bullets new/213.png';
import bulletRailNew214 from '../assets/intrarail/bullets new/214.png';
import bulletRailNew215 from '../assets/intrarail/bullets new/215.png';
import bulletRailNew216 from '../assets/intrarail/bullets new/216.png';
import bulletRailNew301 from '../assets/intrarail/bullets new/301.png';
import bulletRailNew302 from '../assets/intrarail/bullets new/302.png';
import bulletRailNew303 from '../assets/intrarail/bullets new/303.png';
import bulletRailNew304 from '../assets/intrarail/bullets new/304.png';
import bulletRailNew305 from '../assets/intrarail/bullets new/305.png';
import bulletRailNew306 from '../assets/intrarail/bullets new/306.png';
import bulletRailNew307 from '../assets/intrarail/bullets new/307.png';
import bulletRailNew308 from '../assets/intrarail/bullets new/308.png';
import bulletRailNew309 from '../assets/intrarail/bullets new/309.png';
import bulletRailNew310 from '../assets/intrarail/bullets new/310.png';
import bulletRailNew401 from '../assets/intrarail/bullets new/401.png';
import bulletRailNew501 from '../assets/intrarail/bullets new/501.png';
import bulletRailNew501A from '../assets/intrarail/bullets new/501A.png';
import bulletRailNew502 from '../assets/intrarail/bullets new/502.png';
import bulletRailNew503 from '../assets/intrarail/bullets new/503.png';
import bulletRailNew504 from '../assets/intrarail/bullets new/504.png';
import bulletRailNew505 from '../assets/intrarail/bullets new/505.png';
import bulletRailNew506 from '../assets/intrarail/bullets new/506.png';
import bulletRailNew507 from '../assets/intrarail/bullets new/507.png';
import bulletRailNew508 from '../assets/intrarail/bullets new/508.png';
import bulletRailNew509 from '../assets/intrarail/bullets new/509.png';

import railData from '../data/ui/routes/rail.json';

function Bullet(props) {

    let bulletMap = new Map();

    bulletMap.set('bulletBahn1', bulletBahn1);
    bulletMap.set('bulletBahn1X', bulletBahn1X);
    bulletMap.set('bulletBahn1A', bulletBahn1A);
    bulletMap.set('bulletBahn1AX', bulletBahn1AX);
    bulletMap.set('bulletBahn1B', bulletBahn1B);
    bulletMap.set('bulletBahn1BX', bulletBahn1BX);
    bulletMap.set('bulletBahn1C', bulletBahn1C);
    bulletMap.set('bulletBahn1CX', bulletBahn1CX);
    bulletMap.set('bulletBahn1D', bulletBahn1D);
    bulletMap.set('bulletBahn1DX', bulletBahn1DX);
    bulletMap.set('bulletBahn1E', bulletBahn1E);
    bulletMap.set('bulletBahn1EX', bulletBahn1EX);
    bulletMap.set('bulletBahn1F', bulletBahn1F);
    bulletMap.set('bulletBahn1FX', bulletBahn1FX);
    bulletMap.set('bulletBahn1G', bulletBahn1G);
    bulletMap.set('bulletBahn1GX', bulletBahn1GX);
    bulletMap.set('bulletBahn1H', bulletBahn1H);
    bulletMap.set('bulletBahn1HX', bulletBahn1HX);
    bulletMap.set('bulletBahn1I', bulletBahn1I);
    bulletMap.set('bulletBahn1IX', bulletBahn1IX);
    bulletMap.set('bulletBahn1J', bulletBahn1J);
    bulletMap.set('bulletBahn1JX', bulletBahn1JX);
    bulletMap.set('bulletBahnRF', bulletBahnRF);
    bulletMap.set('bulletBahnWV', bulletBahnWV);
    bulletMap.set('bulletBahnZQ', bulletBahnZQ);
    
    bulletMap.set('bulletRail1', bulletRail1);
    bulletMap.set('bulletRail2', bulletRail2);
    bulletMap.set('bulletRail3', bulletRail3);
    bulletMap.set('bulletRail4', bulletRail4);
    bulletMap.set('bulletRail6', bulletRail6);
    bulletMap.set('bulletRail7', bulletRail7);
    bulletMap.set('bulletRail11', bulletRail11);
    bulletMap.set('bulletRail12', bulletRail12);
    bulletMap.set('bulletRail13', bulletRail13);
    bulletMap.set('bulletRail14', bulletRail14);
    bulletMap.set('bulletRail15', bulletRail15);
    bulletMap.set('bulletRail16', bulletRail16);
    bulletMap.set('bulletRail17', bulletRail17);
    bulletMap.set('bulletRail18', bulletRail18);
    bulletMap.set('bulletRail20', bulletRail20);
    bulletMap.set('bulletRail21', bulletRail21);
    bulletMap.set('bulletRail22', bulletRail22);
    bulletMap.set('bulletRail23', bulletRail23);
    bulletMap.set('bulletRail24', bulletRail24);
    bulletMap.set('bulletRail26', bulletRail26);
    bulletMap.set('bulletRail29', bulletRail29);
    bulletMap.set('bulletRail32', bulletRail32);
    bulletMap.set('bulletRail33', bulletRail33);
    bulletMap.set('bulletRail34', bulletRail34);
    bulletMap.set('bulletRail36', bulletRail36);
    bulletMap.set('bulletRail37', bulletRail37);
    bulletMap.set('bulletRail38', bulletRail38);
    bulletMap.set('bulletRail39', bulletRail39);
    bulletMap.set('bulletRail40', bulletRail40);
    bulletMap.set('bulletRail42', bulletRail42);
    bulletMap.set('bulletRail43', bulletRail43);
    bulletMap.set('bulletRail46', bulletRail46);
    bulletMap.set('bulletRail48', bulletRail48);
    bulletMap.set('bulletRail49', bulletRail49);
    bulletMap.set('bulletRail50', bulletRail50);
    bulletMap.set('bulletRail51', bulletRail51);
    bulletMap.set('bulletRail52', bulletRail52);
    bulletMap.set('bulletRail54', bulletRail54);
    bulletMap.set('bulletRail55', bulletRail55);
    bulletMap.set('bulletRail56', bulletRail56);
    bulletMap.set('bulletRail57', bulletRail57);
    bulletMap.set('bulletRail58', bulletRail58);
    bulletMap.set('bulletRail59', bulletRail59);
    bulletMap.set('bulletRail63', bulletRail63);
    bulletMap.set('bulletRail64', bulletRail64);
    bulletMap.set('bulletRail66', bulletRail66);
    bulletMap.set('bulletRail66X', bulletRail66X);
    bulletMap.set('bulletRail67', bulletRail67);
    bulletMap.set('bulletRail69', bulletRail69);
    bulletMap.set('bulletRail70', bulletRail70);
    bulletMap.set('bulletMCR1', bulletMCR1);
    bulletMap.set('bulletMCR1A', bulletMCR1A);
    bulletMap.set('bulletMCR2', bulletMCR2);
    bulletMap.set('bulletMCR3', bulletMCR3);
    bulletMap.set('bulletMCR4', bulletMCR4);
    bulletMap.set('bulletMCR5', bulletMCR5);
    bulletMap.set('bulletMCR6', bulletMCR6);
    bulletMap.set('bulletMCR7', bulletMCR7);
    bulletMap.set('bulletMCR8', bulletMCR8);
    bulletMap.set('bulletMCR9', bulletMCR9);

    const railNewTypes = ['interCityNew', 'expressNew', 'regionalNew', 'urbanNew', 'specialNew', 'mcrNew'];

    let useRailNew = false;

    if (props.mode === 'rail' && railNewTypes.includes(props.type)) {
        useRailNew = true;
    }

    bulletMap.set('bulletRailNew1', bulletRailNew1);
    bulletMap.set('bulletRailNew2', bulletRailNew2);
    bulletMap.set('bulletRailNew3', bulletRailNew3);
    bulletMap.set('bulletRailNew4', bulletRailNew4);
    bulletMap.set('bulletRailNew5', bulletRailNew5);
    bulletMap.set('bulletRailNew6', bulletRailNew6);
    bulletMap.set('bulletRailNew7', bulletRailNew7);
    bulletMap.set('bulletRailNew8', bulletRailNew8);
    bulletMap.set('bulletRailNew9', bulletRailNew9);
    bulletMap.set('bulletRailNew1X', bulletRailNew1X);
    bulletMap.set('bulletRailNew2X', bulletRailNew2X);
    bulletMap.set('bulletRailNew3X', bulletRailNew3X);
    bulletMap.set('bulletRailNew4X', bulletRailNew4X);
    bulletMap.set('bulletRailNew5X', bulletRailNew5X);
    bulletMap.set('bulletRailNew7X', bulletRailNew7X);
    bulletMap.set('bulletRailNew9X', bulletRailNew9X);
    bulletMap.set('bulletRailNew101', bulletRailNew101);
    bulletMap.set('bulletRailNew102', bulletRailNew102);
    bulletMap.set('bulletRailNew103', bulletRailNew103);
    bulletMap.set('bulletRailNew104', bulletRailNew104);
    bulletMap.set('bulletRailNew105', bulletRailNew105);
    bulletMap.set('bulletRailNew106', bulletRailNew106);
    bulletMap.set('bulletRailNew107', bulletRailNew107);
    bulletMap.set('bulletRailNew107X', bulletRailNew107X);
    bulletMap.set('bulletRailNew201', bulletRailNew201);
    bulletMap.set('bulletRailNew202', bulletRailNew202);
    bulletMap.set('bulletRailNew203', bulletRailNew203);
    bulletMap.set('bulletRailNew204', bulletRailNew204);
    bulletMap.set('bulletRailNew205', bulletRailNew205);
    bulletMap.set('bulletRailNew206', bulletRailNew206);
    bulletMap.set('bulletRailNew207', bulletRailNew207);
    bulletMap.set('bulletRailNew208', bulletRailNew208);
    bulletMap.set('bulletRailNew209', bulletRailNew209);
    bulletMap.set('bulletRailNew210W', bulletRailNew210W);
    bulletMap.set('bulletRailNew210E', bulletRailNew210E);
    bulletMap.set('bulletRailNew211', bulletRailNew211);
    bulletMap.set('bulletRailNew212', bulletRailNew212);
    bulletMap.set('bulletRailNew213', bulletRailNew213);
    bulletMap.set('bulletRailNew214', bulletRailNew214);
    bulletMap.set('bulletRailNew215', bulletRailNew215);
    bulletMap.set('bulletRailNew216', bulletRailNew216);
    bulletMap.set('bulletRailNew301', bulletRailNew301);
    bulletMap.set('bulletRailNew302', bulletRailNew302);
    bulletMap.set('bulletRailNew303', bulletRailNew303);
    bulletMap.set('bulletRailNew304', bulletRailNew304);
    bulletMap.set('bulletRailNew305', bulletRailNew305);
    bulletMap.set('bulletRailNew306', bulletRailNew306);
    bulletMap.set('bulletRailNew307', bulletRailNew307);
    bulletMap.set('bulletRailNew308', bulletRailNew308);
    bulletMap.set('bulletRailNew309', bulletRailNew309);
    bulletMap.set('bulletRailNew310', bulletRailNew310);
    bulletMap.set('bulletRailNew401', bulletRailNew401);
    bulletMap.set('bulletRailNew501', bulletRailNew501);
    bulletMap.set('bulletRailNew501A', bulletRailNew501A);
    bulletMap.set('bulletRailNew502', bulletRailNew502);
    bulletMap.set('bulletRailNew503', bulletRailNew503);
    bulletMap.set('bulletRailNew504', bulletRailNew504);
    bulletMap.set('bulletRailNew505', bulletRailNew505);
    bulletMap.set('bulletRailNew506', bulletRailNew506);
    bulletMap.set('bulletRailNew507', bulletRailNew507);
    bulletMap.set('bulletRailNew508', bulletRailNew508);
    bulletMap.set('bulletRailNew509', bulletRailNew509);

    let routes;
    if (props.mode === 'rail') {
        routes = railData;
    }

    let bullet;
    let altText;
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].id === props.route.id) {
            bullet = bulletMap.get(routes[i].bullet);
            altText = routes[i].altText;
        }
    }

    if (!useRailNew) {
        return (
            <img className={styles.bullet} src={bullet} alt={altText} />
        )
    } else {
        return (
            <div className={styles.container}>
                <img className={styles.circle} src={circle} alt='circle' />
                <img className={styles.railNewBullet} src={bullet} alt={altText} />
            </div>
        )
    }

}

export default Bullet;