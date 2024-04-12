import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinDataFetcher = ({ children }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        const topCoins = response.data.data.slice(0, 10); // Alleen de eerste 10 munten
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

export default CoinDataFetcher;
