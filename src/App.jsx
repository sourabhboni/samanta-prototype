import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material'; // Example MUI component
// Import page components
import DashboardPage from './pages/DashboardPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage'; // Import NotFoundPage

// Placeholder for a HomePage - we'll move this to src/pages/ later
const HomePagePlaceholder = () => {
  const { t } = useTranslation('common');
  return (
    <Typography variant="body1">
      {t('welcomeMessage')} - This is the main content area!
    </Typography>
  );
};

function App() {
  const { t, i18n } = useTranslation('common'); // 'common' is our namespace

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('appTitle')}
      </Typography>
      <Typography variant="body1">{t('welcomeMessage')}</Typography>

      {/* Simple buttons to change language for testing */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button
          onClick={() => changeLanguage('es')}
          style={{ marginLeft: '10px' }}
        >
          Español
        </button>
      </div>

      <Router>
        <Routes>
          {/* Example of a route using MainLayout */}
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePagePlaceholder />
              </MainLayout>
            }
          />
          <Route
            path="/"
            element={
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            }
          />
          <Route
            path="/dashboard" // Explicit dashboard route
            element={
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <UserProfilePage />
              </MainLayout>
            }
          />

          {/* Route for 404 Not Found - this should be the last route */}
          <Route
            path="*" // Matches any path not matched above
            element={
              // NotFoundPage can have its own layout or be simple
              // For now, let's assume it doesn't need MainLayout, or adjust if it should
              <NotFoundPage />
              // If NotFoundPage should be within MainLayout:
              // <MainLayout><NotFoundPage /></MainLayout>
            }
          />
          {/* Or a simple redirect for the root path to dashboard if preferred over duplicate element:
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        */}
          {/* Add other routes here later, potentially using different layouts */}
          {/* For example, a login page might not use MainLayout:
        <Route path="/login" element={<LoginPage />} />
        */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
