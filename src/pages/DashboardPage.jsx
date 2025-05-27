// src/pages/DashboardPage.jsx
import React from 'react';
import { Typography, Paper, Box, Grid, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRole } from '../contexts/RoleContext'; // Corrected path from previous discussion
import AISuggestionsPanel from '../components/AISuggestionsPanel'; // Corrected path
import { suggestionCategories } from '../config/suggestionsConfig'; // Corrected path

const DashboardPage = () => {
  const { t } = useTranslation('common');
  const { currentRole, currentRoleName } = useRole();
  const theme = useTheme();

  const activeSuggestions =
    suggestionCategories[currentRole] || suggestionCategories['GENERAL'] || [];

  return (
    <Grid container spacing={theme.spacing(3)}>
      <Grid item xs={12} md={8}>
        <Paper
          elevation={1}
          sx={{
            p: theme.spacing(3),
            height: '100%',
          }}
        >
          <Typography
            variant="h5" // Uses h5 style from your theme (Crimson Pro, 500 weight)
            component="h1" // Good for semantics
            gutterBottom
            sx={{ mb: theme.spacing(2.5) }} // Adjusted margin
          >
            {currentRoleName} Dashboard
          </Typography>
          <Box>
            <Typography variant="body1">
              {' '}
              {/* Uses body1 style (Crimson Text, 400 weight) */}
              {t('welcomeMessage')} This is your main dashboard area for the{' '}
              {currentRoleName} role.
            </Typography>
            {/*
              The language switcher buttons that were here for testing i18n:
              <div style={{ marginTop: '20px' }}>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('es')} style={{ marginLeft: '10px' }}>Español</button>
              </div>
              ARE NOW REMOVED, as the global switcher is in the Header.
            */}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <AISuggestionsPanel
          suggestions={activeSuggestions}
          // sx={{ height: '100%' }} // If you want the panel to attempt to match height
        />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
