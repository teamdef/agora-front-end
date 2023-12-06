'use client';
import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/query/lib/ReactQueryProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </ReactQueryProvider>
  );
};

export default Provider;
