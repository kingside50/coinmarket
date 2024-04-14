import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Coinlist.css';

const TopCoinsList = ({ onFavorite }) => {
  const [coins, setCoins] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets?limit=60');
        setCoins(response.data.data);
      } catch (error) {
        console.error('Error fetching top coins:', error);
      }
    };

    fetchTopCoins();
  }, []);

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(coinId => coinId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

 

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search coins..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredCoins.map(coin => (
          <li key={coin.id}>
      <Link to={`/coin/${coin.id}`}>
        {coin.name} ({coin.symbol})
      </Link>
            <button onClick={() => toggleFavorite(coin.id)}>
              {favorites.includes(coin.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
      <h2>Favorites</h2>
      <ul>
        {coins.filter(coin => favorites.includes(coin.id)).map(favoriteCoin => (
          <li key={favoriteCoin.id}>
              <Link to={`/coin/${favoriteCoin.id}`}>
              {favoriteCoin.name} ({favoriteCoin.symbol})
      </Link>
        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCoinsList;
