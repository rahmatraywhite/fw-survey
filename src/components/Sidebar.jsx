import React from 'react';
import Logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { PiUserListBold } from "react-icons/pi";
import { MdQuestionAnswer } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    return (
        <div className="flex ">
            <div className="flex flex-col h-screen p-3 bg-[#253A59] shadow w-64">
                <div className="space-y-3 flex-1">
                    <Link to='/dashboard' className="flex bg-[#E1E1E1] py-2 px-4 rounded-md items-center border-[3px] border-[#000]">
                        <img src={Logo} alt="Vokasi Universitas Brawijaya" />
                    </Link>
                    <div className='p-2 text-white'>
                        <h1 className='uppercase text-3xl font-bold'>Menu</h1>
                        <p className='text-lg -mt-2 tracking-wide'>Menu Aplikasi</p>
                        <div className='border-b-4 rounded-md border-[#EDAA2D]'></div>
                    </div>
                    <ul className="py-4 space-y-6 text-lg text-white font-normal flex-1">
                        <li className="rounded-md hover:bg-[#EDAA2D]">
                            <NavLink to='statistik'
                                className={({ isActive }) =>
                                    `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-[#EDAA2D] font-semibold" : ""
                                    }`
                                }
                            >
                                <PiUserListBold className='text-2xl' />
                                <span>Statistik Pengguna</span>
                            </NavLink>
                        </li>
                        <li className="rounded-md hover:bg-[#EDAA2D]">
                            <NavLink to='pertanyaan'
                                className={({ isActive }) =>
                                    `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-[#EDAA2D] font-semibold" : ""
                                    }`
                                }
                            >
                                <MdQuestionAnswer className='text-2xl' />
                                <span>Pertanyaan</span>
                            </NavLink>
                        </li>
                        <li className="rounded-md hover:bg-[#EDAA2D]">
                            <NavLink to='penilaian'
                                className={({ isActive }) =>
                                    `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-[#EDAA2D] font-semibold" : ""
                                    }`
                                }
                            >
                                <TbReport className='text-2xl' />
                                <span>Penilaian Dan Saran</span>
                            </NavLink>
                        </li>
                        <li className="rounded-md hover:bg-[#EDAA2D]">
                            <NavLink to='statistik-data'
                                className={({ isActive }) =>
                                    `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-[#EDAA2D] font-semibold" : ""
                                    }`
                                }
                            >
                                <FaChartBar className='text-2xl' />
                                <span>Hasil Statistik Data</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to='/admin'>
                    <button className="flex items-center bg-[#EDAA2D] justify-between w-full hover:bg-yellow-600 text-white font-bold p-2 space-x-3 rounded-md">
                        <span>Logout</span>
                        <CiLogout className='text-xl' />
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
