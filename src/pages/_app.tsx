import type { AppProps } from 'next/app';
import GlobalStyles from '~/styles/GlobalStyles';
import { theme } from '~/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import '../../public/assets/fonts/pretendard.css';
import { QueryCache, QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalErrorFallback from '~/components/error';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const queryCache = new QueryCache();
  /** 앱 내부와 인스턴스 참조(또는 리액트 상태에서)에서 새 QueryClient 인스턴스를 만든다. 이렇게 하면 여러 사용자와 요청간에 데이터가 공유되지 않고 컴포넌트 생명주기 한번만 QueryClient를 생성할 수 있다. */
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache,
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      }),
  );
  /** v5에서 Hydrate -> HydrationBoundary 로 네이밍 변경 */
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
