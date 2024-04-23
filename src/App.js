import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import IntraRoute from './intraroute/pages/IntraRoute'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/intraroute" element={<IntraRoute />} />
        <Route path="/IntraRoute" element={<IntraRoute />} />
        <Route path="*" element ={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
