import { Box, Button, Slide,Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import background from "./background.svg"
import documentation from "./documentation.svg"
import slack from "./slack.svg"
import github from "./git-hub.svg"
import Banner2 from './Banner2'


const Banner = () => {
    const theme=createTheme()
    const [checked, setChecked] = React.useState(true);
    const handleChange = () => {
    setChecked((prev) => !prev);
  };
  React.useEffect(()=>{
    handleChange();
  },[])
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Slide direction="down" in={checked} style={{transformOrigin:'0 0 0 0'}}
    {...(checked ? {timeout:1000}:{})}>
        <Box sx={{textAlign:"center",mt:2}}>
        <Typography component="h5" sx={{color:'#01579b',fontWeight:'bold'}} >
            CREMA MUI
        </Typography>
        <Typography component="h1" variant='h4'  sx={{mt:2,fontWeight:'bold'}} >
            Crema MUI is a great kick-starter
        </Typography>
        </Box>
        </Slide>
        <Container>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',mt:5}}>
          <Box sx={{textAlign:"center"}}>
            <Box component='img' src={documentation} sx={{ml:5}}></Box>
          <Typography variant='h5' component='h1' sx={{textAlign:'center'}}>
            Documentation
          </Typography>
          <Typography sx={{marginTop:2,textAlign:'center',fontSize:15}}>
          Available our detailed document and top call support here.
          </Typography>
          <Button variant='contained' sx={{marginTop:2,}}>
            Check Document
          </Button>
          </Box>
          <Box sx={{textAlign:"center"}}>
          <Box component='img' src={github}></Box>
          <Typography variant='h5' component='h1' sx={{textAlign:'center'}}>
            GitHub
          </Typography>
          <Typography sx={{marginTop:2,fontSize:15}} component='p' variant='p' color='inherit'>
          Get latest feature, make pull request or bug fixes
          </Typography>
          <Button variant='contained' sx={{marginTop:2}}>
            Join on GitHub
          </Button>
          </Box>
          
          <Box sx={{textAlign:"center"}}>
          <Box component='img' src={slack}></Box>
          <Typography variant='h5' component='h1' sx={{textAlign:'center'}}>
            Slack
          </Typography>
          <Typography  component="p" variant='p'  sx={{marginTop:2,textAlign:'center',color:'inherit',fontSize:15}}>
          Share your idea and insights, for inspiration collaboration and great result.
          </Typography>
          <Button variant='contained' sx={{marginTop:2}}>
            Join Our Community
          </Button>
          </Box>
          </Box>
        </Container>
        <Banner2/>
    </ThemeProvider>
  )
}

export default Banner
