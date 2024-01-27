import type { AppProps } from 'next/app';
import GlobalStyles from '~/styles/GlobalStyles';
import { theme } from '~/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import '../../public/assets/fonts/pretendard.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
