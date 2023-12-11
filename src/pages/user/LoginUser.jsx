import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { MdOutlineEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/select-user');
  };

  return (
    <main className="bg-[#253A59] min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto bg-[#fff] w-[350px] p-4 md:w-[728px] h-[120px] flex flex-col rounded-[6px] justify-center items-center">
        <img className="w-[391px]" src={Logo} alt="Vokasi UB" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex space-y-6 md:space-y-8 flex-col justify-center shadow-md mt-5 w-[350px] md:w-[728px] h-[300px] md:h-[380px] rounded px-5 md:px-[50px] pt-6 pb-8 mb-4"
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
          label="Password"
          variant="outlined"
          size="large"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <MdLock className="text-[#253A59] mr-4 text-[24px]" />
            ),
          }}
        />
        <Button
         style={{ backgroundColor: '#EDAA2D', '&:hover': { backgroundColor: '#D29100' }, color: '#000' }}
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mt-6"
        >
          Submit
        </Button>
      </form>
    </main>
  );
};

export default LoginUser;
