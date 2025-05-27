// src/components/Header/Header.jsx
import React from 'react';
import { alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  // IconButton, // We're not using a menu icon to toggle a temporary drawer currently
  // MenuIcon,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRole } from '../../contexts/RoleContext';
// We removed direct theme import, using sx callback instead

const Header = () => {
  const { t, i18n } = useTranslation('common');
  const { currentRole, changeRole, availableRoles } = useRole();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleRoleChange = (event) => {
    changeRole(event.target.value);
  };

  return (
    <AppBar
      position="fixed" // This makes it stay at the top
      sx={(theme) => ({
        // The zIndex ensures Header is above the Sidebar
        zIndex: theme.zIndex.drawer + 1,
        // Global MuiAppBar overrides in theme.js handle background, elevation, border
      })}
    >
      <Toolbar>
        {/* Application Title - on the left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('appTitle')}
        </Typography>

        {/* Role Switcher */}
        <FormControl sx={{ m: 1, minWidth: 180, marginRight: 2 }} size="small">
          <InputLabel
            id="role-select-label"
            sx={(theme) => ({
              color:
                theme.palette.commonColors?.onSurfaceVariant ||
                theme.palette.text.secondary,
            })}
          >
            {t('currentRole')}
          </InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={currentRole}
            label={t('currentRole')}
            onChange={handleRoleChange}
            sx={(theme) => ({
              color: theme.palette.commonColors?.onSurface,
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: alpha(
                  theme.palette.commonColors?.onSurface || '#000000',
                  0.23
                ),
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: alpha(
                  theme.palette.commonColors?.onSurface || '#000000',
                  0.5
                ),
              },
              '.MuiSvgIcon-root': {
                color:
                  theme.palette.commonColors?.onSurfaceVariant ||
                  theme.palette.text.secondary,
              },
            })}
          >
            {availableRoles.map((role) => (
              <MenuItem key={role.id} value={role.id}>
                {t(role.id.toLowerCase())}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Language Buttons */}
        <Box>
          <Button
            sx={(theme) => ({
              color:
                theme.palette.commonColors?.onSurface ||
                theme.palette.text.primary,
            })}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </Button>
          <Button
            sx={(theme) => ({
              color:
                theme.palette.commonColors?.onSurface ||
                theme.palette.text.primary,
            })}
            onClick={() => handleLanguageChange('es')}
          >
            ES
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
