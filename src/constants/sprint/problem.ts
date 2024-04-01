import { ProblemStatus } from '~/types/retro/sprint';

export const STATE_LIST = [
  { label: '문제 인식', value: 'problem' },
  { label: '개선중', value: 'try' },
  { label: '문제 해결', value: 'solve' },
] as const;
