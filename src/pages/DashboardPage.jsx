// src/pages/DashboardPage.jsx
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRole } from '../contexts/RoleContext'; // Import useRole

const DashboardPage = () => {
  const { t } = useTranslation('common');
  const { currentRoleName } = useRole(); // Get current role name

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {currentRoleName} Dashboard {/* Display current role name */}
      </Typography>
      <Box>
        <Typography variant="body1">
          {t('welcomeMessage')} This is your main dashboard area for the{' '}
          {currentRoleName} role.
        </Typography>
        {/* Content for the dashboard will go here, and can be conditional on currentRole ID */}
      </Box>
    </Paper>
  );
};

export default DashboardPage;
