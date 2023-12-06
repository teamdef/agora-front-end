import { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface ProfileImageProps {
  src?: string;
  size?: string;
}

const ProfileImage = ({ src, size }: ProfileImageProps) => {
  const DEFAULT_IMG = '/assets/svgs/UserProfile.svg';

  const onErrorHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMG;
  };

  return <Box $size={size} src={src || DEFAULT_IMG} onError={onErrorHandler} alt="유저프로필이미지" />;
};

const Box = styled.img<{ $size?: ProfileImageProps['size'] }>`
  width: ${({ $size }) => $size || '32px'};
  height: ${({ $size }) => $size || '32px'};
  object-fit: cover;
  border-radius: 50%;
`;
export default ProfileImage;
