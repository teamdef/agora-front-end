import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useReadSprintRetroDetailQuery } from '~/query/retro/retroQueries';
import RetroContent from './RetroContent';
import RetroInfo from './RetroInfo';
import RetroSprintTitle from './RetroSprintTitle';
import { retroSprintActions } from '~/store/retro/sprint';

const RetroSprintDetail = () => {
  const router = useRouter();
  const query = router.query;
  const { isSuccess, data: retroSprint } = useReadSprintRetroDetailQuery({
    sprintId: query.sprintId as unknown as number,
  });

  useEffect(() => {
    if (retroSprint) retroSprintActions.setRetroSprint(retroSprint);
  }, [isSuccess]);

  if (!isSuccess) return null;
  return (
    <Wrapper>
      <RetroSprintTitle />
      <RetroInfo />
      <RetroContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 120px;
`;

export default RetroSprintDetail;

RetroSprintDetail.displayName = 'RetroSprintDetail';
