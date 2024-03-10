import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import Pagination from '~/components/common/navigation/Pagination';
import Link from 'next/link';
import { Paths } from '~/constants/Paths';
import RetroSprintList from './RetroSprintList';
import { useReadSprintRetroListQuery } from '~/query/retro/retroQueries';
import { confirmDialogActions } from '~/store/dialog/confirmDialog';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import DefaultDialog from '~/components/common/dialog/DefaultDialog';

const RetroSprint = () => {
  const currentPageNo = 1;
  const totalPageCount = 10;
  const readSprintRetroListQuery = useReadSprintRetroListQuery({ pageNo: currentPageNo, listSize: 20, projectId: 1 });

  const handleOpen = () => {
    defaultDialogActions.open({ content: <DefaultDialog></DefaultDialog> });
    confirmDialogActions.open({
      message: '삭제하시겠습니까?',
      subMessage: '삭제하면 기록들을 복구할 수 없습니다.\n정말 삭제하시겠습니까?',
    });
  };
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
      <button onClick={handleOpen}>테스트</button>
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
