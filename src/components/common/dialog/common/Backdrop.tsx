import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import useBodyScrollLock from '~/hooks/useBodyScrollLock';
import { flexCenter, zIndex } from '~/styles/mixin';

interface BackdropProps {
  onBackdropClick?: () => void;
}

const Backdrop = ({ children, onBackdropClick }: PropsWithChildren<BackdropProps>) => {
  useBodyScrollLock(true);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onBackdropClick || e.target !== e.currentTarget) return;

    onBackdropClick?.();
  };

  return <Wrapper onClick={handleBackdropClick}>{children}</Wrapper>;
};

export default Backdrop;

const Wrapper = styled.div`
  ${zIndex.layer2}
  ${flexCenter}
  position: fixed;
  overflow-y: auto;
  inset: 0;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.6);
`;
