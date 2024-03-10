import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import Pagination from '~/components/common/navigation/Pagination';
import Link from 'next/link';
import { Paths } from '~/constants/Paths';
import RetroSprintList from './RetroSprintList';
import { useReadRetroSprintListQuery } from '~/query/retro/retroQueries';

const RetroSprint = () => {
  const currentPageNo = 1;
  const totalPageCount = 10;
  const readSprintRetroListQuery = useReadRetroSprintListQuery({ pageNo: currentPageNo, listSize: 20, projectId: 1 });

  if (!readSprintRetroListQuery.isSuccess) {
    return null;
  }
  return (
    <Wrapper>
      <HeaderSection>
        <Text variant="headline_1" color={colors.agoraBlack[900]}>
          스프린트 회고
        </Text>
      </HeaderSection>
      <ListSection>
        <RetroSprintList retroList={readSprintRetroListQuery.data} />
      </ListSection>
      <BottomSection>
        <div></div>
        <Pagination totalPage={totalPageCount} currentPage={currentPageNo} pagehandler={() => console.log(1)} />
        <Link href={Paths.RETRO_SPRINT_CREATE}>
          <ButtonWrapper>
            <Button label="새로만들기" small />
          </ButtonWrapper>
        </Link>
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
