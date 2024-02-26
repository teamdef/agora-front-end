import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import RetroSprintCreate from '~/components/retro/sprint/create';

const Page = () => {
  return <RetroSprintCreate />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
