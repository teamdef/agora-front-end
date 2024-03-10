import Modal from './common/Modal';
import styled from 'styled-components';
import { flexCenter, zIndex } from '~/styles/mixin';
import Text from '../typo/Text';
import { useConfirmDialogStore } from '~/store/dialog/confirmDialog';
import { colors } from '~/styles/theme';

const ConfirmDialog = () => {
  const state = useConfirmDialogStore();
  if (!state.isOpen) {
    return null;
  }
  return (
    <Modal portalId="confirm-dialog">
      <Wrapper>
        <DialogContentWrapper>
          {typeof state.message === 'string' && <Text variant="headline_1">{state.message}</Text>}
          {typeof state.message !== 'string' && state.message}
          {state?.subMessage && (
            <DialogSubContentWrapper>
              <Text variant="body_2" color={colors.agoraBlack[400]}>
                {state.subMessage}
              </Text>
            </DialogSubContentWrapper>
          )}
        </DialogContentWrapper>
        <ButtonGroup>
          <CancelButton onClick={state?.onCancel}>
            <Text color={colors.agoraBlue[400]} variant="body_1">
              {state.cancelLabel}
            </Text>
          </CancelButton>
          <ConfirmButton onClick={state?.onConfirm}>
            <Text color="#fff" variant="body_1">
              {state.confirmLabel}
            </Text>
          </ConfirmButton>
        </ButtonGroup>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  width: calc(380px - 32px);
  padding: 16px;
  padding-top: 52px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 14px 0px ${({ theme }) => `${theme.colors.agoraBlack[900]}25`};
  ${zIndex.layer4};
`;

const DialogContentWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;
const DialogSubContentWrapper = styled.div`
  ${flexCenter}
  margin-top:8px;
  > div {
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 36px;
`;
const ConfirmButton = styled.button`
  ${flexCenter}

  height:50px;
  background-color: ${({ theme }) => theme.colors.agoraBlue[400]};
  border-radius: 6px;
  width: 100%;
`;
const CancelButton = styled.button`
  ${flexCenter}
  height:50px;
  background-color: #fff;
  border-radius: 6px;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors.agoraBlue[400]};
`;

export default ConfirmDialog;
