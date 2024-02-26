import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import RetrospectSprintCreate from '~/components/retrospect/sprint/create';

const Page = () => {
  return <RetrospectSprintCreate />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
