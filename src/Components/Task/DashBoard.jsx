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
const styles = {
  paperContainer: {
    backgroundImage: `url(${backimg})`,
    backgroundSize: `cover`,
    width: "fit-content",
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
const Holder = styled(Box)(({ roll }) => ({
  visibility: !roll && "hidden",
  animation: roll && `${slideTop} 1s ease-out both`,
}));
function AlbumLayout({ topRef }) {
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
          <Grid container spacing={2} sx={{ display: "flex", mt: 10 }}>
            <Grid item md={4} xs={12} sm={12} lg={4}>
              <Slide
                direction="right"
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Container
                  sx={{
                    ml: {
                      lg: 12,
                    },
                  }}
                >
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
                    sx={{ mt: 5, width: {} }}
                  >
                    Our creatively crafted products keep you moving faster in
                    this digital space.
                  </Typography>
                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box component="img" src={figma} sx={{ mr: 1 }} />
                    <Box component="img" src={next} sx={{ mr: 1 }} />
                    <Box component="img" src={javascript} sx={{ mr: 1 }} />
                    <Box component="img" src={mui} sx={{ mr: 1 }} />
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
              md={8}
              lg={8}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Holder roll={roll}>
                <Box
                  component="img"
                  alt="img"
                  sx={{
                    mt: 4,
                    pt: 5,
                    marginTop: {
                      xs: 10,
                      sm: 10,
                      md: 10,
                      lg: 10,
                      xl: 10,
                    },
                    width: {
                      xs: 300,
                      sm: 500,
                      md: 500,
                      lg: 600,
                      xl: 600,
                    },
                  }}
                  src={main}
                />
                {/* </Box> */}
              </Holder>
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default AlbumLayout;
