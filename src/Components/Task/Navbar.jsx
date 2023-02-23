import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import {
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Slide,
} from "@mui/material";
import logo from "./img/download.png";
import transition from "./img/Transition.png";

const drawerWidth = 200;
const navItems = [
  "Home",
  "Layouts",
  "Apps",
  "Customization",
  "Features",
  "Documents",
];

function AlbumLayout({ executeScroll, executeScroll1 }) {
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  React.useEffect(() => {
    changeNavbarColor();
    document.addEventListener("scroll", setColorchange);
  });
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => prev);
  };
  React.useEffect(() => {
    handleChange();
  }, []);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = createTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Box component="img" alt="img" sx={{ height: 35 }} src={logo}></Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            component="nav"
            wrap
            sx={{
              position: "fixed",
              background: "transparent",
              boxShadow: "none",
              backgroundColor: colorChange ? "#fff" : "transparent",
            }}
          >
            <Container>
              <Slide
                direction="down"
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Toolbar
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Link href="/">
                    <Box
                      component="img"
                      alt="img"
                      sx={{ height: 35 }}
                      src={colorChange ? transition : logo}
                    ></Box>
                  </Link>
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Link
                      color="#f50057"
                      sx={{
                        mr: 3,
                        my: 2,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: colorChange ? "black" : "white",
                        ":hover": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":focus": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":active": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                      }}
                      onClick={executeScroll}
                    >
                      Home
                    </Link>
                    <Link
                      sx={{
                        mr: 3,
                        my: 2,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: colorChange ? "black" : "white",
                        ":hover": {
                          buttonShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":focus": {
                          boxShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                          borderColor: "none",
                          border: "none",
                        },
                        ":active": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                      }}
                      onClick={executeScroll1}
                    >
                      layouts
                    </Link>
                    <Link
                      sx={{
                        my: 2,
                        mr: 3,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: colorChange ? "black" : "white",
                        ":hover": {
                          buttonShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":focus": {
                          boxShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                          borderColor: "none",
                          border: "none",
                        },
                        ":active": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                      }}
                    >
                      Apps
                    </Link>
                    <Link
                      sx={{
                        my: 2,
                        mr: 3,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: colorChange ? "black" : "white",
                        ":hover": {
                          buttonShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":focus": {
                          boxShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                          borderColor: "none",
                          border: "none",
                        },
                        ":active": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                      }}
                    >
                      Customization
                    </Link>
                    <Link
                      sx={{
                        my: 2,
                        mr: 3,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: colorChange ? "black" : "white",
                        ":hover": {
                          buttonShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":focus": {
                          boxShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                          borderColor: "none",
                          border: "none",
                        },
                        ":active": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                      }}
                    >
                      Feature
                    </Link>
                    <Link
                      sx={{
                        my: 2,
                        mr: 3,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: colorChange ? "black" : "white",
                        ":hover": {
                          buttonShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                        ":focus": {
                          boxShadow: "disable",
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                          borderColor: "none",
                          border: "none",
                        },
                        ":active": {
                          color: colorChange ? "red" : "rgb(237, 205, 55)",
                        },
                      }}
                    >
                      Documents
                    </Link>
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
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default AlbumLayout;
