import styled from 'styled-components';
import StateSelectBox from './StateSelectBox';
import { MouseEvent, useState } from 'react';
import { DropdownArrowDown, DropdownArrowUp } from 'public/assets/svgs';
import useOutsideClick from '~/hooks/useOutsideClick';
import { ProblemStatus } from '~/types/retro/sprint';

interface DropdownProps {
  placeHolder: string;
  value: ProblemStatus['value'];
  valueHandler: (value: ProblemStatus['value']) => void;
}

const StateDropdown = ({ valueHandler, value, placeHolder }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpenHandler = (e: MouseEvent) => {
    setIsOpen((prev) => !prev);
    e.stopPropagation();
  };

  const closeHandler = () => setIsOpen(false);

  const wrapper = useOutsideClick(closeHandler);

  return (
    <Wrapper ref={wrapper}>
      <PlaceHolderBox onClick={toggleIsOpenHandler} $isOpen={isOpen} $value={value}>
        {value ?? placeHolder}
        {isOpen ? <DropdownArrowUp /> : <DropdownArrowDown />}
      </PlaceHolderBox>
      {isOpen && <StateSelectBox selected={value} valueHandler={valueHandler} closeHandler={closeHandler} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const PlaceHolderBox = styled.div<{ $isOpen: boolean; $value: string | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  user-select: none;
  border-radius: 8px;
  border: 1px solid ${({ theme, $isOpen }) => ($isOpen ? theme.colors.agoraBlue[300] : theme.colors.agoraBlack[100])};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, $value }) => ($value ? theme.colors.agoraBlack[800] : theme.colors.agoraBlack[300])};

  ${({ theme, $value }) => ($value ? theme.fontStyle.detail_1 : theme.fontStyle.detail_2)}
  cursor: pointer;
`;
export default StateDropdown;
