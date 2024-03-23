import styled from 'styled-components';
import ProblemsContainer from './ProblemsContainer';
import { Problem } from '~/types/retro/sprint';
import { STATE_LIST } from '~/constants/sprint/problem';

const ProblemsBoard = ({ problems }: { problems: Problem[] }) => {
  return (
    <Wrapper>
      <Title>문제는 무엇이고, 해결하기 위해 어떤 노력을 할 수 있나요?</Title>
      <Content>
        {STATE_LIST.map((state) => {
          return (
            <ProblemsContainer
              key={`ProblemTryBoard-${crypto.randomUUID()}`}
              state={state}
              // items={problems.filter((item) => item.status === state.value)}
              items={[]}
            />
          );
        })}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.div`
  ${({ theme }) => theme.fontStyle.subtitle_1};
  color: ${({ theme }) => theme.colors.agoraBlack[800]};
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
`;

export default ProblemsBoard;

ProblemsBoard.displayName = 'ProblemTryBoard';
