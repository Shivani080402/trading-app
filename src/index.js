import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Hero from './landingPage/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route  path='/*' element={<Hero />}/>
      </Routes>
    </BrowserRouter>
  
);


