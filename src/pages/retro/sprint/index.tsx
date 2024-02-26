import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import RetroSprint from '~/components/retro/sprint/index';
import { colors } from '~/styles/theme';

const Page = () => {
  return <RetroSprint />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout bgColor={colors.dashboard}>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
