import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const styles = css`
  // your global styles
  body {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }
  button {
    border: none;
  }
  input {
    padding: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
  
`;

export default GlobalStyles;
