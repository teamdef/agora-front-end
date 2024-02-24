import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import RetrospectSprintDetail from '~/components/retrospect/sprint/detail';

const Page = () => <RetrospectSprintDetail />;

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
