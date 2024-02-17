import styled from 'styled-components';
import GNB from './GNB';

const GNBLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <GNB />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const ChildrenWrapper = styled.div``;

export default GNBLayout;
