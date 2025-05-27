// src/pages/hr/ApproveLeavePage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ApproveLeavePage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.approveLeave')}
      </Typography>
      <Typography variant="body1">
        Page content for approving a leave will go here.
      </Typography>
    </Paper>
  );
};
export default ApproveLeavePage;
