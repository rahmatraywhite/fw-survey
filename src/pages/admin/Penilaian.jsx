import React, { useState, useEffect } from 'react';
import CardPenilaian from '../../components/CardPenilaian';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { db } from '../../lib/Firebase/firebase';

ChartJS.register(ArcElement, Tooltip, Legend);

const Penilaian = () => {
  const [dataPenilaianSaran, setDataPenilaianSaran] = useState([]);
  const [chartData, setChartData] = useState({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Rating',
        data: Array(5).fill(0),
        backgroundColor: [
          '#5FBDFF',
          '#FF5B22',
          '#B6BBC4',
          '#F4F27E',
          '#B31312',
        ],
        borderColor: [
          '#5FBDFF',
          '#FF5B22',
          '#B6BBC4',
          '#F4F27E',
          '#B31312',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('surveys').get();
        const surveyData = snapshot.docs.map((doc) => doc.data());

        const newData = surveyData.map((item) => ({
          nama: item.email, 
          penilaian: item.rating,
          saran: item.suggestion,
        }));

        setDataPenilaianSaran(newData);

        const ratings = newData.map((item) => item.penilaian);
        const updatedChartData = {
          ...chartData,
          datasets: [
            {
              ...chartData.datasets[0],
              data: ratings.reduce((acc, rating) => {
                acc[rating - 1]++;
                return acc;
              }, Array(5).fill(0)),
            },
          ],
        };

        setChartData(updatedChartData);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };

    fetchData();
  }, [chartData]); 

  return (
    <div className="flex flex-column h-full">
      <div className="flex flex-col-reverse overflow-auto space-y-4 flex-1">
        {dataPenilaianSaran.map((item, index) => (
          <CardPenilaian
            key={index}
            nama={item.nama}
            penilaian={item.penilaian}
            saran={item.saran}
          />
        ))}
      </div>
      <div className="hidden md:flex">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default Penilaian;
