import { create } from 'zustand';
import { MemberType } from '~/query/common/commonQueries.types';

type MemberList = MemberType[];

export const useMemberListStore = create((set) => ({
  memberList: [],
  setMemberList: (memberList: MemberList) => set({ memberList }),
  resetMemberList: () => set({ memberList: [] }),
}));
