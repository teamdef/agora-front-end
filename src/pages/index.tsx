import { useState } from 'react';
import Badge from '~/components/common/display/Badge';
import DateDropdown from '~/components/common/dropdown/DateDropdown';
import MemberDropdown, { DropdownMemberStatus } from '~/components/common/dropdown/MemberDropdown';
import Pagination from '~/components/common/navigation/Pagination';
import { ReactElement } from 'react';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import Tab from '~/components/common/navigation/Tab';

const mockData: DropdownMemberStatus[] = [
  {
    id: 1,
    profileImage: '',
    nickname: '진현우',
  },
  {
    id: 2,
    profileImage: '',
    nickname: '진현우',
  },
  {
    id: 3,
    profileImage: '',
    nickname: '진현우',
  },
  {
    id: 4,
    profileImage: '',
    nickname: '진현우',
  },
];

const TAB_MENU = ['이번 회고록', '지난 회고록'];
const Page = () => {
  const [current, setCurrent] = useState(110);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [memberDrop, setMemberDrop] = useState<DropdownMemberStatus[]>([]);
  const [tab, setTab] = useState<number>(0);

  const totalPage = 115;

  const currentHandler = (idx: number) => {
    setCurrent(idx);
  };

  const dropdownHandler = (value: string) => {
    setDropdown(value);
  };

  const tabHandler = (idx: number) => {
    setTab(idx);
  };
  const memberDropHandler = (value: DropdownMemberStatus) => {
    console.log(value.id);
    const hasValue = memberDrop.find((member) => member.id === value.id);
    if (hasValue) {
      setMemberDrop(memberDrop.filter((user) => user.id !== value.id));
    } else {
      setMemberDrop((prev) => [...prev, value]);
    }
  };

  return (
    <div style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Badge label="시작 전" status="todo" />
      <Pagination currentPage={current} pagehandler={currentHandler} totalPage={totalPage} />
      <DateDropdown value={dropdown} placeHolder="시간을 선택해주세요." valueHandler={dropdownHandler} />
      <MemberDropdown
        value={memberDrop}
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
