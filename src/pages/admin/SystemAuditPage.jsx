// src/pages/hr/SystemAuditPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SystemAuditPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.systemAudit')}
      </Typography>
      <Typography variant="body1">
        Page content for submitting an audit will go here.
      </Typography>
    </Paper>
  );
};
export default SystemAuditPage;
