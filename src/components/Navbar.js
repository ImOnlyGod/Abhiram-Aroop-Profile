import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Abhiram Aroop
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Resume</Button>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 