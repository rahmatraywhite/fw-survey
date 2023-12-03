import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { FiLock } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const PageAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <main className="bg-[#253A59] min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto bg-[#fff] w-[728px] h-[120px] flex flex-col justify-center items-center">
        <img className="w-[391px]" src={Logo} alt="Vokasi UB" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex space-y-1 flex-col justify-center shadow-md mt-5 w-[728px] h-[380px] rounded px-[50px] pt-6 pb-8 mb-4"
      >
        <h1 className="text-center text-[40px] uppercase font-bold">Login</h1>
        <div className="mb-2 relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <LuUser className="text-[#253A59] text-[36px]" />
          </span>
          <input
            className="appearance-none text-[24px] w-full py-6 placeholder:text-2xl placeholder:text-[#000] placeholder:font-medium pl-20 px-3 text-gray-700 leading-tight border-[#000] border-b-2 focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-2 relative">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <FiLock className="text-[#253A59] text-[36px]" />
          </span>
          <input
            className="appearance-none text-[24px] w-full py-6 placeholder:text-2xl placeholder:text-[#000] placeholder:font-medium pl-20 px-3 text-gray-700 leading-tight border-[#000] border-b-2 focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-2">
          <label
            htmlFor="rememberMe"
            className="cursor-pointer flex items-center"
            onClick={handleRememberMeChange}
          >
            {rememberMe ? (
              <MdCheckBox className="text-[#253A59] text-[24px] mr-2" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank className="text-[#253A59] text-[24px] mr-2" />
            )}
            <span className="text-[20px] font-medium text-[#000]">Remember me</span>
          </label>
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

export default PageAdmin;
