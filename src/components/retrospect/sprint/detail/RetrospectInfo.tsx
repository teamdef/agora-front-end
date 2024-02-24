import styled from 'styled-components';
import { GetRetrospectDtoMock } from '.';
import ProfileBadge from '~/components/common/display/ProfileBadge';

const RetrospectInfo = ({ info }: { info: GetRetrospectDtoMock }) => {
  const CreatedAt = new Date(info.createTime);
  const year = CreatedAt.getFullYear();
  const month = String(CreatedAt.getMonth() + 1).padStart(2, '0');
  const day = String(CreatedAt.getDate()).padStart(2, '0');
  const hours = String(CreatedAt.getHours()).padStart(2, '0');
  const minutes = String(CreatedAt.getMinutes()).padStart(2, '0');

  const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
  return (
    <Wrapper>
      <li>
        <h3>회고 날짜</h3>
        <CreateAtText>{formattedDate}</CreateAtText>
      </li>
      <li>
        <h3>작성자</h3>
        <ProfileBadge memberState={info.creator} />
      </li>
      <li>
        <h3>참여자</h3>
        <MemberList>
          {info.members.map((member) => {
            return <ProfileBadge memberState={member} />;
          })}
        </MemberList>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 22px 24px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[100]};
  li {
    display: flex;
    align-items: center;
    h3 {
      flex: none;
      ${({ theme }) => theme.fontStyle.subtitle_1}
      color: ${({ theme }) => theme.colors.agoraBlack[800]};
      width: 168px;
    }
    &:nth-of-type(3) {
      align-items: start;
    }
  }
`;

const CreateAtText = styled.span`
  ${({ theme }) => theme.fontStyle.body_1};
  color: ${({ theme }) => theme.colors.agoraBlack[600]};
`;
const MemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export default RetrospectInfo;

RetrospectInfo.displayName = 'RetrospectInfo';
