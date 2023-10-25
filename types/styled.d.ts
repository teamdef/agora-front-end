import 'styled-components';
import type theme from '@/styles/themes';

declare module 'styled-components' {
  interface DefaultTheme extends theme {}
}
