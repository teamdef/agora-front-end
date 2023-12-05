'use client';
import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/query/lib/ReactQueryProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ReactQueryProvider>
  );
};

export default Provider;
