import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, createTheme, Link, ThemeProvider, Slide,Avatar } from '@mui/material';
import main from "./main.png"
import Banner from "./Banner"
function AlbumLayout() {
    const theme=createTheme();
    const [checked, setChecked] = React.useState(true);
    const handleChange = () => {
    setChecked((prev) => prev);
  };
  React.useEffect(()=>{
    handleChange();
  },[])
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <main>
    <Box
          sx={{
            bgcolor: '#1976D2',
            pt: 6,
            pb: 6,
            display:'flex'
          }}
        >
            <Slide direction="right" in={checked} style={{transformOrigin:'0 0 0'}}
    {...(checked ? {timeout:1000}:{})}>
            <Container sx={{ml:12}}>
                
            <Typography
              component="div"
              variant="h3"
              color="white"
              width={346}
              sx={{mt:10}}
            >
              Start a new Project with Crema Mui
            </Typography>
            <Typography
                component="div"
                variant='h5'
                color='white'
                sx={{mt:5}}
                width={500}>
                    Our creatively crafted products keep you moving faster in this digital space.
            </Typography>
            <Box sx={{display:'flex'}}>
            <Avatar sx={{marginLeft:2,mt:2,width: 40, height: 40}}></Avatar>
            <Avatar sx={{marginLeft:2,mt:2,width: 40, height: 40}}></Avatar>
            <Avatar sx={{marginLeft:2,mt:2,width: 40, height: 40}}></Avatar>
            <Avatar sx={{marginLeft:2,mt:2,width: 40, height: 40}}></Avatar>
            <Avatar sx={{marginLeft:2,mt:2,width: 40, height: 40}}></Avatar>
            </Box>
            <Box sx={{mt:2,ml:5}}>
            <Button variant="contained" sx={{bgcolor:"red",mr:2}}>Live Preview</Button>
            <Button variant="contained">Docs</Button>
            </Box>
            </Container>
            </Slide>
            <Slide direction="up" in={checked} style={{transformOrigin:'0 0 0'}}
    {...(checked ? {timeout:1000}:{})}>
            <Box component="img" alt='img' sx={{width:600,height:400,mr:10,mt:5}} src={main}></Box>
            </Slide>
            </Box>
            
    </main>
    <Banner/>
    </ThemeProvider>
    
  );
}

export default AlbumLayout;