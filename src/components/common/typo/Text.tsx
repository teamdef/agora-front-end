import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { FontStyleType } from '~/styles/theme';

interface Props {
  variant: keyof FontStyleType;
  color?: string;
  className?: string;
}
const Text = ({ variant, color, children, className }: PropsWithChildren<Props>) => {
  return (
    <Wrapper variant={variant} color={color} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  ${({ theme, variant }) => theme.fontStyle[variant]}
  color:${({ theme, color }) => color || theme.colors.agoraBlack[900]};
`;
export default Text;
