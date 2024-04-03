import { ReactElement } from 'react';
import LoginDialog from '~/components/dialog/LoginDIalog';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';

const Page = () => {
  const handleLoginDialogOpen = () => {
    defaultDialogActions.open({ content: <LoginDialog /> });
  };
  return (
    <div>
      랜딩페이지 로 변경해야 할 듯 (레몬베이스 참고) <button onClick={handleLoginDialogOpen}>로그인</button>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
