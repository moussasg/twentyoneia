import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['emerging technologies', 'AI algorithms', 'industry trends', 'Data Security', 'Quantum Computing'],
  datasets: [
    {
      data: [12, 19, 15, 15, 10],
      backgroundColor: [
        'rgba(202, 185, 194, 0.77)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
function Chartjs() {
  return <Pie data={data} style={{width:"80%" , height:'200%'}}/>
}

export default Chartjs;
