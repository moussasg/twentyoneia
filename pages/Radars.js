import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ['healthcare', 'finance',  'retail', 'manufacturing', 'AI solutions'],
  datasets: [
    {
      label: '# of Votes',
      data: [100, 100, 100, 100, 100],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 3,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    r: {
      grid: {
        color: 'rgba(0, 0, 0, 0.2)',
      },
      angleLines: {
        color: 'rgba(0, 0, 0, 0.2)',
      },
      pointLabels: {
        font: {
          size: 18, // Set the desired font size here
        },
      },
    },
  },
};

export default function Radars() {
  return <Radar data={data} options={options} />;
}
