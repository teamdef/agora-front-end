import styled from 'styled-components';
import { RetrospectListItem } from '.';
import { colors } from '~/styles/theme';
import Text from '~/components/common/typo/Text';
import UserList from './UserList';
import Radio from '~/components/common/inputs/radio/Radio';

interface Props {
  list: RetrospectListItem[];
}
const RetrospectSprintList = ({ list }: Props) => {
  return (
    <Wrapper>
      <ListHeader>
        <Text className="col-1" variant="body_2" color={colors.agoraBlack[500]}>
          제목
        </Text>
        <Text className="col-2" variant="body_2" color={colors.agoraBlack[500]}>
          회고날짜
        </Text>
        <Text className="col-3" variant="body_2" color={colors.agoraBlack[500]}>
          참여자
        </Text>
      </ListHeader>
      <ListBody>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>
        <ListBodyItem>
          <Text className="col-1" variant="detail_1" color={colors.agoraBlack[700]}>
            회고 제목은 20자 까지
          </Text>
          <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
            2024.02.17
          </Text>
          <UserList />
        </ListBodyItem>

        {/* <ListBodyEmptyItem>
          <Text className="col-3" variant="body_2" color={colors.agoraBlack[300]}>
            등록된 회고가 없습니다.
          </Text>
        </ListBodyEmptyItem> */}
      </ListBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ListHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.agoraBlue[50]};
  .col-1,
  .col-3 {
    width: 40%;
  }
  .col-2 {
    width: 20%;
  }
`;
const ListBody = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
const ListBodyItem = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.agoraBlue[50]};
  cursor: pointer;
  .col-1,
  .col-3 {
    width: 40%;
  }
  .col-2 {
    width: 20%;
  }
`;
const ListBodyEmptyItem = styled(ListBodyItem)`
  justify-content: center;
  border-bottom: none;
  text-align: center;
  cursor: default;
`;

export default RetrospectSprintList;
