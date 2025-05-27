// src/pages/hr/ExportLogsPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExportLogsPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.exportLogs')}
      </Typography>
      <Typography variant="body1">
        Page content for exporting logs will go here.
      </Typography>
    </Paper>
  );
};
export default ExportLogsPage;
