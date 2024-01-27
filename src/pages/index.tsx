import { useState } from 'react';
import CheckBox from '~/components/common/inputs/checkBox/CheckBox';
import Pagination from '~/components/common/navigation/Pagination';

const Page = () => {
  const [current, setCurrent] = useState(119);
  const totalPage = 120;

  const currentHandler = (idx: number) => {
    setCurrent(idx);
  };
  return (
    <div>
      <CheckBox id="a" checked />
      <Pagination currentPage={current} pagehandler={currentHandler} totalPage={totalPage} />
    </div>
  );
};

export default Page;
