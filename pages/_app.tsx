import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/Header'
import { Container as MuiContainer, styled, ThemeProvider } from '@mui/material'
import { UserProvider } from './providers/user-provider'
import theme from './theme'

export const Container = styled(MuiContainer)({
  marginTop: 80, // height of the header
  padding: '32px 0',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    {/* inject user details */}
    <UserProvider>
      {/* inject mui theme */}
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth={false}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </UserProvider>
  </>)
}
