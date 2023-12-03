import React from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';

const Sidebar = () => {
    return (
        <div className="bg-[#253A59] h-screen w-[345px] overflow-hidden">
            <div className="border-b-4 border-[#000] h-[110px] flex items-center px-4">
                <div className="flex items-center px-4 py-2 mt-5 border-[#000] border-[4px] bg-[#E1E1E1] justify-center mb-6">
                    <img className="w-[252px] h-16" src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="text-white p-4">
                <h1 className="text-[40px] uppercase font-bold">Menu</h1>
                <p className="text-xl -mt-4 font-medium">Menu Aplikasi</p>
                <hr className="border-[#fff] my-4" />
            </div>
            <ul className="text-[#fff] p-4 space-y-6 font-bold text-2xl">
                <li>
                    <Link to='statistik' className="flex gap-3 items-center">
                        <IoIosArrowForward className="text-2xl font-bold" />
                        Statistik pengguna
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-3 items-center">
                        <IoIosArrowForward className="text-2xl font-bold" />
                        Pertanyaan
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-3 items-center">
                        <IoIosArrowForward className="text-2xl font-bold" />
                        Penilaian Dan Saran
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-3 items-center">
                        <IoIosArrowForward className="text-2xl font-bold" />
                        Hasil Statistik Data
                    </Link>
                </li>
            </ul>
            <button className="flex mx-auto ml-4 justify-between items-center bg-[#EDAA2D] absolute bottom-4 w-[309px] text-[#fff] font-bold text-lg py-2 px-4 mt-6 rounded-md hover:bg-[#D29100] focus:outline-none focus:shadow-outline">
                Logout
                <CiLogout className="text-2xl ml-2" />
            </button>
        </div>
    );
};

export default Sidebar;
