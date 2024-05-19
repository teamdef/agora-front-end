import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import Projects from '~/components/project/list';

const Page = () => {
  return <Projects />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GNBLayout>{page}</GNBLayout>;
};

export default Page;
