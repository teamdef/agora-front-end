import styled from 'styled-components';
import CreateItemBox from './CreateItemBox';
import KeepCard from './KeepCard';
import { Keep, mock } from '~/types/retro/sprint';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import KeepEditor from '~/components/common/editor/keep/KeepEditor';
import { useRouter } from 'next/router';
import { useRetroSprintStore } from '~/store/retro/sprint';

export const LOGIN_USER = {
  id: 4,
  profileImg: '',
  nickname: '진현우',
  name: '진현우',
};
const KeepsBoard = () => {
  const { keeps, members } = useRetroSprintStore((state) => state.retroSprint);
  const router = useRouter();
  const { sprintId } = router.query;
  const keepEditorOpen = () => {
    defaultDialogActions.open({
      content: <KeepEditor author={LOGIN_USER} retroId={parseInt(sprintId as string)} />,
    });
  };

  return (
    <Wrapper>
      <Title>지속하고 싶은 점은 무엇인가요?</Title>
      <Content>
        {keeps.map((keep: Keep) => {
          return <KeepCard key={crypto.randomUUID()} keep={keep} author={members[keep.authorId]} />;
        })}
        <CreateItemBox onClick={keepEditorOpen} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 48px;
`;
const Title = styled.h3`
  margin-top: 64px;
  ${({ theme }) => theme.fontStyle.subtitle_1};
  color: ${({ theme }) => theme.colors.agoraBlack[800]};
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  div:last-child {
    border: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
    background: ${({ theme }) => theme.colors.agoraBlue.bg};
  }
`;

export default KeepsBoard;

KeepsBoard.displayName = 'KeepList';
