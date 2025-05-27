// src/pages/hr/PostJobPage.jsx
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Box,
  Snackbar,
} from '@mui/material'; // Import Snackbar
import MuiAlert from '@mui/material/Alert'; // For styled alerts in Snackbar
import { useTranslation } from 'react-i18next';

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PostJobPage = () => {
  const { t } = useTranslation('common');

  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const resetForm = () => {
    setJobTitle('');
    setDepartment('');
    setLocation('');
    setJobDescription('');
    setRequirements('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation example
    if (!jobTitle || !department || !location || !jobDescription) {
      setSnackbarMessage(
        t('job.error.requiredFields', 'Please fill all required job fields.')
      );
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    const formData = {
      jobTitle,
      department,
      location,
      jobDescription,
      requirements,
    };
    console.log('Mock Job Posting Submission:', formData);

    // Simulate API call
    setTimeout(() => {
      setSnackbarMessage(
        t('job.success.jobPosted', 'Job posted successfully!')
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
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t('nav.postJob')}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {/* ... Grid container with TextFields as before ... */}
        {/* Ensure all your TextFields are within this Box form */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('job.title', 'Job Title')}
              fullWidth
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('job.department', 'Department')}
              fullWidth
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('job.location', 'Location (e.g., City, Remote)')}
              fullWidth
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('job.description', 'Job Description')}
              multiline
              rows={6}
              fullWidth
              required
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('job.requirements', 'Key Requirements (Optional)')}
              multiline
              rows={4}
              fullWidth
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained" color="primary">
              {t('job.postButton', 'Post Job')}
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

export default PostJobPage;
