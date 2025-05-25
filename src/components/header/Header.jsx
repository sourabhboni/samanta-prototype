// src/components/Header/Header.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Select, // For the dropdown
  MenuItem, // For dropdown items
  FormControl, // This is the one mentioned in the error
  InputLabel, // For the label of the dropdown
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRole } from '../../contexts/RoleContext'; // Import useRole
import MenuIcon from '@mui/icons-material/Menu'; // Example for a potential drawer toggle

// We'll pass a function to toggle the sidebar later
// const Header = ({ onDrawerToggle }) => {
const Header = () => {
  const { t, i18n } = useTranslation('common');
  const { currentRole, changeRole, availableRoles, currentRoleName } =
    useRole(); // Use the role context
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleRoleChange = (event) => {
    changeRole(event.target.value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('appTitle')}
        </Typography>

        {/* Role Switcher */}
        <FormControl sx={{ m: 1, minWidth: 180, marginRight: 2 }} size="small">
          <InputLabel id="role-select-label" sx={{ color: 'white' }}>
            Current Role
          </InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={currentRole}
            label="Current Role"
            onChange={handleRoleChange}
            sx={{
              color: 'white',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '.MuiSvgIcon-root': { color: 'white' },
            }}
          >
            {availableRoles.map((role) => (
              <MenuItem key={role.id} value={role.id}>
                {t(role.id.toLowerCase())}{' '}
                {/* Using t function for role names if defined in common.json like hrManager, employee */}
                {/* Or use role.name directly: {role.name} */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box>
          <Button
            sx={{ color: 'white' }}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </Button>
          <Button
            sx={{ color: 'white' }}
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
