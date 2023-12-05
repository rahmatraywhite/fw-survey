import React from 'react';
import { FaStar } from 'react-icons/fa';

const CardPenilaian = ({ nama, penilaian, saran }) => {
  return (
    <div className='bg-[#D9D9D9] p-4 rounded-md'>
      <p className='text-xl font-bold'>{nama}</p>
      <div className="flex my-2 items-center">
        {[...Array(penilaian)].map((star, index) => (
          <FaStar key={index} color='#EDAA2D' className="mr-1" />
        ))}
      </div>
      <p>{saran}</p>
    </div>
  );
};

export default CardPenilaian;
