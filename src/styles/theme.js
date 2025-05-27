// src/styles/theme.js
import { createTheme, alpha } from '@mui/material/styles';

// ... (your lightScheme and palette configuration from the previous step should remain here) ...
const lightScheme = {
  primary: '#415F91',
  onPrimary: '#FFFFFF',
  primaryContainer: '#D6E3FF',
  onPrimaryContainer: '#001B3E',
  secondary: '#565F71',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#DAE2F9',
  onSecondaryContainer: '#131C2B',
  tertiary: '#705575',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FAD8FD',
  onTertiaryContainer: '#28132E',
  error: '#BA1A1A',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD6',
  onErrorContainer: '#410002',
  background: '#F9F9FF',
  onBackground: '#191C20',
  surface: '#F9F9FF',
  onSurface: '#191C20',
  surfaceVariant: '#E0E2EC',
  onSurfaceVariant: '#44474E',
  outline: '#74777F',
  outlineVariant: '#C4C6D0',
  surfaceContainerLow: '#F3F3FA',
  surfaceContainer: '#EDEDF4',
  surfaceContainerHigh: '#E7E8EE',
  surfaceContainerHighest: '#E2E2E9',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: lightScheme.primary,
      contrastText: lightScheme.onPrimary,
    },
    secondary: {
      main: lightScheme.secondary,
      contrastText: lightScheme.onSecondary,
    },
    error: {
      main: lightScheme.error,
      contrastText: lightScheme.onError,
    },
    background: {
      default: lightScheme.background,
      paper: lightScheme.surfaceContainerLow,
    },
    text: {
      primary: lightScheme.onSurface,
      secondary: lightScheme.onSurfaceVariant,
    },
    divider: lightScheme.outlineVariant,
    commonColors: {
      primaryContainer: lightScheme.primaryContainer,
      onPrimaryContainer: lightScheme.onPrimaryContainer,
      secondaryContainer: lightScheme.secondaryContainer,
      onSecondaryContainer: lightScheme.onSecondaryContainer,
      tertiary: lightScheme.tertiary,
      onTertiary: lightScheme.onTertiary,
      tertiaryContainer: lightScheme.tertiaryContainer,
      onTertiaryContainer: lightScheme.onTertiaryContainer,
      surface: lightScheme.surface,
      surfaceContainer: lightScheme.surfaceContainer,
      surfaceContainerHigh: lightScheme.surfaceContainerHigh,
      surfaceContainerHighest: lightScheme.surfaceContainerHighest,
      outline: lightScheme.outline,
    },
  },
  typography: {
    // Set Crimson Pro as the default font family.
    // You can use Crimson Text for specific elements if desired by setting it in the variants.
    fontFamily: '"Crimson Pro", "Crimson Text", "Georgia", serif', // Added Georgia as a fallback serif
    fontWeightLight: 300, // Crimson Pro supports variable weights, 300 is a good light
    fontWeightRegular: 400, // Standard regular weight
    fontWeightMedium: 500, // A good medium, Crimson Pro has this
    fontWeightBold: 700, // Standard bold weight

    h1: {
      fontFamily: '"Crimson Pro", "Georgia", serif', // Emphasize Crimson Pro for headings
      fontWeight: 300, // Often, large headings are lighter
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontWeight: 400, // Or 500 for slightly bolder headings
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      // Used for our page titles currently
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontWeight: 500, // Making page titles a bit more prominent
      fontSize: '1.6rem', // Slightly adjusted for Crimson Pro
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: '"Crimson Pro", "Georgia", serif',
      fontWeight: 600, // Bolder for smaller headings
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: '"Crimson Pro", "Crimson Text", "Georgia", serif', // Can use Crimson Text here for variety
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: '"Crimson Pro", "Crimson Text", "Georgia", serif',
      fontWeight: 500, // Or 600 if using Crimson Text
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      // Default body text
      fontFamily: '"Crimson Text", "Crimson Pro", "Georgia", serif', // Prioritizing Crimson Text for body
      fontWeight: 400,
      fontSize: '1rem', // 16px
      lineHeight: 1.6, // Serif fonts often benefit from slightly more line height
      letterSpacing: '0.00938em',
    },
    body2: {
      // Secondary body text
      fontFamily: '"Crimson Text", "Crimson Pro", "Georgia", serif', // Prioritizing Crimson Text for body
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5, // Adjusted for serif
      letterSpacing: '0.01071em',
    },
    button: {
      // For text in buttons
      fontFamily: '"Crimson Pro", "Helvetica", "Arial", sans-serif', // Often UI elements like buttons use a cleaner sans-serif, but we can try Crimson Pro
      fontWeight: 600, // Bolder for button text with Crimson Pro
      fontSize: '0.9rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      // textTransform: 'uppercase', // You can decide if uppercase fits the serif style, sometimes Sentence case is nicer
      textTransform: 'none', // Let's try sentence case for buttons with serif
    },
    caption: {
      fontFamily: '"Crimson Pro", "Crimson Text", "Georgia", serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: '"Crimson Pro", "Helvetica", "Arial", sans-serif', // Sans-serif might be better for overline
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8, // Adjusted for a more modern look
  },
  components: {
    // Name of the component ⚛️
    MuiButton: {
      defaultProps: {
        disableElevation: true, // For a flatter, more modern look often seen in Google UIs
        // variant: 'contained', // If you want most buttons to be contained by default
      },
      styleOverrides: {
        // Name of the slot
        root: ({ ownerState, theme: currentTheme }) => ({
          // Access theme for dynamic values
          // textTransform: 'none', // We set this in typography.button, but can reinforce or change
          padding: `${currentTheme.spacing(0.75)} ${currentTheme.spacing(2)}`, // Example: slightly more padding
          transition: currentTheme.transitions.create(
            ['background-color', 'transform', 'box-shadow'],
            {
              duration: currentTheme.transitions.duration.short,
            }
          ),
          '&:hover': {
            // Example: slightly lift or change background for primary buttons
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                backgroundColor: currentTheme.palette.primary.dark, // Or a calculated hover shade
                // transform: 'scale(1.02)',
              }),
          },
        }),
        // Example for outlinedPrimary buttons
        outlinedPrimary: ({ theme: currentTheme }) => ({
          borderColor: currentTheme.palette.primary.main, // Use primary color for border
          '&:hover': {
            backgroundColor: alpha(currentTheme.palette.primary.main, 0.08), // Light primary background on hover
            borderColor:
              currentTheme.palette.primary.dark ||
              currentTheme.palette.primary.main,
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // Google often uses outlined fields
        size: 'small', // For a slightly more compact feel, optional
      },
      styleOverrides: {
        root: {
          // Styles for the root TextField element if needed
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1, // A very subtle default elevation for paper surfaces
        // We used elevation={3} for forms, which will override this default
      },
      styleOverrides: {
        root: {
          // backgroundColor: lightScheme.surface, // If you want all Paper to use 'surface' instead of 'surfaceContainerLow'
          // But we set background.paper to surfaceContainerLow which Paper uses by default
        },
      },
    },
    MuiAppBar: {
      // For our Header
      defaultProps: {
        elevation: 0, // Google often uses flat AppBars that blend with content or have a subtle border
        color: 'inherit', // Makes it use background color, change to 'surface' or other custom color if needed
      },
      styleOverrides: {
        root: ({ theme: currentTheme }) => ({
          // If color is 'inherit', it takes the background from its parent.
          // If you want it to have a specific surface color distinct from the page background:
          backgroundColor:
            currentTheme.palette.commonColors?.surfaceContainer ||
            currentTheme.palette.background.paper, // Use a surface color
          borderBottom: `1px solid ${currentTheme.palette.divider}`, // Subtle border instead of shadow
        }),
      },
    },
    MuiDrawer: {
      // For our Sidebar
      styleOverrides: {
        paper: ({ theme: currentTheme }) => ({
          backgroundColor:
            currentTheme.palette.commonColors?.surfaceContainer ||
            currentTheme.palette.background.paper, // Consistent surface color
          borderRight: `1px solid ${currentTheme.palette.divider}`, // Add a border if AppBar is also flat
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme: currentTheme }) => ({
          '&:hover': {
            backgroundColor: alpha(currentTheme.palette.primary.main, 0.08), // Subtle hover for list items
          },
          '&.Mui-selected': {
            backgroundColor: alpha(currentTheme.palette.primary.main, 0.12), // Slightly more emphasis for selected
            borderRight: `3px solid ${currentTheme.palette.primary.main}`, // Example: accent border for selected item
            // color: currentTheme.palette.primary.main, // If you want text to also change color
            '& .MuiListItemIcon-root': {
              // Target icon color if selected
              // color: currentTheme.palette.primary.main,
            },
          },
        }),
      },
    },
    // Add more component overrides as needed
  },
  // ... (rest of your theme: shape, components, etc. will come in next tasks)
});

export default theme;
