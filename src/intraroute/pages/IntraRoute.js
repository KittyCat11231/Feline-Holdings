import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SegmentBox from '../components/SegmentBox';

import intraRouteLogo from '../logos/intraroute.svg'
import intraRouteLogoWhite from '../logos/intraroute-white.svg'
import intraRouteLogoShort from '../logos/intraroute-short.svg'
import intraRouteShortWhite from '../logos/intraroute-short-white.svg'

function IntraRoute() {
    return (
        <div id="page-container">
            <div id="container-wrap">
                <Header />
                <SegmentBox />
            </div>
            <Footer />
        </div>
    )
}

export default IntraRoute;