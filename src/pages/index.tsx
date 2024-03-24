import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';

export const LOGIN_USER = {
  id: 4,
  nickname: '현우닉',
  name: '진현우',
  profileImg: 'https://catchmeimages.s3.ap-northeast-2.amazonaws.com/2023-04-23_K1OMLSC1zVKgDM0ttXgK.png',
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
