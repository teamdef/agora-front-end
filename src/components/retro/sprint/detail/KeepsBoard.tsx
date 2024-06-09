import styled from 'styled-components';
import KeepEditor from '~/components/common/editor/keep/KeepEditor';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import { useRetroSprintStore } from '~/store/retro/sprint';
import { Keep } from '~/types/retro/sprint';
import CreateItemBox from './CreateItemBox';
import KeepCard from './KeepCard';

export const LOGIN_USER = {
  id: 1,
  name: '배광호',
  nickname: '광호닉',
  profileImg: 'https://catchmeimages.s3.ap-northeast-2.amazonaws.com/2023-04-14_HmUWZNOKyOuav4NKQGUs.png',
};
const KeepsBoard = () => {
  const { keeps, members, id } = useRetroSprintStore((state) => state.retroSprint);

  const keepEditorOpen = () => {
    defaultDialogActions.open({
      content: <KeepEditor author={LOGIN_USER} retroId={id} />,
    });
  };
  return (
    <Wrapper>
      <Title>지속하고 싶은 점은 무엇인가요?</Title>
      <Content>
        {keeps.map((keep: Keep) => {
          console.log(keep);
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
