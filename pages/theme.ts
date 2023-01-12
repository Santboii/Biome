import { createTheme } from "@mui/material";

const theme = createTheme({
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
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
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

