import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Router, Route, Link } from 'react-router-dom';
import PieDiagram from './Charts/Piechart.jsx';
import Navbar from './navbar/Navbar';
import Footer from './footer/footer.jsx';
import BackChart from './backcomponent/Backchart.jsx';
import LineChart from './Charts/Linechart.jsx';
import './App.css'

const App = () => {
  const [coinData, setCoinData] = useState(null);

    useEffect(() => {
      const symbols = ['bitcoin', 'ethereum', 'litecoin']; // Add more symbols as needed
      const fetchData = async () => {
          try {
              const requests = symbols.map(symbol =>
                  axios.get(`https://api.coincap.io/v2/assets/${symbol}`)
              );
              const responses = await Promise.all(requests);
              const coinData = responses.map(response => response.data.data);
              setCoinData(coinData);
          } catch (error) {
              console.error('Error fetching coin data:', error);
          }
      };

        fetchData();
    }, []);

  return (
 
    <div>
     <Navbar header={"Coinmarket"} content={"Info"} msg={"this is a site where you can track the coin market"}></Navbar>
     <div className='body'>
      
      <div className='row'>
<BackChart style={"piechart-box"} header={"lineChart"} content={<PieDiagram labels={['Supply', 'Max Supply', ]} 
datasets={ [
  {
    label: 'BTC',
    data: [12, 19 ], // Sample data points
    backgroundColor: ['aqua', 'green'],
   
  },
]} ></PieDiagram>}></BackChart>
 <BackChart style={"box1"} header={"lineChart"} content={<LineChart labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange',]}
 datasets={[
  {
    label: 'BTC',
    data: [12, 19, 3, 5, 2, 3, 3],
    fill: true,
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
    fill: true,
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
    fill: true,
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
