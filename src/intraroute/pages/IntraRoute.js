import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Segment from '../components/Segment';

function IntraRoute() {
    return (
        <div id="page-container">
            <div id="container-wrap">
                <Header />
                <Segment />
            </div>
            <Footer />
        </div>
    )
}

export default IntraRoute;