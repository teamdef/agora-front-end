import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
const LNB = () => {
  return (
    <Wrapper>
      <Text variant="detail_2" className="menu-title">
        Menu
      </Text>
      <Group>
        <GroupTitle>
          <div>아</div>
          <Text variant="headline_2">대시보드</Text>
        </GroupTitle>
      </Group>
      <Group>
        <GroupTitle>
          <div>아</div>
          <Text variant="headline_2">목표관리</Text>
        </GroupTitle>
        <GroupList>
          <GroupItem>
            <Text variant="body_1">비전</Text>
          </GroupItem>
          <GroupItem>
            <Text variant="body_1">OKR</Text>
          </GroupItem>
        </GroupList>
      </Group>
      <Group>
        <GroupTitle>
          <div>아</div>
          <Text variant="headline_2">회고</Text>
        </GroupTitle>
        <GroupList>
          <GroupItem>
            <Text variant="body_1">분기회고</Text>
          </GroupItem>
          <GroupItem>
            <Text variant="body_1">스프린트 회고</Text>
          </GroupItem>
        </GroupList>
      </Group>
      <Group>
        <GroupTitle>
          <div>아</div>
          <Text variant="headline_2">관리</Text>
        </GroupTitle>
        <GroupList>
          <GroupItem>
            <Text variant="body_1">스프린트 관리</Text>
          </GroupItem>
          <GroupItem>
            <Text variant="body_1">멤버</Text>
          </GroupItem>
        </GroupList>
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  padding: 48px 32px 0px 16px;
  border-right: solid 1px #e7eafc;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .menu-title {
    padding: 0 10px;
  }
`;

const Group = styled.ul`
  width: 176px;
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.div`
  padding: 6px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
`;
const GroupList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const GroupItem = styled.li`
  padding: 6px 10px;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
`;
export default LNB;
