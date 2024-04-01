import { create } from 'zustand';
import { UserType } from '~/core/retro/retroService.types';

type MemberList = UserType[];

export const useMemberListStore = create((set) => ({
  memberList: [],
  setMemberList: (memberList: MemberList) => set({ memberList }),
  resetMemberList: () => set({ memberList: [] }),
}));
