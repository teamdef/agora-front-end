import styled from 'styled-components';
import LNB from './LNB';
import { PropsWithChildren } from 'react';
import Container from './Container';

interface Props {
  bgColor?: string;
}
const LNBLayout = ({ bgColor, children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Container>
        <LNB />
        <div className="children">{children}</div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  display: flex;
  min-height: calc(100vh - 68px);
  .children {
    flex: 1;
    padding: 48px 56px 0px 56px;
    background-color: ${({ theme, bgColor }) => bgColor || theme.colors.background};
  }
`;

export default LNBLayout;
