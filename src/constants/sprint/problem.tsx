import { OrangeCircle, YellowCircle } from 'public/assets/svgs';

export const START = 'START';
export const INPROGRESS = 'IN-PROGRESS';
export const FINISH = 'FINISH';

export const STATE_LIST = [
  { label: '문제 인식', value: START },
  { label: '개선중', value: INPROGRESS },
  { label: '문제 해결', value: FINISH },
] as const;

export const BADGE_STATUS = {
  START: {
    label: '문제 인식',
    value: 'START',
    icon: <OrangeCircle />,
  },
  'IN-PROGRESS': {
    label: '개선중',
    value: 'IN-PROGRESS',
    icon: <YellowCircle />,
  },
  FINISH: {
    label: '문제 해결',
    value: 'FINISH',
    icon: <YellowCircle />,
  },
} as const;
