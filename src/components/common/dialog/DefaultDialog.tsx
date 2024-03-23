import styled from 'styled-components';
import Modal from './common/Modal';
import { useDefaultDialogStore } from '~/store/dialog/defaultDialog';
// {children}:{chidlren:React.ReactNode}
const DefaultDialog = () => {
  const state = useDefaultDialogStore();

  if (!state.isOpen) {
    return null;
  }

  return (
    <Modal portalId="default-dialog" onBackdropClick={state.onClose}>
      <Wrapper>{state.content}</Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 648px;
  max-height: 768px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 14px 0px ${({ theme }) => `${theme.colors.agoraBlack[900]}25`};
`;

export default DefaultDialog;
