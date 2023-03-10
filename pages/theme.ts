import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#4aedc4',
      main: '#1de9b6',
      dark: '#14a37f',
      contrastText: '#FFF'
    },
    common: {
      black: '#1A2027'
    },
    info: {
      main: '#1A2027'
    }
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'capitalize',
        },
      },
    },
    MuiCard: {
     styleOverrides: {
      root: {
        borderRadius: 5,
        transition: '0.1s',
        '&:hover': {
          transform: 'translateY(-3px)'
        }
      }
     }
    }
  }
})

export default theme

