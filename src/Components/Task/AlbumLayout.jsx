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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, createTheme, Link, ThemeProvider, Slide } from '@mui/material';
import logo from "./download.png"

const drawerWidth = 240;
const navItems = ['Home', 'Layouts', 'Apps','Customization','Features','Documents'];

function AlbumLayout() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = () => {
    setChecked((prev) => !prev);
  };
  React.useEffect(()=>{
    handleChange()
  })
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
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
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
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Container>
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
        <Box component='img' alt='img' sx={{height:35}} src={logo}></Box>
        </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
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
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Slide>
    </Box>
    </Container>
    <main>
    <Box
          sx={{
            bgcolor: '#1976D2',
            pt: 6,
            pb: 6,
          }}
        >
            <Container>
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
            </Container>
            </Box>
    </main>
    </ThemeProvider>
  );
}

export default AlbumLayout;