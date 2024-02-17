import { useState } from 'react';
import Pagination from '~/components/common/navigation/Pagination';
import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';

const Page = () => {
  const [current, setCurrent] = useState(110);
  const totalPage = 115;

  const currentHandler = (idx: number) => {
    setCurrent(idx);
  };
  return (
    <div style={{ padding: '100px' }}>
      <Pagination currentPage={current} pagehandler={currentHandler} totalPage={totalPage} />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <GNBLayout>
      <LNBLayout>{page}</LNBLayout>
    </GNBLayout>
  );
};

export default Page;
