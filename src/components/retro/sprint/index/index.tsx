import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import Pagination from '~/components/common/navigation/Pagination';
import RetroSprintList from './RetroSprintList';
import { useReadRetroSprintListQuery } from '~/query/retro/retroQueries';
import { useRouter } from 'next/router';

const RetroSprint = () => {
  const router = useRouter();
  const { projectId } = router.query;


  const currentPageNo = 1;
  const totalPageCount = 10;
  const { data, isSuccess } = useReadRetroSprintListQuery({
    pageNo: currentPageNo,
    listSize: 20,
    projectId: Number(projectId),
  });

  const handleCreateClick = () => {
    router.push(`/${projectId}/retro/sprint/create`);
  };

  if (!isSuccess) return null;
  return (
    <Wrapper>
      <HeaderSection>
        <Text variant="headline_1" color={colors.agoraBlack[900]}>
          스프린트 회고
        </Text>
      </HeaderSection>
      <ListSection>
        <RetroSprintList retroList={data} />
      </ListSection>
      <BottomSection>
        <div></div>
        <Pagination totalPage={totalPageCount} currentPage={currentPageNo} pagehandler={() => console.log(1)} />
        <ButtonWrapper>
          <Button onClick={handleCreateClick} label="새로만들기" small />
        </ButtonWrapper>
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
const HeaderSection = styled.div``;

const ListSection = styled.div`
  margin-top: 48px;
`;
const BottomSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  & a {
    text-decoration: none;
  }
`;
const ButtonWrapper = styled.div`
  width: 120px;
`;
export default RetroSprint;
