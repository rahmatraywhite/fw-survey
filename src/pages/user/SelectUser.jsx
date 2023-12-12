import React from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const SelectUser = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    sessionStorage.setItem('role', role);
    navigate('/survey-user');
  };

  const userRoles = ['mahasiswa', 'dosen', 'tendik'];

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-[#253A59] rounded-xl p-[30px] max-w-[915px]">
          <p className="uppercase text-[#fff] text-[28px] font-bold text-center mb-6">
            Mengisi Survey sebagai
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-[63px]">
            {userRoles.map((role) => (
              <div
                key={role}
                onClick={() => handleSelect(role)}
                className="bg-[#EDAA2D] text-[24px] mx-auto text-center font-medium w-[200px] py-2 rounded-[10px] cursor-pointer"
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SelectUser;
