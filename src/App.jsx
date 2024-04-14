import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';

import CoinDetailPage from './page/Coinpage.jsx';
import Homepage from './page/Homepage.jsx';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar
        header={'Coinmarket'}
        content={'Info'}
        msg={'this is a site where you can track the coin market'}
      />
    
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      <Route path="/coin/:id" element={<CoinDetailPage/>} />
      </Routes>
    </div>
  );
};

export default App;
