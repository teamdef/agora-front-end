import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import Text from '~/components/common/typo/Text';

interface Props {
  label: string;
  required?: boolean;
}

const FormRow = ({ label, required, children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper required={required}>
      <Text variant="subtitle_1" className="label">
        {label}
      </Text>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div<Pick<Props, 'required'>>`
display:flex;
width:100%;

  ${({ required, theme }) =>
    required &&
    css`
      .label::after {
        content: '*';
        color: ${theme.colors.agoraBlue[400]};
        margin-left: 7px;
        position: relative;
        top: 0;
      }
    `}
`;
export default FormRow;
