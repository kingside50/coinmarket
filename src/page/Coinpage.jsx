import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Coinpage.css'
const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);

  useEffect(() => {
    const fetchCoinInfo = async () => {
      try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
        setCoinInfo(response.data.data);
      } catch (error) {
        console.error('Error fetching coin info:', error);
      }
    };

    fetchCoinInfo();
  }, [id]);

  if (!coinInfo) {
    return <div>Loading...</div>;
  }

  return (
    <body>
      <div className='container'>
        <div className="card"> 
        <h2>{coinInfo.name} ({coinInfo.symbol})</h2>
      <p>Price: ${coinInfo.priceUsd}</p>
      <p>Market Cap: ${coinInfo.marketCapUsd}</p>
      <p>24h Volume: ${coinInfo.volumeUsd24Hr}</p>
      </div>
    </div>
    </body>
  );
};

export default CoinDetailPage;