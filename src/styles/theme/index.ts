import type { DefaultTheme } from 'styled-components';

export const fontStyle = {
  /** 44px */
  hero_1: 'font-size: 44px;\nfont-weight: 700;\nline-height: 57px;\nletter-spacing: -0.88px;',
  /** 36px */
  hero_2: 'font-size: 36px;\nfont-weight: 700;\nline-height: 47px;\nletter-spacing: -0.72px;',
  /** 32px */
  hero_3: 'font-size: 32px;\nfont-weight: 700;\nline-height: 42px;\nletter-spacing: -0.64px;',
  /** 28px */
  hero_4: 'font-size: 28px;\nfont-weight: 700;\nline-height: 36px;\nletter-spacing: -0.56px;',
  /** 24px */
  headline_1: 'font-size: 24px;\nfont-weight: 600;\nline-height: 31px;\nletter-spacing: -0.48px;',
  /** 20px */
  headline_2: 'font-size: 20px;\nfont-weight: 600;\nline-height: 26px;\nletter-spacing: -0.4px;',
  /** 18px */
  subtitle_1: 'font-size: 18px;\nfont-weight: 600;\nline-height: 27px;\nletter-spacing: -0.36px;',
  /** 16px */
  subtitle_2: 'font-size: 16px;\nfont-weight: 600;\nline-height: 24px;\nletter-spacing: -0.32px;',
  /** 16px */
  body_1: 'font-size: 16px;\nfont-weight: 500;\nline-height: 24px;\nletter-spacing: -0.32px;',
  /** 16px */
  body_2: 'font-size: 16px;\nfont-weight: 400;\nline-height: 24px;\nletter-spacing: -0.32px;',
  /** 14px */
  detail_1: 'font-size: 14px;\nfont-weight: 500;\nline-height: 21px;\nletter-spacing: -0.28px;',
  /** 14px */
  detail_2: 'font-size: 14px;\nfont-weight: 400;\nline-height: 21px;\nletter-spacing: -0.28px;',
  /** 12px */
  caption: 'font-size: 12px;\nfont-weight: 400;\nline-height: 18px;\nletter-spacing: -0.24px;',
};

export const colors = {
  agoraBlack: {
    /** #E7E7EB */
    50: '#E7E7EB',
    /** #CFCFD7 */
    100: '#CFCFD7',
    /** #B7B7C3 */
    200: '#B7B7C3',
    /** #9F9EAE */
    300: '#9F9EAE',
    /** #868599 */
    400: '#868599',
    /** #6E6E86 */
    500: '#6E6E86',
    /** #575672 */
    600: '#575672',
    /** #B7B7C3 */
    700: '#3E3D5D',
    /** #27264A */
    800: '#27264A',
    /** #0E0D35 */
    900: '#0E0D35',
  },
  agoraBlue: {
    bg: '#FBFCFF',
    /** #E7EAFD */
    50: '#E7EAFD',
    /** #C2C9FA */
    100: '#C2C9FA',
    /** #96A6F7 */
    200: '#96A6F7',
    /** #6483F4 */
    300: '#6483F4',
    /** #3468EB */
    400: '#3468EB',
    /** #004BED */
    500: '#004BED',
    /** #0042E2 */
    600: '#0042E2',
    /** #0038D6 */
    700: '#0038D6',
    /** #002CCB */
    800: '#002CCB',
    /** #0016B3 */
    900: '#0016B3',
    /** #FBFCFF */
  },
  badge: {
    problem: {
      /** #FFEADA bgColor*/
      50: '#FFEADA',
      /** #FCCAA6 */
      100: '#FCCAA6',
      /** #F6A770 */
      200: '#F6A770',
      /** #EE833D */
      300: '#EE833D',
      /** #EA691C */
      400: '#EA691C',
      /** #E25002 */
      500: '#E25002',
      /** #DE430A */
      600: '#DE430A',
      /** #D62F10 */
      700: '#D62F10',
      /** #CE0F13 */
      800: '#CE0F13',
      /** #C20016 */
      900: '#C20016',
    },
    try: {
      /** #FCF7C480 bgColor*/
      50: '#FCF7C480',
      /** #FCF7C4 */
      100: '#FCF7C4',
      /** #FAF29D */
      200: '#FAF29D',
      /** #F9EC76 */
      300: '#F9EC76',
      /** #F6E858 */
      400: '#F6E858',
      /** #F4E23B */
      500: '#F4E23B',
      /** #F4D238 */
      600: '#F4D238',
      /** #F2BB30 */
      700: '#F2BB30',
      /** #EFA428 */
      800: '#EFA428',
      /** #EA7C1A */
      900: '#EA7C1A',
    },
    solve: {
      /** #E4FCE6 bgColor*/
      50: '#E4FCE6',
      /** #C7F3CA */
      100: '#C7F3CA',
      /** #AAEAAF */
      200: '#AAEAAF',
      /** #8AE191 */
      300: '#8AE191',
      /** #72D87A */
      400: '#72D87A',
      /** #5BD062 */
      500: '#5BD062',
      /** #51BF58 */
      600: '#51BF58',
      /** #45AC4C */
      700: '#45AC4C',
      /** #3A9A42 */
      800: '#3A9A42',
      /** #277A2F */
      900: '#277A2F',
    },
  },
  warning: {
    /** #FFECEF */
    50: '#FFECEF',
    /** #FFCED4 */
    100: '#FFCED4',
    /** #F99C9D */
    200: '#F99C9D',
    /** #F37476 */
    300: '#F37476',
    /** #FF5252 */
    400: '#FF5252',
    /** #FF3E36 */
    500: '#FF3E36',
    /** #F73536 */
    600: '#F73536',
    /** #E42930 */
    700: '#E42930',
    /** #D72028 */
    800: '#D72028',
    /** #C8111C */
    900: '#C8111C',
  },
  background: '#FFFFFF',
  dashboard: '#FBFCFF',
};

const fontWeight = {
  thin: 100,
  extra_light: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extra_bold: 800,
  black: 900,
};

export type ColorsType = typeof colors;
export type FontStyleType = typeof fontStyle;
export type FontWeightType = typeof fontWeight;

export interface ThemeType {
  colors: ColorsType;
  fontStyle: FontStyleType;
  fontWeight: FontWeightType;
}

/* 타입스크립트에서 DefaultTheme를 사용하려면 interface를 선언해주어야 한다. 아니면 theme가 any타입으로 나오게 된다. */
declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}

export const theme: DefaultTheme = {
  fontStyle,
  fontWeight,
  colors,
};
