import { Box, Button, Container, createTheme, CssBaseline, Grid, Link, TextField, ThemeProvider,Typography } from '@mui/material'
import React from 'react'
import {design} from "./Material1"
import {top} from "./Material1"
function Forgot() {
    const theme=createTheme();
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline/>
    <Box sx={design}>
        <Typography component="h1" variant='h5'>
            Forgot Password
        </Typography>
        <Box component-="form" sx={{mt:3}}>
        <Grid container spacing={3}>
            <Grid item  xs={12}>
                <TextField
                input type="password"
                label="Password"
                required
                fullWidth
                id='Password'
                name='Password'
                autoComplete='Password'>
                </TextField>
            </Grid>
            <Grid item  xs={12}>
                <TextField
                label="Password"
                required
                input type="password"
                fullWidth
                id='ResetPassword'
                name='Password'
                autoComplete='Password'>
                </TextField>
            </Grid>
        </Grid>
        <Button
        sx={top}
        type='submit'
        fullWidth
        color='success'
        variant='contained'>
            Reset Password
        </Button>
        <Grid container>
        <Grid item >
                <Link href="#" variant="body1">
                  {"Sign In"}
                </Link>
        </Grid>
        </Grid>
        </Box>
        
    </Box>
    </Container>
    </ThemeProvider>
  )
}

export default Forgot