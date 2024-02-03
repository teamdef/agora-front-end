import { useState } from 'react';
import Badge from '~/components/common/display/Badge';
import Dropdown from '~/components/common/dropdown/Dropdown';
import Pagination from '~/components/common/navigation/Pagination';
import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';

const Page = () => {
  const [current, setCurrent] = useState(110);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const totalPage = 115;

  const currentHandler = (idx: number) => {
    setCurrent(idx);
  };
  const dropdownHandler = (value: string) => {
    setDropdown(value);
  };

  return (
    <div style={{ padding: '100px' }}>
      <Badge label="시작 전" status="todo" />
      <Pagination currentPage={current} pagehandler={currentHandler} totalPage={totalPage} />
      <Dropdown type="time" value={dropdown} placeHolder="시간을 선택해주세요." valueHandler={dropdownHandler} />
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
