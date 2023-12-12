import React from 'react';
import { Bar } from 'react-chartjs-2';
import Navbar from '../../components/Navbar';

const data = {
    labels: ['Sangat Puas', 'Puas', 'Netral', 'Tidak Puas', 'Sangat Tidak Puas'],
    datasets: [
        {
            label: 'Persentase',
            data: [25, 30, 15, 10, 20],
            backgroundColor: ['#5FBDFF', '#FF5B22', '#B6BBC4', '#F4F27E', '#B31312'],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
        },
    },
};

const HasilSurvey = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">Hasil Survey Kepuasan Pengguna</h1>
                <div className="w-full max-w-screen-md">
                    <Bar data={data} options={options} />
                </div>
                <div className="mt-8 text-left">
                    <p className="text-xl font-bold mb-4">Analisis Hasil Survey:</p>
                    <ul className="list-disc pl-6">
                        <li className="mb-1">25% Sangat Puas</li>
                        <li className="mb-1">30% Puas</li>
                        <li className="mb-1">15% Netral</li>
                        <li className="mb-1">10% Tidak Puas</li>
                        <li className="mb-1">20% Sangat Tidak Puas</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HasilSurvey;
