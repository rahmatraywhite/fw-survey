import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May'];

const data = {
  labels,
  datasets: [
    {
      label: 'Mahasiswa',
      data: [79, 79, 79, 79, 79],
      backgroundColor: '#A9A9A9',
    },
    {
      label: 'Dosen',
      data: [20, 20, 20, 20, 20],
      backgroundColor: '#FF5B22',
    },
    {
      label: 'Tendik',
      data: [35, 35, 35, 35, 35],
      backgroundColor: '#0766AD',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, },
  },
};

const BarChart = () => <Bar options={options} data={data} />;

export default BarChart;
