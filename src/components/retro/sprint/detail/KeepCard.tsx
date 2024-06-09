import { useQueryClient } from '@tanstack/react-query';
import { Delete, Enlarge } from 'public/assets/svgs';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import KeepEditor from '~/components/common/editor/keep/KeepEditor';
import Button from '~/components/common/inputs/button/Button';
import { MemberType } from '~/query/common/commonQueries.types';
import RETRO_QUERY_KEYS from '~/query/retro/queryKeys';
import { useDeleteKeepMutation } from '~/query/retro/retroQueries';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import { useRetroSprintStore } from '~/store/retro/sprint';
import { Keep } from '~/types/retro/sprint';

interface KeepCardProps {
  keep: Keep;
  author: MemberType;
}

const KeepCard = ({ keep, author }: KeepCardProps) => {
  const deleteKeepMutation = useDeleteKeepMutation();
  const queryClient = useQueryClient(); // QueryClient 인스턴스에 접근

  const { id } = useRetroSprintStore((state) => state.retroSprint);
  const modifyKeepEditorOpen = () => {
    defaultDialogActions.open({
      content: <KeepEditor author={author} retroId={id} id={keep.id} content={keep.content} isModify />,
    });
  };
  const deleteKeep = async () => {
    await deleteKeepMutation.mutateAsync(
      { keepId: keep.id },
      { onSuccess: () => queryClient.invalidateQueries({ queryKey: RETRO_QUERY_KEYS.RETRO_SPRINT_DETAIL }) },
    );
  };
  return (
    <Wrapper>
      <Header>
        <ProfileBadge memberState={author} />
        <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" onClick={deleteKeep} />
      </Header>
      <Content>{keep.content}</Content>
      <Button
        onClick={modifyKeepEditorOpen}
        large
        label="자세히 보기"
        icon={<Enlarge style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 14px 20px;
  border-radius: 15px;
  border: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
  background: #fff;
`;
const Header = styled.h4`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
  background: #fff;
  > svg {
    cursor: pointer;
  }
`;

const Content = styled.div`
  ${({ theme }) => theme.fontStyle.body_2};
  color: ${({ theme }) => theme.colors.agoraBlack[700]};
  position: relative;
  overflow: hidden;
  height: 48px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default KeepCard;
