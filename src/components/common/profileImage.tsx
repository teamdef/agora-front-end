import { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface ProfileImageProps {
  src?: string;
  size?: string;
}
const ProfileImage = ({ src, size }: ProfileImageProps) => {
  const DEFAULT_IMG = '/assets/svgs/UserProfile.svg';
  const isSrc = src || DEFAULT_IMG;

  const onErrorHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMG;
  };

  return <ProfileImageBox $size={size} src={isSrc} onError={onErrorHandler} alt="유저프로필이미지" />;
};

const ProfileImageBox = styled.img<{ $size?: string }>`
  width: ${({ $size }) => $size || '32px'};
  height: ${({ $size }) => $size || '32px'};
  object-fit: cover;
  border-radius: 50%;
`;
export default ProfileImage;
