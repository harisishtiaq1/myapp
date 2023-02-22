import {
  Box,
  Button,
  Slide,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  keyframes,
} from "@mui/material";
import React from "react";
import documentation from "./img/documentation.svg";
import slack from "./img/slack.svg";
import github from "./img/git-hub.svg";
import { styled } from "@mui/system";
const slideBottom = keyframes`
0% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
          opacity:0
}
100% {
  -webkit-transform: translateY(100px);
          transform: translateY(100px);
          opacity:1 
}
`;

const Holder = styled(Typography)(({ roll }) => ({
  visibility: !roll && "hidden",
  animation: roll && `${slideBottom} 1s ease-out both`,
}));

const Banner = ({ bottomRef }) => {
  const theme = createTheme();
  const [roll, setRoll] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setRoll(true);
    }, 500);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ textAlign: "center" }} ref={bottomRef}>
        <Holder roll={roll}>
          <Typography
            component="h5"
            sx={{ color: "#01579b", fontWeight: "bold" }}
          >
            CREMA MUI
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            Crema MUI is a great kick-starter
          </Typography>
        </Holder>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: 20,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} sm={12} lg={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box component="img" src={documentation}></Box>
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{ textAlign: "center" }}
                >
                  Documentation
                </Typography>
                <Typography
                  sx={{ marginTop: 2, textAlign: "center", fontSize: 15 }}
                >
                  Available our detailed document and top call support here.
                </Typography>
                <Button variant="contained" sx={{ marginTop: 2 }}>
                  Check Document
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box component="img" src={github}></Box>
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{ textAlign: "center" }}
                >
                  GitHub
                </Typography>
                <Typography
                  sx={{ marginTop: 2, fontSize: 15 }}
                  component="p"
                  variant="p"
                  color="inherit"
                >
                  Get latest feature, make pull request or bug fixes
                </Typography>
                <Button variant="contained" sx={{ marginTop: 4 }}>
                  Join on GitHub
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box component="img" src={slack}></Box>
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{ textAlign: "center" }}
                >
                  Slack
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    marginTop: 2,
                    textAlign: "center",
                    color: "inherit",
                    fontSize: 15,
                  }}
                >
                  Share your idea and insights, for inspiration collaboration
                  and great result.
                </Typography>
                <Button variant="contained" sx={{ marginTop: 2 }}>
                  Join Our Community
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Banner;
