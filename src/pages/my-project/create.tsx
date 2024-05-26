import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import CreateProject from '~/components/myProject/create/MyProjectCreate';

const Page = () => {
  return <CreateProject />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GNBLayout>{page}</GNBLayout>;
};

export default Page;
