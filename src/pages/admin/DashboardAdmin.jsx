import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardAdmin = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <nav className='bg-[#253A59] h-[110px] items-center flex border-[#000] border-4 py-3 px-[40px]'>
                    <h1 className="text-white text-[40px] font-bold">Statistik Pengguna</h1>
                </nav>
                <div className="p-8 flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
