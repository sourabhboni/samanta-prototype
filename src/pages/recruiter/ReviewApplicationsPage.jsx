// src/pages/hr/ReviewApplicationsPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ReviewApplicationsPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.reviewApplications')}
      </Typography>
      <Typography variant="body1">
        Page content for reviewing applications will go here.
      </Typography>
    </Paper>
  );
};
export default ReviewApplicationsPage;
