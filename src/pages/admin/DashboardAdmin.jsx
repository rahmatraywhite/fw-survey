import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardAdmin = () => {
    const location = useLocation();

    const getTitle = () => {
        const lastSlashIndex = location.pathname.lastIndexOf('/');
        const pageName = location.pathname.substring(lastSlashIndex + 1);

        switch (pageName) {
            case 'statistik':
                return 'Statistik Pengguna';
            case 'pertanyaan':
                return 'Pertanyaan';
            case 'penilaian':
                return 'Penilaian dan Saran';
            default:
                return 'Dashboard';
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <nav className='bg-[#253A59] items-center flex border-[#EDAA2D] border-l-4 h-[100px] px-10 shadow-xl fixed w-full'>
                    <h1 className="text-white text-2xl uppercase font-bold">{getTitle()}</h1>
                </nav>
                <div className="p-8 flex-grow overflow-y-hidden mt-20">
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default DashboardAdmin;
