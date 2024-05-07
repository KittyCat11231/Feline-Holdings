import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import IntraRoute from './intraroute/pages/IntraRoute'

import Header from './components/Header';
import Footer from './components/Footer';
import Buffer from './components/Buffer';

import './App.css';

function App() {
  return (
    <div id='page-container'>
      <div id='container-wrap'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/intraroute" element={<IntraRoute />} />
            <Route path="/IntraRoute" element={<IntraRoute />} />
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
