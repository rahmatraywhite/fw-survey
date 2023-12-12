/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

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

const StatistikData = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dosen',
        data: ['jakarta'],
        borderColor: '#96EFFF',
        backgroundColor: '#96EFFF',
      },
      {
        label: 'Mahasiswa',
        data: [],
        borderColor: '#5FBDFF',
        backgroundColor: '#5FBDFF',
      },
      {
        label: 'Tendik',
        data: [],
        borderColor: '#7B66FF',
        backgroundColor: '#7B66FF',
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://besmartindonesiagemilang.com/rest-api-survey/data.php');
        const surveyData = response.data;

        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

        const updatedData = {
          labels: months,
          datasets: [
            {
              label: 'Dosen',
              data: months.map((month, index) => {
                const roleData = surveyData.filter((item) => {
                  const createdMonth = new Date(item.created).getMonth();
                  return createdMonth === index && item.role === 'dosen';
                });
                const averageRating = roleData.length > 0 ? roleData.reduce((acc, item) => {
                  acc += (item.question1 + item.question2 + item.question3) / 3;
                  return acc;
                }, 0) / roleData.length : 0;
                return averageRating;
              }),
              borderColor: '#96EFFF',
              backgroundColor: '#96EFFF',
            },
            {
              label: 'Mahasiswa',
              data: months.map((month, index) => {
                const roleData = surveyData.filter((item) => {
                  const createdMonth = new Date(item.created).getMonth();
                  return createdMonth === index && item.role === 'mahasiswa';
                });
                const averageRating = roleData.length > 0 ? roleData.reduce((acc, item) => {
                  acc += (item.question1 + item.question2 + item.question3) / 3;
                  return acc;
                }, 0) / roleData.length : 0;
                return averageRating;
              }),
              borderColor: '#5FBDFF',
              backgroundColor: '#5FBDFF',
            },
            {
              label: 'Tendik',
              data: months.map((month, index) => {
                const roleData = surveyData.filter((item) => {
                  const createdMonth = new Date(item.created).getMonth();
                  return createdMonth === index && item.role === 'tendik';
                });
                const averageRating = roleData.length > 0 ? roleData.reduce((acc, item) => {
                  acc += (item.question1 + item.question2 + item.question3) / 3;
                  return acc;
                }, 0) / roleData.length : 0;
                return averageRating;
              }),
              borderColor: '#7B66FF',
              backgroundColor: '#7B66FF',
            }
          ],
        };

        setData(updatedData);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };

    fetchData();
  }, []);


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

export default StatistikData;
