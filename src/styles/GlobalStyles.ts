import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const styles = css`
  // your global styles
  button {
    border: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
  ${reset}
`;

export default GlobalStyles;
