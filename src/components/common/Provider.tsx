'use client';
import { theme } from '@/styles/theme';
import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/query/lib/ReactQueryProvider';
import { ThemeProvider } from 'styled-components';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
