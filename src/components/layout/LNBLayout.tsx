import styled from 'styled-components';
import LNB from './LNB';

const LNBLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <LNB />
      <div className="children">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 68px);
  .children {
    flex: 1;
    margin-top: 48px;
    padding: 0 56px;
  }
`;

export default LNBLayout;
