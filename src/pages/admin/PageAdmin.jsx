import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
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
      <div className="mx-auto bg-[#fff] w-[728px] h-[120px] rounded-md flex flex-col justify-center items-center">
        <img className="w-[321px]" src={Logo} alt="Vokasi UB" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex space-y-4 flex-col justify-center shadow-md mt-5 w-[728px] rounded px-8 py-10"
      >
        <h1 className="text-center text-[30px] uppercase font-bold">Login</h1>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          size="large"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
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
          style={{ backgroundColor: '#EDAA2D', '&:hover': { backgroundColor: '#D29100' }, color: '#000' }}
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

export default PageAdmin;
