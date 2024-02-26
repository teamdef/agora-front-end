import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import RetrospectSprint from '~/components/retrospect/sprint/index';
import { colors } from '~/styles/theme';

const Page = () => {
  return <RetrospectSprint />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout bgColor={colors.dashboard}>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
