import styled from 'styled-components';
import KeepBox from './KeepBox';
import ProblemTryBoard from './ProblemTryBoard';

const RetroBoard = () => {
  return (
    <Wrapper>
      <KeepBox />
      <ProblemTryBoard />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RetroBoard;

RetroBoard.displayName = 'RetroBoard';
