import styled from 'styled-components';
import KeepList from './KeepList';

const RetrospectBoard = () => {
  return (
    <Wrapper>
      <KeepList />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RetrospectBoard;

RetrospectBoard.displayName = 'RetrospectBoard';
