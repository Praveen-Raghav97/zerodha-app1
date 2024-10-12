import React, { useState } from 'react';
import { Container, Grid, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://zerodha-app-api.vercel.app/User/login', { email, password });
 
        console.log('Login success:', response.data);
         navigate('/home');
          localStorage.setItem("userId" ,response.data.user._id)
          localStorage.setItem("token" ,response.data.token)
      } catch (error) {
        console.error('Error logging in:', error.response.data);
        alert('Invalid credentials');
      }
    };

  return (
    <Container maxWidth="sm" className='mt-10'>
      <Box 
        sx={{ 
          marginTop: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: '1em' }} onSubmit={handleSubmit} >
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="naman@gmail.com"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="123456"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button href="#" variant="text" size="small">
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
              <Button href="/signup" variant="text" size="small">
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
