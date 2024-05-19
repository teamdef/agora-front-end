import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import CreateProject from '~/components/project/create/CreateProject';

const Page = () => {
  return <CreateProject />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GNBLayout>{page}</GNBLayout>;
};

export default Page;
