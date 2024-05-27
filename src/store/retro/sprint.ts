import { create } from 'zustand';
import { RetroSprintDetailDTO } from '~/core/retro/retroService.types';

type RetroSprintState = RetroSprintDetailDTO;

type RetroSprintStore = {
  retroSprint: RetroSprintState;
};
const INITIAL_RETRO_SPRINT: RetroSprintState = {
  id: 0,
  title: '',
  creator: { id: 0, name: '', nickname: '', profileImg: '' },
  createTime: '',
  members: [],
  projectId: 0,
  keeps: [],
  problems: [],
};
const setRetroSprint = (retroSprint: RetroSprintState) => {
  set({ retroSprint });
};

const resetRetroSprint = () => {
  set({ retroSprint: INITIAL_RETRO_SPRINT });
};

export const retroSprintActions = {
  setRetroSprint,
  resetRetroSprint,
};

const retroSprintStore = {
  retroSprint: INITIAL_RETRO_SPRINT,
  ...retroSprintActions,
};

export const useRetroSprintStore = create<RetroSprintStore>(() => retroSprintStore);

const set = useRetroSprintStore.setState;
