import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import MyProjectList from '~/components/myProject/list';

const Page = () => {
  return <MyProjectList />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GNBLayout>{page}</GNBLayout>;
};

export default Page;
