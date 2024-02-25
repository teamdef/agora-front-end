import styled from 'styled-components';
import KeepBox from './KeepBox';
import ProblemTryBoard from './ProblemTryBoard';

const RetrospectBoard = () => {
  return (
    <Wrapper>
      <KeepBox />
      <ProblemTryBoard />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RetrospectBoard;

RetrospectBoard.displayName = 'RetrospectBoard';
