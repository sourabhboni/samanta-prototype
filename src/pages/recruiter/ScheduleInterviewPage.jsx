// src/pages/hr/ScheduleInterviewPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ScheduleInterviewPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.scheduleInterview')}
      </Typography>
      <Typography variant="body1">
        Page content for scheduling an interview will go here.
      </Typography>
    </Paper>
  );
};
export default ScheduleInterviewPage;
