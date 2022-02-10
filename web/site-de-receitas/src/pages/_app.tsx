import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import theme from '../styles/themes/light';
import AppProvider from '../hooks';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}
export default MyApp;
