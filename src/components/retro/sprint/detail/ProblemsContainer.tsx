import styled from 'styled-components';
import Badge from '~/components/common/display/Badge';
import { Problem, ProblemStatus } from '~/types/retro/sprint';
import RetroItem from './ProblemCard';
import CreateItemBox from './CreateItemBox';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import ProblemEditor from '~/components/common/editor/problem/ProblemEditor';
import { useRouter } from 'next/router';
import { LOGIN_USER } from './KeepsBoard';

interface ProblemTryBoxProps {
  state: ProblemStatus;
  items: Problem[];
}

const ProblemsContainer = ({ state, items }: ProblemTryBoxProps) => {
  const router = useRouter();
  const { sprintId } = router.query;
  const problemEditorOpen = () => {
    defaultDialogActions.open({
      content: <ProblemEditor author={LOGIN_USER} retroId={parseInt(sprintId as string)} />,
    });
  };

  return (
    <Wrapper>
      <StatusBox>
        <Badge value={state.value} label={state.label} />
      </StatusBox>
      <Content>
        {items.map((item) => {
          return <RetroItem key={`RetroItem-${crypto.randomUUID()}`} data={item} />;
        })}
        {state.value === 'problem' && <CreateItemBox onClick={problemEditorOpen} />}
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
