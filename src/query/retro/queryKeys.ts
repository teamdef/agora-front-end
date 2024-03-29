export const RETRO = 'RETRO';
export const SPRINT = 'SPRINT';
export const EXAMPLE_KEY = 'HOUSE_INFO';
export const CREATE = 'CREATE';
export const LIST = 'LIST';
export const DETAIL = 'DETAIL';

const RETRO_QUERY_KEYS = {
  RETRO_EXAMPLE: [RETRO, EXAMPLE_KEY],
  RETRO_SPRINT_CREATE: [RETRO, SPRINT, CREATE],
  RETRO_SPRINT_LIST: [RETRO, SPRINT, LIST],
  RETRO_SPRINT_DETAIL: [RETRO, SPRINT, DETAIL],
};

export default RETRO_QUERY_KEYS;
