import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import SprintReview from '~/components/retrospect/sprint';
import { colors } from '~/styles/theme';

const Page = () => {
  return <SprintReview />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout bgColor={colors.dashboard}>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
