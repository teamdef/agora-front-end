import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import { UserType } from '~/components/common/dropdown/member/MemberDropdown';
import Text from '~/components/common/typo/Text';
import { UserType } from '~/query/retro/retroQueries.types';
import { colors } from '~/styles/theme';

interface Props {
  members: UserType[];
}

const UserList = ({ members }: Props) => {
  console.log(members);
  return (
    <Wrapper>
      <UserListWrapper>
        {members.slice(0, 4).map((member) => {
          const renameMember: UserType = {
            id: member.id,
            profileImg: member.profileImg,
            name: member.nickname,
          };
          return <ProfileBadge key={`ProfileBadge-${crypto.randomUUID()}`} memberState={renameMember} />;
        })}
      </UserListWrapper>
      {members.length > 5 && (
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

const Ellipsis = styled.div`
  height: 24px;
  margin-left: 10px;
  display: flex;
  align-items: end;
`;
export default UserList;
