import { ThemeProvider } from 'styled-components'
import { GlobalStyles, siteTheme } from '../styles/theme.config'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
