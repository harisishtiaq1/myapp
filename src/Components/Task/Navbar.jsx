import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Main from "./Main"
import { Container, createTheme, Link, ThemeProvider, Slide,Avatar, Typography } from '@mui/material';
import logo from "./download.png"
import transition from "./Transition.png"

const drawerWidth = 240;
const navItems = ['Home', 'Layouts', 'Apps','Customization','Features','Documents'];

function AlbumLayout() {
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 1){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  React.useEffect(()=>{
    changeNavbarColor();
    document.addEventListener("scroll",setColorchange)
  },)
    const [checked, setChecked] = React.useState(true);
    const handleChange = () => {
    setChecked((prev) => prev);
  };
  React.useEffect(()=>{
    handleChange();
  },[])
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme=createTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href='/'>
        <Box component='img' alt='img' sx={{height:35}} src={logo}></Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding
          sx={{
            color:"red",
            backgroundColor:"red",
          }} 
          >
            <ListItemButton sx={{ textAlign: 'center' , backgroundColor:"red"}}>
              <ListItemText primary={item} 
             />
             <Typography
             variant='h1'
             sx={{
              backgroundColor:"red"
             }}
             >
             {item}
             </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Container>
    <Box sx={{ display: 'flex'}}
    >
      <CssBaseline />
      <AppBar component="nav" Wrap sx={
        {
          position:'absolute',
          position:'fixed',
          background:'transparent',
          boxShadow:'none',
          backgroundColor: colorChange ? "#fff" :"transparent"
        }
      }>
        <Container>
        <Slide direction="down" in={checked} style={{transformOrigin:'0 0 0'}}
    {...(checked ? {timeout:1000}:{})}>
        <Toolbar sx={{ display: 'flex',justifyContent:'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
        <Box component='img' alt='img' sx={{height:35}} src={colorChange? transition : logo}></Box>
        </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        </Slide>
        </Container>
      </AppBar>
      <Box component="nav">
        
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: colorChange ? "#fff" :"transparent"
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </Container>
    <Main/>
    </ThemeProvider>
  );
}

export default AlbumLayout;