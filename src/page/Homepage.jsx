import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer.jsx';
import TopCoinsList from '../api/Coinlist.jsx';
import CoinDataFetcher from '../api/coincap.jsx';
import PieDiagram from '../Charts/Piechart.jsx';
import BackChart from '../backcomponent/Backchart.jsx';
import LineChart from '../Charts/Linechart.jsx';
import { Link } from 'react-router-dom';
import '../App.css';

const Homepage =() =>{
return (
 <>
<div className='body'>
<div className='row'>
  <CoinDataFetcher>
    {(coinData) => (
      <BackChart
        style={'piechart-box'}
        header={'Crypto Prices'}
        content={<PieDiagram coinData={coinData} />}
      />
    )}
  </CoinDataFetcher>
  <BackChart
    style={'box1'}
    header={'lineChart'}
    content={
      <LineChart
        labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
        datasets={[
          {
            label: 'BTC',
            data: [12, 19, 3, 5, 2, 3, 3],
            backgroundColor: '#49111C',
            borderColor: '#49111C',
            tension: 0.5,
          },
        ]}
      />
    }
  />
</div>
<div className='row'>
  <BackChart
    style={'box1'}
    header={'lineChart'}
    content={
      <LineChart
        labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
        datasets={[
          {
            label: 'BTC',
            data: [12, 19, 3, 5, 2, 3, 3],
            backgroundColor: '#49111C',
            borderColor: '#49111C',
            tension: 0.5,
          },
        ]}
      />
    }
  />
  <BackChart
    style={'coinlist-box'}
    header={'Top 60 coins '}
    content={<TopCoinsList />}
  />
</div>
</div>
<Footer email={'Coinmarket@gmail.com'} nummber={'0618352836'} link={<Link to='/'>Info</Link>} />
</>
)
}
export default Homepage;