import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',];

  const data = {
    labels,
    datasets: [
      {
        label: 'income',
        data: labels.map(() => faker.datatype.number({ min: -5, max: 5 })),
        backgroundColor: 'rgba(106, 64, 41, 1)',
      },
      {
        label: 'outcome',
        data: labels.map(() => faker.datatype.number({ min: -5, max: 5})),
        backgroundColor: 'rgb(255, 186, 51)',
      },
    ],
  };

function Stackchart() {
  return <Bar options={options} data={data} />;
}

export default Stackchart;
