import { create } from 'zustand';
import { MemberType } from '~/query/common/commonQueries.types';

type MemberList = MemberType[];

type MemberListStore = {
  memberList: MemberList | [];
};
const setMemberList = (memberList: MemberList) => set({ memberList });
const resetMemberList = () => set({ memberList: [] });

export const memberListActions = {
  setMemberList,
  resetMemberList,
};

const memberListStore = {
  memberList: [],
  ...memberListActions,
};

export const useMemberListStore = create<MemberListStore>(() => memberListStore);

const set = useMemberListStore.setState;
