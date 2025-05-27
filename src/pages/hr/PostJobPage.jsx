// src/pages/hr/PostJobPage.jsx
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Snackbar,
  useTheme,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PostJobPage = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();

  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');

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
    <Paper
      elevation={1}
      sx={{
        p: { xs: theme.spacing(2), sm: theme.spacing(3) },
        // maxWidth: 700, // Removed maxWidth to allow it to be wider
        margin: `${theme.spacing(2)} 0`, // Margin top/bottom, no horizontal auto margin to allow full width
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
        {t('nav.postJob')}
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
        <TextField
          label={t('job.title', 'Job Title')}
          fullWidth
          required
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          variant="outlined"
        />
        <TextField
          label={t('job.department', 'Department')}
          fullWidth
          required
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          variant="outlined"
        />
        <TextField
          label={t('job.location', 'Location (e.g., City, Remote)')}
          fullWidth
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          variant="outlined"
        />
        <TextField
          label={t('job.description', 'Job Description')}
          multiline
          rows={5}
          fullWidth
          required
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          variant="outlined"
        />
        <TextField
          label={t('job.requirements', 'Key Requirements (Optional)')}
          multiline
          rows={4}
          fullWidth
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          variant="outlined"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            {t('job.postButton', 'Post Job')}
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

export default PostJobPage;
