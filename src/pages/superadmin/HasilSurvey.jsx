import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import logo from '../../assets/logo.svg';
import { CiLogout } from 'react-icons/ci';
import CardUser from '../../components/CardUser';
import axios from 'axios';
import Penilaian from '../admin/Penilaian';
import { Link } from 'react-router-dom';

const HasilSurvey = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://besmartindonesiagemilang.com/rest-api-survey/data.php'
        );
        setSurveyData(response.data);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };
    fetchData();
  }, []);

  const ratingCounts = surveyData.reduce((acc, survey) => {
    const rating = survey.rating;
  
    switch (rating) {
      case 5:
        acc['Sangat Puas'] = (acc['Sangat Puas'] || 0) + 1;
        break;
      case 4:
        acc['Puas'] = (acc['Puas'] || 0) + 1;
        break;
      case 3:
        acc['Netral'] = (acc['Netral'] || 0) + 1;
        break;
      case 2:
        acc['Tidak Puas'] = (acc['Tidak Puas'] || 0) + 1;
        break;
      case 1 === 0:
        acc['Sangat Tidak Puas'] = (acc['Sangat Tidak Puas'] || 0) + 1;
        break;
      default:
        break;
    }
  
    return acc;
  }, {});
  
  const data = {
    labels: ['Sangat Puas', 'Puas', 'Netral', 'Tidak Puas', 'Sangat Tidak Puas'],
    datasets: [
      {
        label: 'Hasil Data Survey',
        data: Object.values(ratingCounts),
        backgroundColor: ['#5FBDFF', '#FF5B22', '#B6BBC4', '#F4F27E', '#B31312'],
        borderWidth: 1,
      },
    ],
  };
  

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
      },
    },
  };

  const roleCounts = surveyData.reduce((acc, survey) => {
    const role = survey.role.toLowerCase();
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <nav className="bg-[#253A59] flex items-center justify-between py-2 px-2 md:px-[40px] w-full">
        <div className="bg-[#E1E1E1] rounded-md border-[#000] flex justify-center p-1 w-[210px] h-[60px] border-2">
          <img src={logo} className="w-[170px]" alt="Vokasi UB" />
        </div>
        <Link to="/super-admin">
        <button className="flex items-center bg-[#EDAA2D] justify-between w-[120px] hover:bg-yellow-600 text-white font-bold p-2 px-4 space-x-3 rounded-md">
          <span>Logout</span>
          <CiLogout className="text-xl" />
        </button>
        </Link>
      </nav>
      <div className="flex flex-col mt-10 mb-24 items-center min-h-screen p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">
          Hasil Survey Kepuasan Pengguna
        </h1>
        <div>
          <div className="grid md:grid-cols-3 mt-2 gap-4">
            <CardUser name="Mahasiswa" length={roleCounts.mahasiswa || 0} />
            <CardUser name="Dosen" length={roleCounts.dosen || 0} />
            <CardUser name="Tendik" length={roleCounts.tendik || 0} />
          </div>
        </div>
        <div className="w-full max-w-screen-md">
          <Bar data={data} options={options} />
        </div>
        <div className='max-w-screen-xl my-5 h-[500px]'>
            <h1 className='text-3xl font-bold text-center my-10'>Daftar Pertanyaan</h1>
            <Penilaian />
        </div>
      </div>
    </div>
  );
};

export default HasilSurvey;
