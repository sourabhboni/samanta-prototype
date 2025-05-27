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
  useTheme,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRole } from '../../contexts/RoleContext';
import { roleNavigations } from '../../config/navigation';
import { DRAWER_WIDTH } from '../../config/layoutConstants'; // Use shared constant

const Sidebar = () => {
  const { t } = useTranslation('common');
  const { currentRole, currentRoleName } = useRole();
  const location = useLocation();
  const theme = useTheme();

  const navItems = roleNavigations[currentRole] || [];

  return (
    <Drawer
      variant="permanent" // This makes it always visible
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0, // Ensures it doesn't shrink when content grows
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          // Global MuiDrawer override in theme.js should handle backgroundColor and borderRight
        },
      }}
    >
      {/* This Toolbar acts as a spacer to push content below the fixed AppBar */}
      <Toolbar />
      <Box
        sx={{ overflow: 'auto', py: theme.spacing(2), px: theme.spacing(1) }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: theme.spacing(2.5),
            px: theme.spacing(1),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.h6.fontWeight,
          }}
        >
          {currentRoleName || t('currentRole')}
        </Typography>
        <List sx={{ p: 0 }}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isSelected =
              location.pathname === item.path ||
              (item.path !== '/' &&
                location.pathname.startsWith(item.path + '/'));

            return (
              <ListItemButton
                component={RouterLink}
                to={item.path}
                key={item.path}
                selected={isSelected}
                sx={{
                  py: theme.spacing(1),
                  px: theme.spacing(2.5),
                  mb: theme.spacing(0.5),
                  borderRadius: theme.shape.borderRadius,
                  mx: theme.spacing(1),
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                    // borderLeft: `4px solid ${theme.palette.primary.main}`, // Example if you want left border
                    // borderRight: 'none', // Then remove right border from global theme for selected
                    '.MuiListItemIcon-root': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                {IconComponent && (
                  <ListItemIcon
                    sx={{
                      minWidth: 'auto',
                      mr: theme.spacing(1.5),
                      color: isSelected
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                    }}
                  >
                    <IconComponent fontSize="small" />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={t(item.labelKey)}
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontWeight: isSelected
                      ? theme.typography.fontWeightMedium
                      : theme.typography.fontWeightRegular,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
