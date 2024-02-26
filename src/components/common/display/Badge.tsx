import { GreenCircle, OrangeCircle, YellowCircle } from 'public/assets/svgs';
import styled from 'styled-components';

export type BadgeStatus = 'problem' | 'try' | 'solve';
interface BadgeProps {
  label: string;
  status: BadgeStatus;
}
const Badge = ({ label, status }: BadgeProps) => {
  return (
    <Box $status={status}>
      {status === 'problem' && <OrangeCircle />}
      {status === 'try' && <YellowCircle />}
      {status === 'solve' && <GreenCircle />}
      <span>{label}</span>
    </Box>
  );
};

const Box = styled.span<{ $status: BadgeProps['status'] }>`
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
