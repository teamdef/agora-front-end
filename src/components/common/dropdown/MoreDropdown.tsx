import { ReactNode } from 'react';
import styled from 'styled-components';

interface MoreDropdownItem {
  icon: ReactNode;
  title: string;
  onClick: () => void;
}
interface MoreDropdownProps {
  items: MoreDropdownItem[];
  toggleMore: () => void;
}

const MoreDropdown = ({ items, toggleMore }: MoreDropdownProps) => {
  const onClickHandler = (_onClick: MoreDropdownItem['onClick']) => {
    _onClick();
    toggleMore();
  };
  return (
    <Wrapper>
      {items.map((item: MoreDropdownItem) => {
        return (
          <MoreItem key={`MoreDropdownItem-${crypto.randomUUID()}`} onClick={() => onClickHandler(item.onClick)}>
            {item.icon}
            {item.title}
          </MoreItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 4px);
  right: -12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[100]};
  background: '#fff';
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
  z-index: 1;
`;
const MoreItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  gap: 6px;

  color: ${({ theme }) => theme.colors.agoraBlack[600]};
`;
export default MoreDropdown;

MoreDropdown.displayName = 'MoreDropdown';
