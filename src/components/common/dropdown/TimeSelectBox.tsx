'use client';

import { Check, OrangeCircle } from 'public/assets/svgs';
import styled from 'styled-components';
import { theme } from '~/styles/theme';

interface TimeSelectBox {
  value: string | null;
  valueHandler: (value: string) => void;
  closeHandler: () => void;
  scrollPerView?: number;
}

const TIME_OPTIONS: string[] = ['5분 전', '10분 전', '15분 전', '20분 전', '30분 전', '1시간 전'];

const TimeSelectBox = ({ value, valueHandler, closeHandler, scrollPerView }: TimeSelectBox) => {
  const viewItemCount = scrollPerView ?? 4;

  const onClickOption = (value: string) => {
    valueHandler(value);
    closeHandler();
  };

  return (
    <Wrapper>
      <SelectBox>
        {TIME_OPTIONS.map((option: string) => {
          const uuid = self.crypto.randomUUID();
          const isActive = value === option;
          return (
            <Option key={`TimeSelectBox-${uuid}`} onClick={() => onClickOption(option)} $isActive={isActive}>
              <Content>
                <OrangeCircle />
                {option}
              </Content>
              {isActive && <Check viewBox="0 0 25 25" color={theme.colors.agoraBlue[400]} width={18} height={18} />}
            </Option>
          );
        })}
      </SelectBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[50]};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
`;
const SelectBox = styled.ul``;
const Option = styled.li<{ $isActive: boolean }>`
  padding: 12px 18px 12px 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.agoraBlack[800] : theme.colors.agoraBlack[600])};
  &:hover {
    color: ${({ theme }) => theme.colors.agoraBlack[800]};
  }
`;
const Content = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export default TimeSelectBox;
