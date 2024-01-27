'use client';
import styled from 'styled-components';

interface BadgeProps {
  label: string;
  status: 'todo' | 'inProgress' | 'done';
}
const Badge = ({ label, status }: BadgeProps) => {
  return (
    <Box $status={status}>
      <span>{label}</span>
    </Box>
  );
};

const Box = styled.span<{ $status: BadgeProps['status'] }>`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 2px 12px;
  background-color: ${({ theme }) => theme.colors.badge.todo[50]};
  border-radius: 12.5px;
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
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.fontStyle.detail_2}
    &::before {
      content: '';
      position: relative;
      display: block;
      margin-right: 6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      ${({ theme, $status }) => {
        switch ($status) {
          case 'todo':
            return `background-color: ${theme.colors.badge.todo[300]};`;
          case 'inProgress':
            return `background-color: ${theme.colors.badge.inProgress[500]};`;
          case 'done':
            return `background-color: ${theme.colors.badge.done[300]};`;
        }
      }}
    }
  }
`;
export default Badge;
