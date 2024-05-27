import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import { useRetroSprintStore } from '~/store/retro/sprint';
import stringToDateTextFormatter from '~/utils/time/stringToDateTextFormatter';

const RetroInfo = () => {
  const { creator: author, createTime, members } = useRetroSprintStore((state) => state.retroSprint);
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
          {members.map((member) => {
            return <ProfileBadge key={crypto.randomUUID()} memberState={member} />;
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
