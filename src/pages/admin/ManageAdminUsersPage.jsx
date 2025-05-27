// src/pages/hr/ManageAdminUsersPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ManageAdminUsersPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.manageAdminUsers')}
      </Typography>
      <Typography variant="body1">
        Page content for managing admin users will go here.
      </Typography>
    </Paper>
  );
};
export default ManageAdminUsersPage;
