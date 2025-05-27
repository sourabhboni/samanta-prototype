// src/pages/DashboardPage.jsx
import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRole } from '../contexts/RoleContext';
import AISuggestionsPanel from '../components/AISuggestionsPanel';
import { suggestionCategories } from '../config/suggestionsConfig'; // Import suggestion categories

const DashboardPage = () => {
  const { t } = useTranslation('common');
  const { currentRole, currentRoleName } = useRole(); // Get currentRole ID

  // Determine which suggestions to show based on current role
  // Fallback to GENERAL suggestions if role-specific ones aren't defined
  const activeSuggestions =
    suggestionCategories[currentRole] || suggestionCategories['GENERAL'] || [];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            {currentRoleName} Dashboard
          </Typography>
          <Box>
            <Typography variant="body1">
              {t('welcomeMessage')} This is your main dashboard area for the{' '}
              {currentRoleName} role.
            </Typography>
          </Box>
        </Paper>
        {/* More dashboard content */}
      </Grid>
      <Grid item xs={12} md={4}>
        <AISuggestionsPanel suggestions={activeSuggestions} />{' '}
        {/* Pass the determined suggestions */}
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
