// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import {
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink
import { ListItemButton } from '@mui/material'; // Use ListItemButton for clickable items

// We can define a drawer width
const drawerWidth = 240;

const Sidebar = () => {
  const { t } = useTranslation('common');

  return (
    <Drawer
      variant="permanent" // Or "temporary" if you want it to be toggleable
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar /> {/* This is to offset content below the AppBar */}
      <Box sx={{ overflow: 'auto', padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          {t('currentRole')} {/* Placeholder for Role Selection */}
        </Typography>
        <List>
          <ListItemButton component={RouterLink} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/profile">
            <ListItemText primary="User Profile" />
          </ListItemButton>
          {/* Placeholder for future role-based navigation items */}
          <ListItemButton component={RouterLink} to="/some-other-page">
            {' '}
            {/* Test 404 */}
            <ListItemText primary="Test 404 Page" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
