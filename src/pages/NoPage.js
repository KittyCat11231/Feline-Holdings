import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NoPage() {
    return (
        <div id="page-container">
            <div id="container-wrap">
                <Header />
                <h1>Page not found!</h1>
                <h2>Double check that you entered the URL correctly.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default NoPage;