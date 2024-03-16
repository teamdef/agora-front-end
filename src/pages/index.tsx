import { useState } from 'react';
import Badge from '~/components/common/display/Badge';
import DateDropdown from '~/components/common/dropdown/DateDropdown';
import MemberDropdown, { UserType } from '~/components/common/dropdown/MemberDropdown';
import Pagination from '~/components/common/navigation/Pagination';
import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import Tab from '~/components/common/navigation/Tab';

const mockData: UserType[] = [
  {
    id: 1,
    profileImg: '',
    name: '진현우',
  },
  {
    id: 2,
    profileImg: '',
    name: '진현우',
  },
  {
    id: 3,
    profileImg: '',
    name: '진현우',
  },
  {
    id: 4,
    profileImg: '',
    name: '진현우',
  },
];

const TAB_MENU = ['이번 회고록', '지난 회고록'];
const Page = () => {
  const [current, setCurrent] = useState(110);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [memberDrop, setMemberDrop] = useState<UserType[]>([]);
  const [tab, setTab] = useState<number>(0);

  const totalPage = 115;

  const currentHandler = (idx: number) => {
    setCurrent(idx);
  };

  const dropdownHandler = (value: string | null) => {
    setDropdown(value);
  };

  const tabHandler = (idx: number) => {
    setTab(idx);
  };
  const memberDropHandler = (newData: UserType[]) => {
    setMemberDrop(newData);
  };

  return (
    <div style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: '300px' }}>
      <Badge label="시작 전" status="problem" />
      <Pagination currentPage={current} pagehandler={currentHandler} totalPage={totalPage} />
      <DateDropdown value={dropdown} placeHolder="시간을 선택해주세요." valueHandler={dropdownHandler} />
      <MemberDropdown
        selected={memberDrop}
        placeHolder="회고의 참여자를 선택해주세요."
        valueHandler={memberDropHandler}
        memberList={mockData}
      />
      <Tab current={tab} handler={tabHandler} menu={TAB_MENU} />
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
