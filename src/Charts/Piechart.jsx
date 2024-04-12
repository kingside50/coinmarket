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

const PieDiagram = ({ labels, datasets }) => {
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
                color: '#0A0908' // Change legend text color to red
              }
            },
            tooltip: {
              titleColor: '#F2F4F3',
              bodyColor: '#F2F4F3' // Change tooltip text color to blue
            }
          }
        }}
      />
    </div>
  );
};

export default PieDiagram;