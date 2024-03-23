import { GreenCircle, OrangeCircle, YellowCircle } from 'public/assets/svgs';
import styled from 'styled-components';
import { ProblemStatus } from '~/types/retro/sprint';

type BadgeProps = ProblemStatus & {
  onClick: () => void;
};

const Badge = ({ label, value, onClick }: BadgeProps) => {
  return (
    <Box $status={value} onClick={onClick}>
      {value === 'problem' && <OrangeCircle />}
      {value === 'try' && <YellowCircle />}
      {value === 'solve' && <GreenCircle />}
      <span>{label}</span>
    </Box>
  );
};

const Box = styled.span<{ $status: ProblemStatus['value'] }>`
  position: relative;
  display: inline-flex;
  align-self: flex-start;
  justify-content: center;
  gap: 6px;
  align-items: center;
  padding: 2px 12px;
  background-color: ${({ theme }) => theme.colors.badge.problem[50]};
  border-radius: 12.5px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.fontStyle.detail_2}
  }
  ${({ theme, $status }) => {
    switch ($status) {
      case 'problem':
        return `background-color: ${theme.colors.badge.problem[50]};`;
      case 'try':
        return `background-color: ${theme.colors.badge.try[50]};`;
      case 'solve':
        return `background-color: ${theme.colors.badge.solve[50]};`;
    }
  }}
`;
export default Badge;
