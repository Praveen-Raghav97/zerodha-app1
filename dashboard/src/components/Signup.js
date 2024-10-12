import React, { useState } from 'react';
import { Container, Grid, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {


    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://zerodha-app-api.vercel.app/User/signup', { username, email, password });
        console.log('Signup success:', response.data);
        navigate('/login');
      } catch (error) {
        console.error('Error signing up:', error.response.data);
        alert('Invalid credentials');
      }
    };
  return (
    <Container maxWidth="sm">
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
          Sign Up
        </Typography>
        <form style={{ width: '100%', marginTop: '1em' }}  onSubmit={handleSubmit}>
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoComplete="given-name"
            autoFocus
            value={username}
          onChange={(e) => setName(e.target.value)}
          />
         
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button href="/login" variant="text" size="small">
                Already have an account? Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default Signup;
