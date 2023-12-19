import React, { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import BarChart from '../../components/BarChart';
import axios from 'axios';
import { useAuthentication } from '../../hooks/useAuthentication';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    useAuthentication();
    const [surveyData, setSurveyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://besmartindonesiagemilang.com/rest-api-survey/data.php');
                setSurveyData(response.data);
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

    const chartData = {
        labels: Object.keys(roleCounts),
        datasets: [
            {
                label: 'Survey',
                data: Object.values(roleCounts),
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

    return (
        <div className='max-w-7xl flex flex-col overflow-auto h-screen'>
            <h1 className="text-2xl md:text-2xl font-bold">Overview Pengisi Survey</h1>
            <div className="grid md:grid-cols-3 mt-2 gap-4">
                <CardUser name="Mahasiswa" length={roleCounts.mahasiswa || 0} />
                <CardUser name="Dosen" length={roleCounts.dosen || 0} />
                <CardUser name="Tendik" length={roleCounts.tendik || 0} />
            </div>
            <h1 className="text-2xl font-bold mt-5">Statistic</h1>
            <div className="flex flex-col md:flex-row justify-start gap-14">
                <div>
                    <div className="w-[300px] h-[295px]">
                        <p className="text-lg font-medium ">Civitas Academic</p>
                        <Doughnut data={chartData} />
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
