import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import Pagination from '~/components/common/navigation/Pagination';
import Link from 'next/link';
import { Paths } from '~/constants/Paths';
import RetroSprintList from './RetroSprintList';

export interface RetroListItem {}
const retroSprintDummy: RetroListItem[] = [];

const RetroSprint = () => {
  return (
    <Wrapper>
      <HeaderSection>
        <Text variant="headline_1" color={colors.agoraBlack[900]}>
          스프린트 회고
        </Text>
      </HeaderSection>
      <ListSection>
        <RetroSprintList list={retroSprintDummy} />
      </ListSection>
      <BottomSection>
        <div></div>
        <Pagination totalPage={10} currentPage={1} pagehandler={() => console.log(1)} />
        <Link href={Paths.RETRO_SPRINT_CREATE}>
          <Button label="새로만들기" small />
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
`;
export default RetroSprint;