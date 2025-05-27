// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation
import { useTranslation } from 'react-i18next';
import { useRole } from '../../contexts/RoleContext'; // Assuming this path is correct
import { roleNavigations } from '../../config/navigation'; // Import our new nav config
import { ROLES } from '../../config/roles'; // To get display name of current role if needed

const drawerWidth = 240;

const Sidebar = () => {
  const { t } = useTranslation('common');
  const { currentRole, currentRoleName } = useRole(); // Get currentRole ID and name
  const location = useLocation(); // To highlight the active link

  // ---- START DEBUG LOGS ----
  console.log('Sidebar - Current Role ID:', currentRole);
  console.log('Sidebar - roleNavigations object:', roleNavigations);
  console.log(
    'Sidebar - Attempting to access key in roleNavigations:',
    roleNavigations[currentRole]
  );
  // ---- END DEBUG LOGS ----
  const navItems = roleNavigations[currentRole] || [];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar /> {/* This is to offset content below the AppBar */}
      <Box sx={{ overflow: 'auto', padding: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: 2 }}
        >
          {currentRoleName || t('currentRole')}
        </Typography>
        <List>
          {navItems.map((item) => {
            const IconComponent = item.icon; // Step 1: Comment out icon logic for now
            return (
              <ListItemButton
                component={RouterLink}
                to={item.path}
                key={item.path}
                selected={location.pathname === item.path}
              >
                {IconComponent && (
                  <ListItemIcon>
                    <IconComponent />
                  </ListItemIcon>
                )}

                <ListItemText primary={t(item.labelKey)} />

                {/* <-- Use a static string */}
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
