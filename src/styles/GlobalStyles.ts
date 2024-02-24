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
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
  }
  button {
    border: none;
  }
  input {
    padding: 0;
    caret-color: ${({ theme }) => theme.colors.agoraBlue[400]};
  }
  button {
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
  
`;

export default GlobalStyles;
