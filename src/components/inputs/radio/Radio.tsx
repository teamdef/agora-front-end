import styled from 'styled-components';

interface RadioProps {
  name: string;
  checked?: boolean;
  disabled?: boolean;
}

const Radio = ({ name, checked, disabled }: RadioProps) => {
  return <Box type="radio" name={name} disabled={disabled} defaultChecked={checked} />;
};

const Box = styled.input`
  width: 16px;
  height: 16px;
  appearance: none;
  border-color: transparent;
  background-image: url('/assets/svgs/RadioFalse.svg');
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: ${({ disabled, defaultChecked }) =>
    defaultChecked && disabled && `url('/assets/svgs/RadioTrueDisabled.svg') !important`};

  &:disabled {
    background-image: url('/assets/svgs/RadioFalseDisabled.svg');
  }
  &:checked {
    background-image: url('/assets/svgs/RadioTrue.svg');
  }
`;
export default Radio;
