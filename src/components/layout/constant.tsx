import { PathsType, Paths } from '~/constants/Paths';
import { IconSrc } from '../common/display/Icon';
import { ReactElement } from 'react';
import { Folder, Home, PaperPlane, Settings } from 'public/assets/svgs';
export interface Menu {
  title: string;
  path: PathsType;
  icon?: IconSrc | ReactElement;
  subMenu?: Menu[];
}
export const GNB_MENUS: Menu[] = [{ title: '프로젝트', path: Paths.PROJECT }];

export const LNB_MENUS: Menu[] = [
  {
    title: '대시보드',
    path: Paths.DASHBOARD,
    icon: <Home />,
  },
  {
    title: '목표관리',
    path: Paths.OBJECTIVE_VISION,
    icon: <PaperPlane />,
    subMenu: [
      { title: '비전', path: Paths.OBJECTIVE_VISION },
      { title: 'OKR', path: Paths.OBJECTIVE_OKR },
    ],
  },
  {
    title: '회고',
    path: Paths.RETRO_SPRINT,
    icon: <Folder />,
    subMenu: [
      { title: '스프린트회고', path: Paths.RETRO_SPRINT },
      { title: '분기회고', path: Paths.RETRO_QUARTER },
    ],
  },
  {
    title: '설정',
    path: Paths.SETTING_PROJECT,
    icon: <Settings />,
    subMenu: [
      { title: '프로젝트 관리', path: Paths.SETTING_PROJECT },
      { title: '멤버', path: Paths.SETTING_MEMBER },
    ],
  },
];
