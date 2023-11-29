import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { MdOutlineEmail } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PageUser = () => {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/select-user');
  };

  return (
    <main className="bg-[#253A59] min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto bg-[#fff] w-[728px] h-[120px] flex flex-col justify-center items-center">
        <img className="w-[391px]" src={Logo} alt="Vokasi UB" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex space-y-8  flex-col justify-center shadow-md mt-5 w-[728px] h-[380px] rounded px-[50px] pt-6 pb-8 mb-4"
      >
        <div className="mb-2 relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <MdOutlineEmail className="text-[#253A59] text-[42px]" />
          </span>
          <input
            className="appearance-none text-[24px] w-full py-6 placeholder:text-2xl placeholder:text-[#000] placeholder:font-medium pl-20 px-3 text-gray-700 leading-tight border-[#000] border-b-2 focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <FiUsers className="text-[#253A59] text-[42px]" />
          </span>
          <input
            className="appearance-none w-full py-6 text-2xl placeholder:text-2xl placeholder:text-[#000] placeholder:font-medium pl-20 px-3 text-gray-700 leading-tight border-[#000] border-b-2 focus:outline-none focus:shadow-outline"
            id="gender"
            type="text"
            placeholder="JENIS KELAMIN"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#EDAA2D] w-full h-[60px] mt-6 text-[24px] hover:opacity-80 uppercase text-[#000] font-medium py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default PageUser;
