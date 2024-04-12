import React from 'react';
import {
    Chart as Chartjs,
   ArcElement,
    Tooltip,
    Legend,
    
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chartjs.register(
    ArcElement,
    Tooltip,
    Legend
);

const PieDiagram = ({ coinData }) => {
  const labels = coinData ? coinData.map(coin => coin.name) : [];
  const datasets = coinData ? [{
    label: 'Crypto Prices',
    data: coinData.map(coin => parseFloat(coin.priceUsd)),
    backgroundColor: ['#49111C', '#A9927D','#5E503F'],
  }] : [];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div>
      <Pie
        data={data}
        options={{
          plugins: {
            legend: {
              labels: {
                color: '#0A0908'
              }
            },
            tooltip: {
              titleColor: '#F2F4F3',
              bodyColor: '#F2F4F3'
            }
          }
        }}
      />
    </div>
  );
};

export default PieDiagram;
