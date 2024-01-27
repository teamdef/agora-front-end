import styled from 'styled-components';
import Illust from '../common/display/Illust';

const GNB = () => {
  return (
    <Wrapper>
      <Illust src="illust/agora_logo" width="111px" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 68px;
  width: 100%;
  box-shadow: 0px 3px 2px 0px #e7eafc;
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
`;

export default GNB;
