import { Cancel } from 'public/assets/svgs';
import styled from 'styled-components';
import { DropdownMemberStatus } from '../dropdown/MemberDropdown';
import { MouseEvent, SyntheticEvent } from 'react';

interface ProfileBadgeProps {
  memberState: DropdownMemberStatus;
  closeFn?: (value: DropdownMemberStatus) => void;
}
const ProfileBadge = ({ memberState, closeFn }: ProfileBadgeProps) => {
  const DEFAULT_IMG = '/assets/svgs/UserImage.svg';

  const onErrorHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMG;
  };

  const onCloseHandler = (e: MouseEvent, value: DropdownMemberStatus) => {
    if (closeFn) closeFn(value);
    e.stopPropagation();
  };

  return (
    <Wrapper>
      <img
        src={memberState.profileImg !== '' ? memberState.profileImg : DEFAULT_IMG}
        onError={onErrorHandler}
        alt="프로필뱃지 이미지"
      />
      <span>{memberState.name}</span>
      {closeFn && <Cancel onClick={(e: MouseEvent) => onCloseHandler(e, memberState)} />}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.agoraBlack[700]};
  ${({ theme }) => theme.fontStyle.body_2}
  &:hover {
    ${({ theme }) => theme.fontStyle.body_1}
    color: ${({ theme }) => theme.colors.agoraBlack[800]};
  }
  white-space: nowrap;
  img {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export default ProfileBadge;
