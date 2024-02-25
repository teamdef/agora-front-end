import { Delete, Enlarge } from 'public/assets/svgs';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import Button from '~/components/common/inputs/button/Button';
import { KeepItemData, ProblemTryData } from '~/types/retro/sprint';

interface KeepItemProps {
  data: KeepItemData;
}

const KeepItem = ({ data }: KeepItemProps) => {
  return (
    <Wrapper>
      <Title>
        <ProfileBadge memberState={data.creator} />
        <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />
      </Title>
      <Content>{data.content}</Content>
      <Button
        large
        label="자세히 보기"
        icon={<Enlarge style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 14px 20px;
  border-radius: 15px;
  border: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
  background: #fff;
`;
const Title = styled.h4`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
  background: #fff;
`;

const Content = styled.div`
  ${({ theme }) => theme.fontStyle.body_2};
  color: ${({ theme }) => theme.colors.agoraBlack[700]};
  position: relative;
  overflow: hidden;
  height: 48px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CommentBoxTitle = styled.div`
  h4 {
    ${({ theme }) => theme.fontStyle.subtitle_2};
    color: ${({ theme }) => theme.colors.agoraBlack[700]};
  }
  span {
    ${({ theme }) => theme.fontStyle.detail_2};
    color: ${({ theme }) => theme.colors.agoraBlack[400]};
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CommentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 9.5px 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[200]};
`;
export default KeepItem;
