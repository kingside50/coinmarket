import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinDataLine = ({ children }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1');
        const bitcoinData = response.data.data;
        // Filter data for the last 30 days
        const currentDate = new Date();
        const thirtyDaysAgo = new Date(currentDate);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const filteredData = bitcoinData.filter(item => {
          const itemDate = new Date(item.date);
          return itemDate >= thirtyDaysAgo && itemDate <= currentDate;
        });
        // Format date to remove bulshit at the end
        const formattedData = filteredData.map(item => {
          const itemDate = new Date(item.date);
          const formattedDate = itemDate.toISOString().split('T')[0];
          return { ...item, date: formattedDate };
        });
        setCoinData(formattedData);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();

    const intervalId = setInterval(() => {
      fetchBitcoinData();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {coinData && children(coinData)}
    </div>
  );
};

export default CoinDataLine;
