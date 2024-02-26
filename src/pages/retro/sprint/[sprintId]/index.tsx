import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import RetroSprintDetail from '~/components/retro/sprint/detail';

const Page = () => <RetroSprintDetail />;

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
