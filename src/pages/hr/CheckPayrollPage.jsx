// src/pages/hr/CheckPayrollPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const CheckPayrollPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.checkPayroll')}
      </Typography>
      <Typography variant="body1">
        Page content for checking a payroll will go here.
      </Typography>
    </Paper>
  );
};
export default CheckPayrollPage;
