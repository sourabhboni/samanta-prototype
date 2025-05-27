// src/layouts/MainLayout.jsx
import React from 'react';
import { Box, Toolbar } from '@mui/material'; // Toolbar is needed for spacing here too
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { DRAWER_WIDTH } from '../config/layoutConstants'; // Use shared constant

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {' '}
      {/* This flex container is key */}
      <Header /> {/* Renders the AppBar, which is position: fixed */}
      <Sidebar /> {/* Renders the Drawer, which is variant: permanent */}
      <Box
        component="main"
        sx={(theme) => ({
          // Added theme access for consistency
          flexGrow: 1, // Takes up remaining space
          p: theme.spacing(3), // Padding around the content
          // marginLeft: `${DRAWER_WIDTH}px`, // This is NOT needed if Sidebar is not 'fixed' or 'absolute'
          // and AppBar is fixed & Drawer is permanent (standard variant)
          // The Drawer with variant="permanent" will occupy its space.
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }, // Adjust width for the sidebar
          mt: theme.mixins.toolbar.minHeight
            ? `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(1)})`
            : '64px', // Ensure content starts below AppBar
          // The above mt can be simplified if you know your AppBar height or just use <Toolbar />
        })}
      >
        {/* This Toolbar component is a standard way to create space for the AppBar 
          when the AppBar is position="fixed".
        */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
