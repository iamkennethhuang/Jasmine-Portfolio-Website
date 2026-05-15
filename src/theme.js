import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#40292c',
    },
    secondary: {
      main: '#ae8f8e',
    },
    background: {
      default: '#f5ede8',
      paper: '#faf5f0',
    },
    text: {
      primary: '#40292c',
      secondary: '#6b4c4f',
    },
  },
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      color: '#40292c',
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      color: '#40292c',
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      color: '#40292c',
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      color: '#40292c',
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      color: '#40292c',
    },
    h6: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      color: '#40292c',
    },
    body1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.15rem',
      lineHeight: 1.8,
      color: '#40292c',
    },
    body2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1rem',
      color: '#40292c',
    },
    overline: {
      fontFamily: "'Josefin Sans', sans-serif",
      letterSpacing: '0.15em',
      color: '#40292c',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Josefin Sans', sans-serif",
          letterSpacing: '0.15em',
          borderRadius: 0,
          textTransform: 'uppercase',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5ede8',
          margin: 0,
          padding: 0,
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
  },
});

export default theme;
