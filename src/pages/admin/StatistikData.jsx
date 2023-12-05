/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      legend: { position: 'top' },
    },
  },
};

const labels = ['Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dosen',
      data: [12, 4, 20, 15, 50, 30],
      borderColor: '#96EFFF',
      backgroundColor: '#96EFFF',
    },
    {
      label: 'Mahasiswa',
      data: [0, 12, 38, 30, 32, 25],
      borderColor: '#5FBDFF',
      backgroundColor: '#5FBDFF',
    },
    {
      label: 'Tendik',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: '#7B66FF',
      backgroundColor: '#7B66FF',
    },
  ],
};
const StatistikData = () => {
  return (
    <div className="w-full max-w-screen-lg m-auto">
      <div className='flex flex-col space-y-8 justify-center'>
        <h1 className='text-center text-2xl font-bold'>Hasil statistik data survey kepuasan </h1>
        <div style={{ width: '100%', height: 'auto' }}>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default StatistikData