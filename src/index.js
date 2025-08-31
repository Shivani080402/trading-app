import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import SideNavbar from './landingPage/SideNavbar';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
// import TradingPage from './landingPage/TradingPage';
// import HomePage from './landingPage/HomePage';
import Hero from './landingPage/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route  path='/*' element={<Hero />}/>
      </Routes>
    </BrowserRouter>
  
);


