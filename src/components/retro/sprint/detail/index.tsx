import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useReadSprintRetroDetailQuery } from '~/query/retro/retroQueries';
import RetroContent from './RetroContent';
import RetroInfo from './RetroInfo';
import RetroSprintTitle from './RetroSprintTitle';
import { useEffect } from 'react';
import { memberListActions } from '~/store/member/memberList';

const RetroSprintDetail = () => {
  const router = useRouter();
  const query = router.query;
  const { isSuccess, data: sprintDetail } = useReadSprintRetroDetailQuery({
    sprintId: query.sprintId as unknown as number,
  });

  if (!isSuccess) {
    return null;
  }

  const { title, createTime, members, creator, keeps, problems } = sprintDetail;

  const retroInfoProps = {
    creator,
    createTime,
    members,
  };

  const retroContentProps = {
    members,
    keeps,
    problems,
  };
  useEffect(() => {
    memberListActions.setMemberList(members);
  }, [isSuccess]);
  return (
    <Wrapper>
      <RetroSprintTitle title={title} />
      <RetroInfo retroInfo={retroInfoProps} />
      <RetroContent retroContent={retroContentProps} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 120px;
`;

export default RetroSprintDetail;

RetroSprintDetail.displayName = 'RetroSprintDetail';
