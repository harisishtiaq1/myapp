import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Container,
  createTheme,
  ThemeProvider,
  Slide,
  Grid,
  keyframes,
} from "@mui/material";
import main from "./img/main.png";
import figma from "./img/figma.svg";
import next from "./img/nextjs.svg";
import javascript from "./img/js.svg";
import mui from "./img/mui-with-bg.svg";
import typescript from "./img/ts.svg";
import backimg from "./img/backpic.jpeg";
import { styled } from "@mui/system";
import Banner from "./Banner";
import Banner1 from "./Banner2";
const styles = {
  paperContainer: {
    backgroundImage: `url(${backimg})`,
    backgroundSize: `cover`,
  },
};
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
const Holder = styled(Grid)(({ roll }) => ({
  visibility: !roll && "hidden",
  animation: roll && `${slideTop} 1s ease-out both`,
}));
function AlbumLayout({ bottomRef, topRef }) {
  const theme = createTheme();
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => prev);
  };
  React.useEffect(() => {
    handleChange();
  }, []);
  const [roll, setRoll] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setRoll(true);
    }, 500);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            pt: 6,
            pb: 6,
          }}
          style={styles.paperContainer}
          ref={topRef}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", backgroundColor: "#eee" }}
          >
            <Grid item md={6}>
              <Slide
                direction="right"
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Container sx={{ ml: 13 }}>
                  <Typography
                    component="div"
                    variant="h3"
                    color="white"
                    width={346}
                  >
                    Start a new Project with Crema Mui
                  </Typography>
                  <Typography
                    component="div"
                    variant="h5"
                    color="white"
                    sx={{ mt: 5 }}
                    width={500}
                  >
                    Our creatively crafted products keep you moving faster in
                    this digital space.
                  </Typography>
                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box component="img" src={figma} sx={{ mr: 2 }} />
                    <Box component="img" src={next} sx={{ mr: 2 }} />
                    <Box component="img" src={javascript} sx={{ mr: 2 }} />
                    <Box component="img" src={mui} sx={{ mr: 2 }} />
                    <Box component="img" src={typescript} />
                  </Box>
                  <Box sx={{ mt: 2, ml: 5 }}>
                    <Button variant="contained" sx={{ bgcolor: "red", mr: 2 }}>
                      Live Preview
                    </Button>
                    <Button variant="contained">Docs</Button>
                  </Box>
                </Container>
              </Slide>
            </Grid>
            <Grid
              item
              md={6}
              lg={6}
              xl={6}
              sx={{
                background: "pink",
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
              >
              <Holder roll={roll}>
                <Box
                  component="img"
                  alt="img"
                  sx={{
                    width: 600,
                    height: 400,
                    // width: {
                    //   xs: 100,
                    //   sm: 200,
                    //   md: 300,
                    //   lg: 400,
                    //   xl: 500,
                    // },
                  }}
                  src={main}
                />
              </Holder>
            </Grid>
          </Grid>
        </Box>
      </main>
      <Banner bottomRef={bottomRef} />
      <Banner1 />
    </ThemeProvider>
  );
}

export default AlbumLayout;
