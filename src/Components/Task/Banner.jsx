import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
    const theme=createTheme()
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{textAlign:"center",mt:2}}>
        <Typography component="h5" sx={{color:'#01579b',fontWeight:'bold'}} >
            CREMA MUI
        </Typography>
        <Typography component="h1" variant='h4'  sx={{mt:2,fontWeight:'bold'}} >
            Crema MUI is a great kick-starter
        </Typography>
        </Box>
    </ThemeProvider>
  )
}

export default Banner
