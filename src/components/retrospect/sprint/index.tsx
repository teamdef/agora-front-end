import styled from 'styled-components';
import SprintReviewList from './RetrospectSprintList';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import Pagination from '~/components/common/navigation/Pagination';

export interface RetrospectListItem {}
const sprintReviewDummy: RetrospectListItem[] = [];
const SprintReview = () => {
  return (
    <Wrapper>
      <Text variant="headline_1" color={colors.agoraBlack[900]}>
        스프린트 회고
      </Text>
      <ListWrapper>
        <SprintReviewList list={sprintReviewDummy} />
      </ListWrapper>
      <BottomWrapper>
        <div></div>
        <Pagination totalPage={10} currentPage={1} pagehandler={() => console.log(1)} />
        <Button label="새로만들기" small />
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ListWrapper = styled.div`
  margin-top: 48px;
`;
const BottomWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export default SprintReview;
