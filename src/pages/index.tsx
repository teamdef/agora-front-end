import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';

export const LOGIN_USER = {
  id: 1,
  profileImg: '',
  nickname: '지녀누',
  name: '진현우',
};

const Page = () => {
  return <div></div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
