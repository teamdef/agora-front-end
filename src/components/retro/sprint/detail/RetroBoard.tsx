import styled from 'styled-components';
import KeepsBoard from './KeepsBoard';
import ProblemsBoard from './ProblemsBoard';
import { RetroContentProps } from './RetroContent';

const RetroBoard = ({ retroContent }: RetroContentProps) => {
  const { keeps, problems } = retroContent;
  return (
    <Wrapper>
      <KeepsBoard keeps={keeps} />
      <ProblemsBoard problems={problems} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RetroBoard;

RetroBoard.displayName = 'RetroBoard';
