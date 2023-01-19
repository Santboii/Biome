import React, { FormEvent, useContext, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { TextField, Button, Grid, Paper, Box, Divider, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { UserContext } from '../providers/user-provider'
import { useRouter } from 'next/router'
import { auth } from '../../firebase'
import { useForm } from 'react-hook-form'
import { SocialLoginButton } from '../login'
import Link from 'next/link'


const Login: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  // Ref for Google signin through Firebase SDK:
  // https://firebase.google.com/docs/auth/web/google-signin
  const handleGoogleSubmit = async () => {
    try {
      // const res = await signInWithPopup(auth, provider)
      // setUser({
      //   id: res.user.uid,
      //   displayName: res.user.displayName ?? '',
      //   email: res.user.email ?? ''
      // })
      router.push('/events')
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = async (loginForm: unknown) => {
    console.log(loginForm)
    try {
      console.log('Logging in!')
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
      <Grid container justifyContent="center">
        {/* Login email form */}
        <Grid item xs={11} sm={9} md={6} lg={4} xl={3}>
          <Typography
            textAlign='center'
            fontWeight={800}
            variant='h5'
            marginY={4}
          >Welcome to Biome!</Typography>
          <Typography
            textAlign='left'
            variant='body1'
            marginY={4}
          >
            Discover and join exciting local events created by users in your community with
            Biome. Easily create your own events and connect with others to
            make plans and have fun!
          </Typography>
          <Box mb={5}>
            {/* Google login */}
            <SocialLoginButton
              startIcon={<Google />}
              onClick={handleGoogleSubmit}
              sx={{color: '#FFF', backgroundColor: '#4285F4'}}
            >Sign up with Google!</SocialLoginButton>
          </Box>
          <Divider sx={{margin: 3, fontWeight: 600}}>OR</Divider>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                color="primary"
                label="Email Address"
                type="email"
                {...register("email")}
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                fullWidth
                sx={{marginBottom: 2}}
              />
              <TextField
                label="Password"
                type="password"
                {...register("password")}
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
                fullWidth
                sx={{marginBottom: 4}}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{padding: 1.5}}
              >
                Sign Up
              </Button>
            </form>
            <Typography sx={{marginTop: 2}}>
              Have an account? <Link href="/login">Log in.</Link>
            </Typography>
          </Box>
        </Grid>
     </Grid>
    
  );
}

export default Login