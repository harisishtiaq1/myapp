import React from 'react'
import image from "./img/image.png"
import { CardMedia,Button,CardHeader,CardContent,CardActions,Typography,Card, createTheme, ThemeProvider, CssBaseline, Container, Grid, Box } from '@mui/material'
const Banner2 = () => {
    const theme=createTheme();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
            <Grid container spacing={2} sx={{mt:3}}>
            <Grid xs={8}>
            <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-1 Default
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-1 Default
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-2 Mini Sidebar Toggle
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-3 Mini Sidebar
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-4 Header User
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-5 Standard
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-6 Header User Mini
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-7 Drawer
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-8 Bit Bucket
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-9 Horizontal Default
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-10 Horizontal light Nav
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ marginTop:5 }}>
      <CardMedia
        sx={{ width:'100%',width:1000,height:400 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Layout-11 Horizontal Dark Layout
        </Typography>
      </CardContent>
    </Card>
            </Grid>
            <Grid xs={4} sx={{position:'sticky',top:'2rem',alignSelf:"start"}} >
            <Typography sx={{marginLeft:5,mt:7,mb:0,fontWeight:'bold',color:'#0090F1'}}>
                Award-Winning Design Best Collection
            </Typography>
            <Typography component='h1' variant='h5' sx={{marginLeft:5,mt:3,fontWeight:'bold'}}>
            Best-in-class designs to get you started.
            </Typography>
            <Typography component='p' variant='p' sx={{marginLeft:5,mt:3,color:'#9e9e9e'}}>
            Crama has a powerful layout system which allows you to configure, customize and also create you own layout.
            </Typography>
            <Box sx={{ml:5,mt:3}}>
            <Button variant='contained' sx={{mr:3,backgroundColor:'#0090F1'}}>Buy Now</Button>
            <Button variant='contained' sx={{backgroundColor:'#FFFFFF',color:'#0090F1'}}>Learn More</Button>
            </Box>
            </Grid>
            </Grid>
        </Container>
    </ThemeProvider>
  )
}

export default Banner2
