import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/footer.jsx';
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
      <Footer  link={<Link to='/'>Home</Link>} email={'Coinmarket@gmail.com'} nummber={'0618352836'}  />
    </div>
  );
};

export default App;
