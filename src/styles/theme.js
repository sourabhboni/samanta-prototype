// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

// You can define your color palette here
// For example, a nice blue for primary and a green for secondary
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A standard blue
      // light: '#42a5f5',
      // dark: '#1565c0',
      // contrastText: '#fff',
    },
    secondary: {
      main: '#4caf50', // A standard green
      // light: '#81c784',
      // dark: '#388e3c',
      // contrastText: '#000',
    },
    // You can also define other colors like error, warning, info, success
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#fff',
    //   paper: '#f5f5f5',
    // }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // You can customize variants like h1, h2, body1, etc.
    // h1: {
    //   fontSize: '2.5rem',
    //   fontWeight: 700,
    // },
  },
  // You can also customize spacing, breakpoints, shape, etc.
  // spacing: 8, // The default spacing unit (8px)
  // shape: {
  //   borderRadius: 4, // Default border radius
  // },
});

export default theme;
