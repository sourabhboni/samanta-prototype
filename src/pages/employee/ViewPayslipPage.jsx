// src/pages/employee/ViewPayslipPage.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ViewPayslipPage = () => {
  const { t } = useTranslation('common');
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.viewPayslip')}
      </Typography>
      <Typography variant="body1">
        Page content for viewing payslips will go here.
      </Typography>
    </Paper>
  );
};
export default ViewPayslipPage;
