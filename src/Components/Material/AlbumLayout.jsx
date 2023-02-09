import { AppBar, Button, Card, Container, createTheme, CssBaseline, Grid, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material'
import CameraIcon from '@mui/icons-material/PhotoCamera';
import React from 'react'
import { size } from './AlbumLayout1';
import {set} from "./AlbumLayout1"
import haris from "./img/Image.jpg"
import {CardMedia,CardContent,CardActions} from '@mui/material';
import { Box } from '@mui/system';
const AlbumLayout = () => {
    const cards=[1,2,3,4,5,6,7,8,9]
    const theme=createTheme();
  return (
<ThemeProvider theme={theme}>
    <CssBaseline/>
    <AppBar position='relative'
    >
        <Toolbar>
            <CameraIcon sx={set}/>
            <Typography variant='h6' color="inherit" noWrap>
                Album Layout
            </Typography>
        </Toolbar>
    </AppBar>
<main>
    <Box
    sx={size}>
        <Container maxWidth="sm">
        <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom>
   Album Layout
        </Typography>
        <Typography
        paragraph
        align="center"
        variant='h5'
        color="text.secondary">
        Something short and leading about the collection below—its contents, the creator, etc. 
        Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        </Typography>
        <Stack
        sx={{pt:4}}
        direction="row"
        justifyContent="center"
        spacing={5}>

        <Button variant='contained' color='secondary'>Make Call to Action</Button>
        <Button variant='outlined' color='success'>Secondary Action</Button>
        </Stack>
        </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    img src={haris}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hello
                    </Typography>
                    <Typography>
                      My Name Is Muhammad Haris ishtiaq And I am a Mern Stack developer and this page is made using Material UI.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
</main>
<Box component="footer"sx={{bgcolor:"background.paper",p:6}} >
    <Typography
    align='center'
    variant='h5'
    component='p'
    color="text.secondary"
    >
        Footer
    </Typography>
    <Typography
    align='center'
    sx={{mt:3}}
    component="p"
    variant="subtitle1"
    color="text.secondary">
    Something here to give the footer a purpose</Typography>
</Box>
</ThemeProvider>
  )
}

export default AlbumLayout
