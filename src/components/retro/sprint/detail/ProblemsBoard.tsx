import styled from 'styled-components';
import { STATE_LIST } from '~/constants/sprint/problem';
import { useRetroSprintStore } from '~/store/retro/sprint';
import ProblemsContainer from './ProblemsContainer';

const ProblemsBoard = () => {
  const { problems, members } = useRetroSprintStore((state) => state.retroSprint);
  const problemListByState = STATE_LIST.map((item) => ({
    state: item,
    key: crypto.randomUUID(),
    content: problems,
    // problems.filter((problem) => problem.status === item.value), 추후 api 변경되면 적용 필요
  }));

  return (
    <Wrapper>
      <Title>문제는 무엇이고, 해결하기 위해 어떤 노력을 할 수 있나요?</Title>
      <Content>
        {problemListByState.map((problems) => {
          return (
            <ProblemsContainer
              key={problems.key}
              state={problems.state}
              problems={problems.content}
              members={members}
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
