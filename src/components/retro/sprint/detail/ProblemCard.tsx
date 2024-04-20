import { useQueryClient } from '@tanstack/react-query';
import { Delete, Enlarge } from 'public/assets/svgs';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import ProblemEditor from '~/components/common/editor/problem/ProblemEditor';
import Button from '~/components/common/inputs/button/Button';
import { useDeleteProblemMutation } from '~/query/retro/retroQueries';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import { useRetroSprintStore } from '~/store/retro/sprint';
import { Problem } from '~/types/retro/sprint';
import { LOGIN_USER } from './KeepsBoard';
import RETRO_QUERY_KEYS from '~/query/retro/queryKeys';

interface ProblemTryProps {
  problem: Problem;
}

const ProblemCard = ({ problem }: ProblemTryProps) => {
  const queryClient = useQueryClient();
  const { members, id } = useRetroSprintStore((state) => state.retroSprint);
  const deleteProblemMutation = useDeleteProblemMutation();

  const deleteProblem = () => {
    const payload = { problemId: problem.id };
    deleteProblemMutation.mutate(payload, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_DETAIL, id] }),
    });
  };

  const modifyProblemEditorOpen = () => {
    defaultDialogActions.open({
      content: (
        <ProblemEditor
          id={problem.id}
          author={LOGIN_USER}
          content={problem.content}
          status={problem.status}
          retroId={id}
          isModify
        />
      ),
    });
  };

  return (
    <Wrapper>
      <Title>
        <ProfileBadge memberState={members[problem.authorId]} />
        <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" onClick={deleteProblem} />
      </Title>
      <Content>{problem.content}</Content>
      <BottomBox>
        <CommentBox>
          <CommentBoxTitle>
            <h4>무엇을 시도할 수 있나요?</h4>
            <span>전체 {problem.tries.length}</span>
          </CommentBoxTitle>
          {problem.tries.length === 0 && <EmptyText>등록된 내용이 없습니다.</EmptyText>}
          {problem.tries?.map((item) => {
            return <CommentItem key={crypto.randomUUID()}>{item.content}</CommentItem>;
          })}
        </CommentBox>
        <Button
          large
          label="자세히 보기"
          onClick={modifyProblemEditorOpen}
          icon={<Enlarge style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />}
        />
      </BottomBox>
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
const Title = styled.h4`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
  background: #fff;
  svg {
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
const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CommentBoxTitle = styled.div`
  h4 {
    ${({ theme }) => theme.fontStyle.subtitle_2};
    color: ${({ theme }) => theme.colors.agoraBlack[700]};
  }
  span {
    ${({ theme }) => theme.fontStyle.detail_2};
    color: ${({ theme }) => theme.colors.agoraBlack[400]};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const EmptyText = styled.span`
  color: ${({ theme }) => theme.colors.agoraBlack[200]};
  ${({ theme }) => theme.fontStyle.body_2};
  padding: 9.5px 0;
`;
const CommentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 9.5px 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[200]};
`;
export default ProblemCard;
