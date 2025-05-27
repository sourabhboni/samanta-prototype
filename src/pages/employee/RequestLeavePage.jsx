// src/pages/employee/RequestLeavePage.jsx
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Snackbar,
  useTheme,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RequestLeavePage = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();

  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const resetForm = () => {
    setLeaveType('');
    setStartDate(null);
    setEndDate(null);
    setReason('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!leaveType || !startDate || !endDate) {
      setSnackbarMessage(
        t(
          'leave.error.requiredFields',
          'Please fill all required fields (Leave Type, Start Date, End Date).'
        )
      );
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    if (endDate && startDate && endDate.isBefore(startDate, 'day')) {
      setSnackbarMessage(
        t(
          'leave.error.endDateBeforeStart',
          'End date cannot be before start date.'
        )
      );
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    const formData = {
      leaveType,
      startDate: startDate ? startDate.format('YYYY-MM-DD') : null,
      endDate: endDate ? endDate.format('YYYY-MM-DD') : null,
      reason,
    };
    console.log('Mock Leave Request Submission:', formData);
    setTimeout(() => {
      setSnackbarMessage(
        t(
          'leave.success.requestSubmitted',
          'Leave request submitted successfully!'
        )
      );
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      resetForm();
    }, 1000);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: { xs: theme.spacing(2), sm: theme.spacing(3) },
        // maxWidth: 600, // Removed maxWidth to allow it to be wider
        margin: `${theme.spacing(2)} 0`, // Margin top/bottom, no horizontal auto margin
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ mb: theme.spacing(3), textAlign: 'left' }}
      >
        {' '}
        {/* textAlign: 'left' */}
        {t('nav.requestLeave')}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(3),
        }}
      >
        <FormControl fullWidth required variant="outlined">
          <InputLabel id="leave-type-label">
            {t('leave.type', 'Leave Type')}
          </InputLabel>
          <Select
            labelId="leave-type-label"
            id="leave-type-select"
            value={leaveType}
            label={t('leave.type', 'Leave Type')}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <MenuItem value="">
              <em>{t('leave.selectType', 'Select type...')}</em>
            </MenuItem>
            <MenuItem value="annual">
              {t('leave.annual', 'Annual Leave')}
            </MenuItem>
            <MenuItem value="sick">{t('leave.sick', 'Sick Leave')}</MenuItem>
            <MenuItem value="unpaid">
              {t('leave.unpaid', 'Unpaid Leave')}
            </MenuItem>
            <MenuItem value="other">{t('leave.other', 'Other')}</MenuItem>
          </Select>
        </FormControl>

        <DatePicker
          label={t('leave.startDate', 'Start Date')}
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          slotProps={{
            textField: { fullWidth: true, required: true, variant: 'outlined' },
          }}
        />

        <DatePicker
          label={t('leave.endDate', 'End Date')}
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          slotProps={{
            textField: { fullWidth: true, required: true, variant: 'outlined' },
          }}
          minDate={startDate}
        />

        <TextField
          label={t('leave.reason', 'Reason (Optional)')}
          multiline
          rows={4}
          fullWidth
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          variant="outlined"
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            {t('leave.submitRequest', 'Submit Request')}
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default RequestLeavePage;
