import Backdrop from './Backdrop';
import Portal from './Portal';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { zIndex } from '~/styles/mixin';

interface ModalProps {
  portalId?: string;
  onBackdropClick?: () => void;
}
const Modal = ({ portalId, onBackdropClick, children }: PropsWithChildren<ModalProps>) => {
  return (
    <Portal id={portalId}>
      <Backdrop onBackdropClick={onBackdropClick}>
        <ModalWrapper>{children}</ModalWrapper>
      </Backdrop>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  ${zIndex.layer3}
`;
export default Modal;
