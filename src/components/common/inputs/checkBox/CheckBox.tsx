import styled from 'styled-components';

interface CheckBoxProps {
  id: string;
  checked?: boolean;
  disabled?: boolean;
}

const CheckBox = ({ id, checked, disabled }: CheckBoxProps) => {
  return <Box type="checkbox" id={id} defaultChecked={checked} disabled={disabled} />;
};

const Box = styled.input`
  width: 16px;
  height: 16px;
  appearance: none;
  border-color: transparent;
  background-image: url('/assets/svgs/checkBoxFalse.svg');
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;

  &:disabled {
    background-image: url('/assets/svgs/checkBoxFalseDisabled.svg');
  }

  &:checked {
    background-image: url('/assets/svgs/checkBoxTrue.svg');
    &:disabled {
      background-image: url('/assets/svgs/checkBoxTrueDisabled.svg');
    }
  }
`;
export default CheckBox;
