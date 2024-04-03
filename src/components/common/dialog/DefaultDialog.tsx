import styled from 'styled-components';
import Modal from './common/Modal';
import { useDefaultDialogStore } from '~/store/dialog/defaultDialog';

const DefaultDialog = () => {
  const state = useDefaultDialogStore();

  if (!state.isOpen) {
    return null;
  }

  return (
    <Modal portalId="default-dialog" onBackdropClick={state.onClose}>
      {state.content}
    </Modal>
  );
};

export default DefaultDialog;
