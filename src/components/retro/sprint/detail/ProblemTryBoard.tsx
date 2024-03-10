import styled from 'styled-components';
import ProblemTryBox from './ProblemTryBox';
import { mock } from '~/types/retro/sprint';

const STATE_LIST = [
  { label: '문제 인식', value: 'problem' },
  { label: '개선중', value: 'try' },
  { label: '문제 해결', value: 'solve' },
] as const;

const ProblemTryBoard = () => {
  const mission = mock.retro.mission;
  return (
    <Wrapper>
      <Title>문제는 무엇이고, 해결하기 위해 어떤 노력을 할 수 있나요?</Title>
      <Content>
        {STATE_LIST.map((state) => {
          return (
            <ProblemTryBox
              key={`ProblemTryBoard-${crypto.randomUUID()}`}
              state={state}
              items={mission.filter((item) => item.status === state.value)}
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

export default ProblemTryBoard;

ProblemTryBoard.displayName = 'ProblemTryBoard';
