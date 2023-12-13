import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MdAccountCircle, MdLock } from 'react-icons/md';
import Swal from 'sweetalert2';

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else if (email === 'su-admin' && password === 'su-admin') {
      navigate('/super-admin');
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Invalid email or password',
        icon: 'error',
      });
    }
  };


  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <main className="bg-[#253A59] min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto bg-[#fff] w-[350px] p-4 md:w-[728px] h-[120px] flex flex-col rounded-[6px] justify-center items-center">
        <img className="w-[321px]" src={Logo} alt="Vokasi UB" />
      </div>
      <form
        onSubmit={handleLogin}
        className="bg-white flex space-y-4 flex-col justify-center shadow-md mt-5 w-[350px] md:w-[728px] rounded px-8 py-10"
      >
        <h1 className="text-center text-[30px] uppercase font-bold">Login</h1>
        <TextField
          label="email"
          variant="outlined"
          fullWidth
          size="large"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdAccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          size="large"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdLock />
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              icon={<Checkbox />}
              checkedIcon={<Checkbox />}
            />
          }
          label="Remember me"
          className="mb-4"
        />
        <Button
          style={{
            backgroundColor: '#EDAA2D',
            '&:hover': { backgroundColor: '#D29100' },
            color: '#000',
          }}
          fullWidth
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </main>
  );
};

export default LoginAdmin;
