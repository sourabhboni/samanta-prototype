// src/pages/employee/RequestLeavePage.jsx
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert'; // For styled alerts in Snackbar
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
// import dayjs from 'dayjs'; // Only needed if you are doing complex dayjs operations here. DatePicker handles it.

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RequestLeavePage = () => {
  const { t } = useTranslation('common'); // Assuming 'common' namespace

  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState(null); // Use null for DatePicker initial value
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success', 'error', 'warning', 'info'

  const resetForm = () => {
    setLeaveType('');
    setStartDate(null);
    setEndDate(null);
    setReason('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
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
    // Ensure endDate is not before startDate. DatePicker value is a dayjs object if using AdapterDayjs.
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

    // Simulate API call
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
    }, 1000); // 1-second delay
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 700, margin: 'auto' }}>
      {' '}
      {/* Added maxWidth and margin for better form appearance */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        {t('nav.requestLeave')}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth required>
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
                <MenuItem value="sick">
                  {t('leave.sick', 'Sick Leave')}
                </MenuItem>
                <MenuItem value="unpaid">
                  {t('leave.unpaid', 'Unpaid Leave')}
                </MenuItem>
                <MenuItem value="other">{t('leave.other', 'Other')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <DatePicker
              label={t('leave.startDate', 'Start Date')}
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label={t('leave.endDate', 'End Date')}
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              slotProps={{ textField: { fullWidth: true, required: true } }}
              minDate={startDate} // Ensures end date is not before start date
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('leave.reason', 'Reason (Optional)')}
              multiline
              rows={4}
              fullWidth
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              {t('leave.submitRequest', 'Submit Request')}
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* Snackbar for notifications */}
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
