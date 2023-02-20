import { Box, Button, Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import background from "./background.svg"
import documentation from "./documentation.svg"
import slack from "./slack.svg"
import github from "./git-hub.svg"
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
        <Container>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',mt:5}}>
          <Box sx={{marginLeft:3}}>
            <Box component='img' src={background} sx={{ml:10}}>
            </Box>
          <Typography variant='h5' component='h1' sx={{textAlign:'center'}}>
            Documentation
          </Typography>
          <Typography sx={{marginTop:2,textAlign:'center'}}>
          Available our detailed document and top call support here.
          </Typography>
          <Button variant='contained' sx={{marginLeft:10,marginTop:2,}}>
            Check Document
          </Button>
          </Box>
          <Box sx={{marginLeft:3}}>
          <Box component='img' src={background} sx={{ml:10}}></Box>
          <Typography variant='h5' component='h1' sx={{ml:15,textAlign:'center'}}>
            GitHub
          </Typography>
          <Typography sx={{marginTop:2,textAlign:'center'}} component='p' variant='p' color='inherit'>
          Get latest feature, make pull request or bug fixes
          </Typography>
          <Button variant='contained' sx={{marginLeft:15,marginTop:2}}>
            Join on GitHub
          </Button>
          </Box>
          
          <Box sx={{marginLeft:3}}>
          <Box component='img' src={background} sx={{ml:10}}></Box>
          <Typography variant='h5' component='h1' sx={{ml:15,textAlign:'center'}}>
            Slack
          </Typography>
          <Typography sx={{marginTop:2,textAlign:'center'}}>
          Share your idea and insights, for inspiration collaboration and great result.
          </Typography>
          <Button variant='contained' sx={{marginLeft:15,marginTop:2}}>
            Join Our Community
          </Button>
          </Box>
          </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Banner
