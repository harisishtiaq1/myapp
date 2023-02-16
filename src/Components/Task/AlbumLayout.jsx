import { AppBar, Avatar, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import image from "./Image.jpg"

const nabar=['Home','Layouts','Apps','Customization','Features','Document']
function AlbumLayout() {
    const theme=createTheme()
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position="relative">
        <Toolbar>
        <Avatar alt="Haris" src={image} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default AlbumLayout