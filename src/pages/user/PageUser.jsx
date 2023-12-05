import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { MdOutlineEmail } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <div className="mx-auto bg-[#fff] w-[728px] h-[120px] flex flex-col rounded-[6px] justify-center items-center">
        <img className="w-[391px]" src={Logo} alt="Vokasi UB" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex space-y-8 flex-col justify-center shadow-md mt-5 w-[728px] h-[380px] rounded px-[50px] pt-6 pb-8 mb-4"
      >
        <TextField
          className="w-full"
          label="Email"
          variant="outlined"
          size="large"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <MdOutlineEmail className="text-[#253A59] mr-4 text-[24px]" />
            ),
          }}
        />
        <TextField
          className="w-full"
          label="Jenis Kelamin"
          variant="outlined"
          size="large"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          InputProps={{
            startAdornment: (
              <FiUsers className="text-[#253A59] mr-4 text-[24px]" />
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color=""
          className="w-full mt-6"
        >
          Submit
        </Button>
      </form>
    </main>
  );
};

export default PageUser;
