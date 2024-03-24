import { ReactElement, useEffect, useState } from 'react';
import Badge from '~/components/common/display/Badge';
import DateDropdown from '~/components/common/dropdown/date/DateDropdown';
import MemberDropdown from '~/components/common/dropdown/member/MemberDropdown';
import ProblemEditor from '~/components/common/editor/problem/ProblemEditor';
import Pagination from '~/components/common/navigation/Pagination';
import Tab from '~/components/common/navigation/Tab';
import GNBLayout from '~/components/layout/GNBLayout';
import LNBLayout from '~/components/layout/LNBLayout';
import { UserType } from '~/core/retro/retroService.types';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';

export const LOGIN_USER = {
  id: 1,
  profileImg: '',
  nickname: '지녀누',
  name: '진현우',
};
const mockData: UserType[] = [
  {
    id: 1,
    profileImg: '',
    nickname: '진현우',
    name: '진현우',
  },
  {
    id: 2,
    profileImg: '',
    nickname: '진현우',
    name: '진현우',
  },
  {
    id: 3,
    profileImg: '',
    nickname: '진현우',
    name: '진현우',
  },
  {
    id: 4,
    profileImg: '',
    nickname: '진현우',
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
      <Badge label="문제 인식" value="problem" />
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
