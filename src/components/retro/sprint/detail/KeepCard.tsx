import { Delete, Enlarge } from 'public/assets/svgs';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import Button from '~/components/common/inputs/button/Button';
import { Keep } from '~/types/retro/sprint';

const KeepCard = ({ keep }: { keep: Keep }) => {
  return (
    <Wrapper>
      <Header>
        <ProfileBadge memberState={keep.author} />
        <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />
      </Header>
      <Content>{keep.content}</Content>
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
const Header = styled.h4`
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

export default KeepCard;
