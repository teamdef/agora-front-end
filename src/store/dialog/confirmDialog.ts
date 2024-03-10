import { create } from 'zustand';

export type ConfirmDialogState = {
  isOpen: boolean;
  message: string | React.ReactNode;
  subMessage?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const initialState: ConfirmDialogState = {
  isOpen: false,
  message: '',
  subMessage: '',
  confirmLabel: '',
  cancelLabel: '',
  onConfirm: undefined,
  onCancel: undefined,
};

const open = (options: Omit<ConfirmDialogState, 'isOpen'>) => {
  return new Promise<boolean>((resolve) => {
    set({
      isOpen: true,
      message: options.message,
      subMessage: options.subMessage,
      confirmLabel: options.confirmLabel || '확인',
      cancelLabel: options.cancelLabel || '취소',
      onConfirm() {
        options.onConfirm?.();
        resolve(true);
        close();
      },
      onCancel() {
        options.onCancel?.();
        resolve(false);
        close();
      },
    });
  });
};

const close = () => {
  set(initialState);
};

export const confirmDialogActions = {
  open,
  close,
};

const confirmDialogStore = {
  ...initialState,
  ...confirmDialogActions,
};

export const useConfirmDialogStore = create<ConfirmDialogState>(() => confirmDialogStore);

const get = useConfirmDialogStore.getState;
const set = useConfirmDialogStore.setState;
