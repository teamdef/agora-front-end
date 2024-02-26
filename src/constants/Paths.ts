const ROOT_PATHS = {
  ROOT: '/',
};

const PROJECT_PATHS = {
  PROJECT: '/project',
};

const OBJECTIVE_PATHS = {
  OBJECTIVE_VISION: '/objective/vision',
  OBJECTIVE_OKR: '/objective/okr',
};

const DASHBOARD_PATHS = {
  DASHBOARD: '/dashboard',
};

const RETRO_PATHS = {
  RETRO_QUARTER: '/retro/quarter',
  RETRO_SPRINT: '/retro/sprint',
  RETRO_SPRINT_CREATE: '/retro/sprint/create',
};

const SETTING_PATHS = {
  SETTING_PROJECT: '/setting/project',
  SETTING_MEMBER: '/setting/member',
};

export const Paths = {
  ...ROOT_PATHS,
  ...PROJECT_PATHS,
  ...DASHBOARD_PATHS,
  ...RETRO_PATHS,
  ...SETTING_PATHS,
  ...OBJECTIVE_PATHS,
};
export type PathsType = (typeof Paths)[keyof typeof Paths];
