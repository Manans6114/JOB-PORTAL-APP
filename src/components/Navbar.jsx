import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: darkMode ? 'var(--appbar-bg)' : '#ADD8E6' }}>
            <Toolbar variant="dense">
              <Typography 
                variant="h4" 
                align='Left' 
                component="div" 
                sx={{ 
                  flexGrow: 1, 
                  fontFamily: "revert", 
                  fontSize: "500", 
                  color: darkMode ? 'var(--text-color)' : 'black' 
                }}
              >
                Job Portal
              </Typography>

              <Box sx={{ m: 0.5, mx: 'auto', width: 80 }}>
                <Button 
                  variant="outlined" 
                  href='http://localhost:3000'
                  sx={{ 
                    color: darkMode ? 'var(--button-text)' : 'inherit',
                    borderColor: darkMode ? 'var(--button-border)' : 'inherit'
                  }}
                >
                  Home
                </Button>
              </Box>
              <Box sx={{ m: 0.5, mx: 'auto', width: 100 }}>
                <Button 
                  variant="outlined" 
                  href='http://localhost:3000/create'
                  sx={{ 
                    color: darkMode ? 'var(--button-text)' : 'inherit',
                    borderColor: darkMode ? 'var(--button-border)' : 'inherit'
                  }}
                >
                  Add Job
                </Button>
              </Box>
              <Box sx={{ m: 0.5, mx: 'auto', width: 180 }}>
                <Button 
                  variant="outlined" 
                  href='https://telusko.com/'
                  sx={{ 
                    color: darkMode ? 'var(--button-text)' : 'inherit',
                    borderColor: darkMode ? 'var(--button-border)' : 'inherit'
                  }}
                >
                  Contact Us
                </Button>
              </Box>
              <IconButton 
                sx={{ ml: 1 }} 
                onClick={toggleTheme} 
                color="inherit"
                aria-label="Toggle light/dark theme"
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid item xs={12} sx={12} md={12} lg={12}>
      </Grid>
    </div>
  );
};

export default Navbar;