import React from "react";
import { useState } from "react";
import image from "./img/image.png";
import {
  CardMedia,
  Button,
  CardContent,
  Typography,
  Card,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Box,
  Slide,
  keyframes
} from "@mui/material";
import { styled } from "@mui/system";
const slideTop = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity:0;
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
            opacity:1;
  }`;
const Holder = styled(Box)(({ roll }) => ({
  visibility: !roll && "hidden",
  animation: roll && `${slideTop} 1s ease-out both`,
}));
const Banner2 = () => {
  const theme = createTheme();
  const myRef=React.useRef();
  const [ myElement, setMyElement]  = useState();
  console.log("myElement", myElement);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setMyElement(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target); 

    });
    observer.observe(myRef.current);

  },{
    threshold:1
  } [myRef]);
  
  const [roll, setRoll] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setRoll(true);
    }, 500);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        
        <Grid
          container
          spacing={2}
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Grid xs={12} lg={8} sx={{
            mt: {
              xs:10,
              md:3
            },
          }}>
          <Holder roll={myElement ? roll : ""} ref={myRef}>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-1 Default
                </Typography>
              </CardContent>
            </Card>
            </Holder>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-2 Mini Sidebar Toggle
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-3 Mini Sidebar
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-4 Header User
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-5 Standard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-6 Header User Mini
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-7 Drawer
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-8 Bit Bucket
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-9 Horizontal Default
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-10 Horizontal light Nav
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 5 }}>
              <CardMedia
                sx={{ width: "100%", width: 1000, height: 400 }}
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Layout-11 Horizontal Dark Layout
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            xs={12}
            lg={4}
            sx={{
              position: { xs: "unset", md: "sticky" },
              top: "2rem",
              alignSelf: "start",
              alignSelf: {
                xs: "start",
              },
              justifySelf: {
                xs: "start",
              },
            }}
          >
            <Typography
              sx={{
                marginLeft: 5,
                mb: 0,
                fontWeight: "bold",
                color: "#0090F1",
              }}
            >
              Award-Winning Design Best Collection
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{ marginLeft: 5, mt: 3, fontWeight: "bold" }}
            >
              Best-in-class designs to get you started.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ marginLeft: 5, mt: 3, color: "#9e9e9e" }}
            >
              Crama has a powerful layout system which allows you to configure,
              customize and also create you own layout.
            </Typography>
            <Box sx={{ ml: 5, mt: 3 }}>
              <Button
                variant="contained"
                sx={{ mr: 3, backgroundColor: "#0090F1" }}
              >
                Buy Now
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FFFFFF", color: "#0090F1" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Banner2;
