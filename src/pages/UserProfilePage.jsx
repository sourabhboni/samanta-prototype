// src/pages/UserProfilePage.jsx
import React from 'react';
import { Typography, Paper, Box, TextField, Button } from '@mui/material';
// import { useTranslation } from 'react-i18next'; // If needed

const UserProfilePage = () => {
  // const { t } = useTranslation('common');

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        User Profile
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary">
          Update Profile
        </Button>
      </Box>
    </Paper>
  );
};

export default UserProfilePage;
