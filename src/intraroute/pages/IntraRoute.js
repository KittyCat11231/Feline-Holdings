import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BahnRouteBox from '../components/BahnRouteBox';

import intraRouteLogo from '../logos/intraroute.svg'
import intraRouteLogoWhite from '../logos/intraroute-white.svg'
import intraRouteLogoShort from '../logos/intraroute-short.svg'
import intraRouteShortWhite from '../logos/intraroute-short-white.svg'

function IntraRoute() {
    return (
        <div id="page-container">
            <div id="container-wrap">
                <Header />
                <BahnRouteBox type="mainline" />
            </div>
            <Footer />
        </div>
    )
}

export default IntraRoute;