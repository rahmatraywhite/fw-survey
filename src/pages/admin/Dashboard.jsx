import React from 'react';
import CardUser from '../../components/CardUser';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import BarChart from '../../components/BarChart';

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
    labels: ['Mahasiswa', 'Dosen', 'Tendik'],
    datasets: [
        {
            label: 'Survey',
            data: [79, 20, 35],
            backgroundColor: [
                '#A9A9A9',
                '#FF5B22',
                '#0766AD',
            ],
            borderColor: [
                '#A9A9A9',
                '#FF5B22',
                '#0766AD',
            ],
            borderWidth: 1,
        },
    ],
};

const Dashboard = () => {
    return (
        <div className='max-w-7xl flex flex-col overflow-auto h-screen'>
            <h1 className="text-2xl md:text-2xl font-bold">Overview Pengisi Survey</h1>
            <div className="grid md:grid-cols-3 mt-2 gap-4">
                <CardUser name="Mahasiswa" length={79} />
                <CardUser name="Dosen" length={20} />
                <CardUser name="Tendik" length={35} />
            </div>
            <h1 className="text-2xl font-bold mt-5">Statistic</h1>
            <div className="flex flex-col md:flex-row justify-start gap-14">
                <div>
                    <div className="w-[300px] h-[295px]">
                        <p className="text-lg font-medium ">Civitas Academic</p>
                        <Doughnut data={data} />
                    </div>
                </div>
                <div className="">
                    <p className="text-lg font-medium ">Traffic</p>
                    <div className="w-[600px]">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
