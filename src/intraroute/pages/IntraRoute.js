import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Buffer from '../../components/Buffer';

import Path from '../components/Path';

function IntraRoute() {
    return (
        <div id="page-container">
            <div id="container-wrap">
                <Header />
                <Path />
                <Buffer />
            </div>
            <Footer />
        </div>
    )
}

export default IntraRoute;