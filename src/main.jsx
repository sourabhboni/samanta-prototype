import React from 'react';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme'; // Import your custom theme
import './i18n'; // Import your i18n configuration

import { RoleProvider } from './contexts/RoleContext.jsx'; // Import RoleProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RoleProvider>
        {' '}
        {/* Wrap App with RoleProvider */}
        <CssBaseline />
        <App />
      </RoleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
