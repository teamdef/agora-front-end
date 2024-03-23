import { Check, GreenCircle, OrangeCircle, YellowCircle } from 'public/assets/svgs';
import styled from 'styled-components';
import { STATE_LIST } from '~/constants/sprint/problem';
import { theme } from '~/styles/theme';
import { ProblemStatus } from '~/types/retro/sprint';

interface StateSelectBoxProps {
  selected: ProblemStatus['value'];
  valueHandler: (value: ProblemStatus['value']) => void;
  closeHandler: () => void;
}

const StateSelectBox = ({ selected, valueHandler, closeHandler }: StateSelectBoxProps) => {
  const onClickOption = (value: ProblemStatus['value']) => {
    valueHandler(value);
    closeHandler();
  };

  return (
    <Wrapper $isBlur={STATE_LIST.length > 4}>
      <SelectBox>
        {STATE_LIST.map((state: ProblemStatus) => {
          const isActive = selected === state.value;
          return (
            <Option key={crypto.randomUUID()} onClick={() => onClickOption(state.value)} $isActive={isActive}>
              <Content>
                {state.value === 'problem' && <OrangeCircle />}
                {state.value === 'try' && <YellowCircle />}
                {state.value === 'solve' && <GreenCircle />}
                <span>{state.label}</span>
              </Content>
              {isActive && <Check viewBox="0 0 25 25" color={theme.colors.agoraBlue[400]} width={18} height={18} />}
            </Option>
          );
        })}
      </SelectBox>
    </Wrapper>
  );
};
const Wrapper = styled.div<{ $isBlur: boolean }>`
  position: absolute;
  top: calc(100% + 5px);
  width: 182px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[50]};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
  overflow-y: scroll;
  z-index: 1;
  // 스크롤 시 blur 처리
  /* &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, #fff 100%);
  } */
`;
const SelectBox = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Option = styled.li<{ $isActive: boolean }>`
  padding: 12px 16px 12px 4px;
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
  span {
    ${({ theme }) => theme.fontStyle.detail_2}
  }
`;
export default StateSelectBox;
