import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinDataPie = ({ children }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        const topCoins = response.data.data.slice(0, 10); // only the first 10 coins
        setCoinData(topCoins);
      } catch (error) {
        console.error('Error fetching top coins:', error);
      }
    };

    fetchTopCoins();

    const intervalId = setInterval(() => {
      fetchTopCoins();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {coinData && children(coinData)}
    </div>
  );
};

export default CoinDataPie;
