
## 적용된 규칙
- main branch에는 PR을 통해서만 merge 될 수 있도록 protect 설정 (삭제도 불가능)




## dialog 구현

dialog의 명명은 mui 규칙을 따라가도록 하였습니다. .

우선, portal을 이용해 다이얼로그 컴포넌트를 root에 렌더링 할 수 있고, backdrop에 렌더링 할 수 있도록 하는 Modal 컴포넌트를 만들었습니다.

``` jsx
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
```

- Portal 컴포넌트는 React.createPortal을 이용해 child를 root에 렌더링 되도록 합니다.
- Backdrop 컴포넌트는 dialog의 어두운 배경 및 클릭 시 핸들러함수를 수행해주는 컴포넌트 입니다.

이후, Modal 컴포넌트를 이용해 전역 스토어의 상태에 따라 다이얼로그 컴포넌트를 렌더링 하는 컴포넌트를 만들어 _app.tsx에 추가합니다.
정형화된 모달 / 비정형 다이얼로그를 구분하여 모달 상태를 전역 스토어에서 관리하도록 하였습니다.

형태가 정해지지 않은 다이얼로그의 경우 전역 스토어의 값이 isOpen일 경우 content를 바로 렌더링 해줍니다. 


##### DefaultDialog.tsx
``` jsx
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
```

형태가 정해져 있는 다이얼로그일 경우 전역 스토어 값을 가져와 디자인에 맞게 UI를 구성해줍니다.
전역 스토어의 값이 isOpen일 경우 다이얼로그를 렌더링합니다.


##### ConfirmDialog.tsx
``` jsx
const ConfirmDialog = () => {
  const state = useConfirmDialogStore();
  if (!state.isOpen) {
    return null;
  }
  return (
    <Modal portalId="confirm-dialog">
      <Wrapper>
        <DialogContentWrapper>
          {typeof state.message === 'string' && <div>{state.message}</div>}
          {typeof state.message !== 'string' && state.message}
          {state?.subMessage && (
            <DialogSubContentWrapper>
               {state.subMessage}
            </DialogSubContentWrapper>
          )}
        </DialogContentWrapper>
        <ButtonGroup>
          <CancelButton onClick={state?.onCancel}>
            {state.cancelLabel}
          </CancelButton>
          <ConfirmButton onClick={state?.onConfirm}>
           {state.confirmLabel}
          </ConfirmButton>
        </ButtonGroup>
      </Wrapper>
    </Modal>
  );
};
};
```


##### _app.tsx
``` jsx
  ...
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
            {getLayout(<Component {...pageProps} />)}
            <ConfirmDialog />
            <DefaultDialog />
          </ErrorBoundary>
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  ...
  );
```

다이얼로그를 호출 할 땐 아래와 같이 사용할 수 있습니다.

``` jsx
  const handleClick = ()=>{
    confirmDialogActions.open({
      message:'hello world!',
      confirmLabel:'반가워요',
      onConfirm:()=>console.log('hello world');
    });

    defaultDialogAction.open({
      content:<div>hello world!</div>
    });
  }

```

위와 같이 작성할 경우, defaultDialog 위에 confirmDialog가 표시됩니다. 
confirm 버튼을 누르면 onConfirm을 등록했을 경우 해당 함수를 호출하고 dialog를 닫습니다.

