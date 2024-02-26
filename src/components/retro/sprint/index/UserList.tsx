import styled from 'styled-components';
import ProfileImage from '~/components/common/profileImage';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';

interface User {
  id: number;
  name: string;
  profileImg?: string;
}
const userDummy: User[] = [
  { id: 1, name: '전하영', profileImg: '' },
  {
    id: 2,
    name: '배광호',
    profileImg:
      'https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTRfNDIg/MDAxNjAyNjYwNzYyOTgy.aP8x5Dr9QBjCDnNB31PS3THDAOAbEMdypZkk0ZOsNDcg.tUGl0-WWzliqX_nPJS4uG_PsT6YMgkvVVT86x4QDrysg.PNG.designpress2016/%EC%B4%88%EA%B8%B0%EC%B6%98%EB%B0%B0_1.png?type=w800',
  },
  { id: 3, name: '진현우', profileImg: '' },
  { id: 4, name: '김성은', profileImg: '' },
  { id: 5, name: '이승원', profileImg: '' },
];
const UserList = () => {
  return (
    <Wrapper>
      <UserListWrapper>
        {userDummy.slice(0, 4).map((user) => {
          return (
            <UserItem key={user.id}>
              <ProfileImage src={user.profileImg} />
              <Text variant="body_2" color={colors.agoraBlack[700]}>
                {user.name}
              </Text>
            </UserItem>
          );
        })}
      </UserListWrapper>
      {userDummy.length > 4 && (
        <Ellipsis>
          <Text variant="body_2" color={colors.agoraBlack[600]}>
            ...
          </Text>
        </Ellipsis>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UserListWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Ellipsis = styled.div`
  height: 24px;
  margin-left: 10px;
  display: flex;
  align-items: end;
`;
export default UserList;
