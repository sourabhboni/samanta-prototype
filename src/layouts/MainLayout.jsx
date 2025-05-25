// src/layouts/MainLayout.jsx
import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/Header'; // Adjusted path
import Sidebar from '../components/Sidebar'; // Adjusted path

// This component will receive the actual page content as 'children'
const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3, // padding
          width: { sm: `calc(100% - ${240}px)` }, // 240px is our drawerWidth
        }}
      >
        <Toolbar /> {/* Necessary to offset content below the fixed AppBar */}
        {children} {/* This is where the routed page content will go */}
      </Box>
    </Box>
  );
};

export default MainLayout;
