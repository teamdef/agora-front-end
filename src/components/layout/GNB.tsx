import styled from 'styled-components';
import Illust from '../common/display/Illust';
import { zIndex } from '~/styles/mixin';
import Container from './Container';

const GNB = () => {
  return (
    <Wrapper>
      <Container>
        <Illust src="illust/agora_logo" width="111px" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${zIndex.gnb}
  height: 68px;
  box-shadow: 0px 3px 2px 0px #e7eafc;
  > .container {
    height: 100%;
    align-items: center;
  }
  > img {
    padding-left: 32px;
  }
`;

export default GNB;
