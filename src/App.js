import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import IntraRoute from './intraroute/pages/IntraRoute';
import IntraRouteChangelog from './intraroute/pages/IntraRouteChangelog';
import Test from './pages/Test';
import Intra from './pages/Intra';
import MBS from './pages/MBS';
import Console from './pages/Console';

import Header from './components/Header';
import Footer from './components/Footer';
import Buffer from './components/Buffer';

function App() {
  return (
    <div id='page-container'>
      <Helmet>
        <title>Feline Holdings</title>
        <meta name="description" content="The official website of Feline Holdings." />
        <link rel="icon" href='https://svgshare.com/i/16GU' />
        <link rel="apple-touch-icon" href='https://svgshare.com/i/16GU' />

        <meta property="og:url" content="https://felineholdings.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Feline Holdings" />
        <meta property="og:description" content="The official website of Feline Holdings." />
        <meta property="og:image" content='https://svgshare.com/i/16FA.svg' />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="felineholdings.com" />
        <meta property="twitter:url" content="https://felineholdings.com/" />
        <meta name="twitter:title" content="Feline Holdings" />
        <meta name="twitter:description" content="The official website of Feline Holdings." />
        <meta name="twitter:image" content='https://svgshare.com/i/16FA.svg' />
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
            <Route path="/intra/intraroute" element={<IntraRoute />} />
            <Route path="/intra/IntraRoute" element={<IntraRoute />} />
            <Route path="/intraroute/changelog" element={<IntraRouteChangelog />} />
            <Route path="/IntraRoute/changelog" element={<IntraRouteChangelog />} />
            <Route path="/intra/intraroute/changelog" element={<IntraRouteChangelog />} />
            <Route path="/intra/IntraRoute/changelog" element={<IntraRouteChangelog />} />
            <Route path="/intra" element={<Intra />} />
            <Route path="/mbs" element={<MBS />} />
            <Route path="/MBS" element={<MBS />} />
            <Route path="/roy-disney/mbs" element={<MBS />} />
            <Route path="/roy-disney/MBS" element={<MBS />} />
            <Route path="/Roy-Disney/mbs" element={<MBS />} />
            <Route path="/Roy-Disney/MBS" element={<MBS />} />
            <Route path="/test" element={<Test />} />
            <Route path="/console" element={<Console />} />
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