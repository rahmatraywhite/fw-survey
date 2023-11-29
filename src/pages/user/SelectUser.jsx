import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
const SelectUser = () => {
    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='bg-[#253A59] p-[35px] max-w-[915px]'>
                    <p className='uppercase text-[#fff] text-[40px] font-bold text-center mb-6'>Mengisi Survey sebagai</p>
                    <div className='flex justify-center gap-[63px]'>
                        <Link to='/survey-user' className='bg-[#EDAA2D] text-[32px] text-center font-medium w-[233px] py-2 rounded-[10px]'>Mahasiswa</Link>
                        <Link to='/survey-user' className='bg-[#EDAA2D] text-[32px] text-center font-medium w-[233px] py-2 rounded-[10px]'>Dosen</Link>
                        <Link to='/survey-user' className='bg-[#EDAA2D] text-[32px] text-center font-medium w-[233px] py-2 rounded-[10px]'>Tendik</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SelectUser;
