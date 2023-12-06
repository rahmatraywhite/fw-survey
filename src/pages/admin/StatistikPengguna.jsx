import React from 'react';
import { Link } from 'react-router-dom';

const StatistikPengguna = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='bg-[#253A59] px-[25px] py-[70px] rounded-[10px] max-w-[915px]'>
        <div className='flex flex-col md:flex-row justify-center gap-[63px]'>
          <Link to='mahasiswa' className='bg-[#EDAA2D] hover:bg-[#D29100] text-[24px] text-center font-medium w-[180px] py-2 rounded-[10px]'>
            Mahasiswa
          </Link>
          <Link to='dosen' className='bg-[#EDAA2D] hover:bg-[#D29100] text-[24px] text-center font-medium w-[180px] py-2 rounded-[10px]'>
            Dosen
          </Link>
          <Link to='tendik' className='bg-[#EDAA2D] hover:bg-[#D29100] text-[24px] text-center font-medium w-[180px] py-2 rounded-[10px]'>
            Tendik
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatistikPengguna;
