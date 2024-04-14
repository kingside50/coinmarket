import React from 'react';
import TopCoinsList from '../api/Coinlist.jsx';
import CoinDataPie from '../api/Coinpie.jsx';
import CoinDataLine from '../api/Coinline.jsx';
import PieDiagram from '../Charts/Piechart.jsx';
import BackChart from '../backcomponent/Backchart.jsx';
import LineChart from '../Charts/Linechart.jsx';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <div className='body'>
        <div className='row'>
          <CoinDataPie>
            {(coinData) => (
              <BackChart
                style={'piechart-box'}
                header={'Crypto Prices'}
                content={<PieDiagram coinData={coinData} />}
              />
            )}
          </CoinDataPie>
          <BackChart
            style={'coinlist-box'}
            header={'Top 60 coins '}
            content={<TopCoinsList />}
          />
         
        </div>
        
        <CoinDataLine>
            {(coinData) => (
              <BackChart
                style={'row'}
                header={'Bitcoin Price History'}
                content={<LineChart coinData={coinData} />}
              />
            )}
          </CoinDataLine>
         
        
      </div>
    </>
  );
};

export default Homepage;
