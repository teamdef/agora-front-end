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

const RETROSPECT_PATHS = {
  RETROSPECT_QUARTER: '/retrospect/quarter',
  RETROSPECT_SPRINT: '/retrospect/sprint',
};

const SETTING_PATHS = {
  SETTING_PROJECT: '/setting/project',
  SETTING_MEMBER: '/setting/member',
};

export const Paths = {
  ...ROOT_PATHS,
  ...PROJECT_PATHS,
  ...DASHBOARD_PATHS,
  ...RETROSPECT_PATHS,
  ...SETTING_PATHS,
  ...OBJECTIVE_PATHS,
};
export type PathsType = (typeof Paths)[keyof typeof Paths];
