import React, { FormEvent, useContext, useState } from 'react';
import { app } from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { UserContext } from '../providers/user-provider';

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app)
  const { setUser } = useContext(UserContext);

  // Ref for Google signin through Firebase SDK:
  // https://firebase.google.com/docs/auth/web/google-signin
  const handleGoogleSubmit = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      setUser({
        id: res.user.uid,
        displayName: res.user.displayName ?? '',
        email: res.user.email ?? ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Logging in!')
  }


  return (
    
      <Grid container spacing={3}>
        {/* Login Title */}
        <Grid item xs={12}>
          <Typography variant='h3'>Login</Typography>
        </Grid>
        {/* Login email form */}
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </form>
        </Grid>
        {/* 3rd party login */}
        <Grid item xs={12}>
          <Button startIcon={<Google />} onClick={handleGoogleSubmit}>Sign in with Google!</Button>
        </Grid>
     </Grid>
    
  );
}

export default Login