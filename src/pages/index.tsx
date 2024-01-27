import { useState } from 'react';
import Pagination from '~/components/common/navigation/Pagination';

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

export default Page;
