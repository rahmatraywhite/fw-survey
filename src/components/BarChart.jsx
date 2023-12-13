import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://besmartindonesiagemilang.com/rest-api-survey/data.php');
        const data = response.data;
        setSurveyData(data);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };

    fetchData();
  }, []);

  const convertMonthToString = (month) => {
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return monthNames[month];
  };

  const getCountsByRoleAndMonth = (role) => {
    const countsByMonth = {};
    surveyData
      .filter((survey) => survey.role.toLowerCase() === role)
      .forEach((survey) => {
        const month = new Date(survey.created).getMonth();
        const monthName = convertMonthToString(month);
        countsByMonth[monthName] = (countsByMonth[monthName] || 0) + 1;
      });

    return countsByMonth;
  };

  const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const countsByMonthDosen = getCountsByRoleAndMonth('dosen');
  const countsByMonthMahasiswa = getCountsByRoleAndMonth('mahasiswa');
  const countsByMonthTendik = getCountsByRoleAndMonth('tendik');

  const datasets = [
    {
      label: 'Dosen',
      data: labels.map((month) => countsByMonthDosen[month] || 0),
      backgroundColor: getBackgroundColor('dosen'),
    },
    {
      label: 'Mahasiswa',
      data: labels.map((month) => countsByMonthMahasiswa[month] || 0),
      backgroundColor: getBackgroundColor('mahasiswa'),
    },
    {
      label: 'Tendik',
      data: labels.map((month) => countsByMonthTendik[month] || 0),
      backgroundColor: getBackgroundColor('tendik'),
    },
  ];

  const data = { labels, datasets };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true },
    },
  };

  return <Bar options={options} data={data} />;
};

const getBackgroundColor = (role) => {
  switch (role) {
    case 'mahasiswa':
      return '#A9A9A9';
    case 'dosen':
      return '#FF5B22';
    case 'tendik':
      return '#0766AD';
    default:
      return '#A9A9A9';
  }
};

export default BarChart;
