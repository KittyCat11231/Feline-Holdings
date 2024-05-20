import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import IntraRoute from './intraroute/pages/IntraRoute';
import Test from './pages/Test';

import Header from './components/Header';
import Footer from './components/Footer';
import Buffer from './components/Buffer';

import './App.css';

function App() {
  return (
    <div id='page-container'>
      <Helmet>
        <title>Feline Holdings</title>
        <meta name="description" content="The official website of Feline Holdings." />
        <link rel="icon" href={process.env.VERCEL_URL + "feline-holdings-small.svg"} />
        <link rel="apple-touch-icon" href={process.env.VERCEL_URL + "feline-holdings-small.svg"} />

        <meta property="og:url" content="https://felineholdings.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Feline Holdings" />
        <meta property="og:description" content="The official website of Feline Holdings." />
        <meta property="og:image" content={process.env.VERCEL_URL + "feline-holdings-link-preview.svg"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="felineholdings.com" />
        <meta property="twitter:url" content="https://felineholdings.com/" />
        <meta name="twitter:title" content="Feline Holdings" />
        <meta name="twitter:description" content="The official website of Feline Holdings." />
        <meta name="twitter:image" content={process.env.VERCEL_URL + "feline-holdings-link-preview.svg"} />
      </Helmet>
      <div id='container-wrap'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/intraroute" element={<IntraRoute />} />
            <Route path="/IntraRoute" element={<IntraRoute />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element ={<NoPage />} />
          </Routes>
        </BrowserRouter>
        <Buffer />
      </div>
      <Footer />
    </div>
  );
}

export default App;