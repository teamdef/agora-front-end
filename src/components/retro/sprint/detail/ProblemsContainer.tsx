import styled from 'styled-components';
import Badge from '~/components/common/display/Badge';
import ProblemEditor from '~/components/common/editor/problem/ProblemEditor';
import { BADGE_STATUS } from '~/constants/sprint/problem';
import { MemberType } from '~/query/common/commonQueries.types';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import { useRetroSprintStore } from '~/store/retro/sprint';
import { Problem, ProblemStatus } from '~/types/retro/sprint';
import CreateItemBox from './CreateItemBox';
import { LOGIN_USER } from './KeepsBoard';
import ProblemCard from './ProblemCard';

interface ProblemTryBoxProps {
  state: ProblemStatus;
  problems: Problem[];
  members: MemberType[];
}

const ProblemsContainer = ({ state, problems }: ProblemTryBoxProps) => {
  const { id } = useRetroSprintStore((state) => state.retroSprint);
  const createProblemEditorOpen = () => {
    defaultDialogActions.open({
      content: <ProblemEditor author={LOGIN_USER} retroId={id} />,
    });
  };

  return (
    <Wrapper>
      <StatusBox>
        <Badge value={state.value} label={state.label} />
      </StatusBox>
      <Content>
        {problems.map((problem) => {
          return <ProblemCard key={crypto.randomUUID()} problem={problem} />;
        })}
        {state.value === BADGE_STATUS['START'].value && <CreateItemBox onClick={createProblemEditorOpen} />}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StatusBox = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 15px;
  background: #e7e7eb4d;
  min-height: 189px;
  height: 100%;
  padding: 16px 12px;
`;
export default ProblemsContainer;

ProblemsContainer.displayName = 'ProblemTryBox';
