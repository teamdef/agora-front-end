import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import { UserType } from '~/core/retro/retroService.types';
import stringToDateTextFormatter from '~/utils/time/stringToDateTextFormatter';
interface RetroInfoProps {
  retroInfo: {
    author: UserType;
    createTime: string;
    members: UserType[];
  };
}
const RetroInfo = ({ retroInfo }: RetroInfoProps) => {
  const { author, createTime, members } = retroInfo;
  const formattedCreateTime = stringToDateTextFormatter(createTime);
  return (
    <Wrapper>
      <li>
        <h3>회고 날짜</h3>
        <CreateAtText>{formattedCreateTime}</CreateAtText>
      </li>
      <li>
        <h3>작성자</h3>
        <ProfileBadge memberState={author} />
      </li>
      <li>
        <h3>참여자</h3>
        <MemberList>
          {members.map((member: UserType) => {
            return <ProfileBadge key={`ProfileBadge-${crypto.randomUUID()}`} memberState={member} />;
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
export default RetroInfo;

RetroInfo.displayName = 'RetroInfo';
