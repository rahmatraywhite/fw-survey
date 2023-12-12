import React, {useState, useEffect} from 'react';
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
import { db } from '../lib/Firebase/firebase';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May'];


const BarChart = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('surveys').get();
        const data = snapshot.docs.map((doc) => doc.data());
        setSurveyData(data);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };

    fetchData();
  }, []);

  const roleCounts = surveyData.reduce((acc, survey) => {
    const role = survey.role.toLowerCase();
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(roleCounts);
  const datasets = labels.map((label) => ({
    label: label.charAt(0).toUpperCase() + label.slice(1),
    data: Array(5).fill(roleCounts[label] || 0),
    backgroundColor: getBackgroundColor(label),
  }));

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
