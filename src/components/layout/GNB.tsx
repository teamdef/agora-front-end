import styled from 'styled-components';
import Illust from '../common/display/Illust';
import { zIndex } from '~/styles/mixin';

const GNB = () => {
  return (
    <Wrapper>
      <Illust src="illust/agora_logo" width="111px" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${zIndex.gnb}
  height: 68px;
  box-shadow: 0px 3px 2px 0px #e7eafc;
  display: flex;
  justify-content: space-between;
  > img {
    padding-left: 32px;
  }
`;

export default GNB;
