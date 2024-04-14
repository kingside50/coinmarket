import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
LineElement,
CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,

  
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = ({ coinData }) => {

  const data = {
    labels: coinData.map(entry => entry.date), 
    datasets: [
      {
        label: 'BTC Price',
        data: coinData.map(entry => entry.priceUsd), 
        fill: false,
        backgroundColor: '#49111C',
        borderColor: '#49111C',
        tension: 0.1,
      },
    ],
  };

  // Options for the chart
  const options = {
    Response: true,
    scales: {
      x: {
        ticks: {
          color: '#0A0908',
        },
      },
      y: {
        ticks: {
          color: '#0A0908',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#0A0908',
        },
      },
      tooltip: {
        titleColor: '#F2F4F3',
        bodyColor: '#F2F4F3',
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
