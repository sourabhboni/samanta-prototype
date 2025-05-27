import React from 'react';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme'; // Import your custom theme
import './i18n'; // Import your i18n configuration
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Or your chosen adapter
import { RoleProvider } from './contexts/RoleContext.jsx'; // Import RoleProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {' '}
        {/* Wrap RoleProvider or App */}
        <RoleProvider>
          {' '}
          {/* Wrap App with RoleProvider */}
          <CssBaseline />
          <App />
        </RoleProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
