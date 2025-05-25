// src/pages/NotFoundPage.jsx
import React from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained">
        Go to Homepage
      </Button>
    </Paper>
  );
};

export default NotFoundPage;
