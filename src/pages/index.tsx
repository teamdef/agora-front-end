import { ReactElement } from 'react';
import LoginDialog from '~/components/dialog/LoginDIalog';
import GNBLayout from '~/components/layout/GNBLayout';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';

const Page = () => {
  const handleLoginDialogOpen = () => {
    defaultDialogActions.open({ content: <LoginDialog /> });
  };
  return (
    <div>
      랜딩페이지 입니다. <button onClick={handleLoginDialogOpen}>로그인</button>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GNBLayout>{page}</GNBLayout>;
};

export default Page;
