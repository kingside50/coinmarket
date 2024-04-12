  import React from 'react';
  import {
      Chart as Chartjs,
      LineElement,
      CategoryScale,
      LinearScale,
      PointElement,
    
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  Chartjs.register(
      LineElement,
      CategoryScale,
      LinearScale,
    PointElement,
  )
  const LineChart = ({labels, datasets}) => {
    // Sample data
    const data = {
      labels: labels,
      datasets: datasets,
    };

    const options = {
      scales: {
        x: {
          ticks: {
            color: '#0A0908'
          },
        },
        y: {
  ticks: {
            color: '#0A0908' 
          }
        }
      },
      plugins: {
        legend: {
        
          labels: {
            color: '#0A0908' // Change legend text color to red
          }
        },
        tooltip: {
          titleColor: '#F2F4F3',
          bodyColor: '#F2F4F3' // Change tooltip text color to blue
        }
      }
    };

    return (
      <div>
           
        <Line data={data} options={options}/>
      </div>
    );
  };

  export default LineChart;