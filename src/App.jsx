import React, { useState, useEffect } from 'react';
import CoinDataFetcher from './api/coincap.jsx';
import {Router, Route, Link } from 'react-router-dom';
import PieDiagram from './Charts/Piechart.jsx';
import Navbar from './navbar/Navbar';
import Footer from './footer/footer.jsx';
import BackChart from './backcomponent/Backchart.jsx';
import LineChart from './Charts/Linechart.jsx';
import './App.css'

const App = () => {
  return (
 
    <div>
     <Navbar header={"Coinmarket"} content={"Info"} msg={"this is a site where you can track the coin market"}></Navbar>
     <div className='body'>
      
      <div className='row'>
      <CoinDataFetcher>
            {(coinData) => (
              <BackChart style={"piechart-box"} header={'Crypto Prices'} content={
                <PieDiagram
                  coinData={coinData}
                />
              } />
            )}
          </CoinDataFetcher>
 <BackChart style={"box1"} header={"lineChart"} content={<LineChart labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange',]}
 datasets={[
  {
    label: 'BTC',
    data: [12, 19, 3, 5, 2, 3, 3],
   
    backgroundColor: "#49111C",
    borderColor: '#49111C',
    tension: 0.5
  }
]}></LineChart>}></BackChart>
</div>
<div className='row'>
<BackChart style={"box1"} header={"lineChart"} content={<LineChart labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange',]}
 datasets={[
  {
    label: 'BTC',
    data: [12, 19, 3, 5, 2, 3, 3], // Sample data points
   
    backgroundColor: "#49111C",
    borderColor: '#49111C',
    tension: 0.5
  }
]}></LineChart>}></BackChart>
<BackChart style={"box1"} header={"lineChart"} content={<LineChart labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange',]}
 datasets={[
  {
    label: 'BTC',
    data: [12, 19, 3, 5, 2, 3, 3], // Sample data points
   
    backgroundColor: "#49111C",
    borderColor: '#49111C',
    tension: 0.5
  }
]}></LineChart>}></BackChart>
</div>
     

</div>  
<Footer email={"Coinmarket@gmail.com"} nummber={"0618352836"} link={<Link to="/App.jsx">Info</Link>}></Footer>
    </div>
  
  );
};
export default App
