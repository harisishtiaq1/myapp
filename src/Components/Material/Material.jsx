import React from 'react';
import { Button, Container, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import {TextField} from '@mui/material'
import { design } from './Material1';
import {top} from "./Material1"
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
function Material() {
  const theme=createTheme();
  const nevigate=useNavigate();

  const signin=()=>{
    let path="/signin"
    nevigate(path)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box sx={design}>
          <Typography component="h1" variant='h5'>
            Sign Up
          </Typography>
        <Box component="form" sx={{mt:3}}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
              autoComplete='given-name'
              label="First Name"
              name='firstname'
              fullWidth
              required
              autoFocus
              id='firstName'/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              autoComplete='given-name'
              label="Last Name"
              name='lastname'
              fullWidth
              required
              autoFocus
              id='lastName'/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="Password"
                  autoComplete="Password"
                />
              </Grid>
          </Grid>
          <Button
          onClick={()=>signin()}
          type='submit'
          fullWidth
          variant='contained'
          color='secondary'
          sx={top}>
Sign Up
          </Button>
        </Box>

        </Box>
      </Container>
    </ThemeProvider>
    
  )
}

export default Material