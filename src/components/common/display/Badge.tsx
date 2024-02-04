'use client';
import { GreenCircle, OrangeCircle, YellowCircle } from 'public/assets/svgs';
import styled from 'styled-components';

interface BadgeProps {
  label: string;
  status: 'todo' | 'inProgress' | 'done';
}
const Badge = ({ label, status }: BadgeProps) => {
  return (
    <Box $status={status}>
      {status === 'todo' && <OrangeCircle />}
      {status === 'inProgress' && <YellowCircle />}
      {status === 'done' && <GreenCircle />}
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
  background-color: ${({ theme }) => theme.colors.badge.todo[50]};
  border-radius: 12.5px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.fontStyle.detail_2}
  }
  ${({ theme, $status }) => {
    switch ($status) {
      case 'todo':
        return `background-color: ${theme.colors.badge.todo[50]};`;
      case 'inProgress':
        return `background-color: ${theme.colors.badge.inProgress[50]};`;
      case 'done':
        return `background-color: ${theme.colors.badge.done[50]};`;
    }
  }}
`;
export default Badge;
