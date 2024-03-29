import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useReadSprintRetroDetailQuery } from '~/query/retro/retroQueries';
import RetroContent from './RetroContent';
import RetroInfo from './RetroInfo';
import RetroSprintTitle from './RetroSprintTitle';

const RetroSprintDetail = () => {
  const router = useRouter();
  const query = router.query;
  const readRetroSprintDetail = useReadSprintRetroDetailQuery({ sprintId: query.sprintId as unknown as number });

  if (!readRetroSprintDetail.isSuccess) {
    return null;
  }

  const { title, createTime, members, author, keeps, problems } = readRetroSprintDetail.data;

  const retroInfoProps = {
    author,
    createTime,
    members,
  };

  const retroContentProps = {
    members,
    keeps,
    problems,
  };

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
