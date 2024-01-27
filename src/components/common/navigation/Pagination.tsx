'use client';

import { ArrowLeft } from 'public/assets/svgs';
import { useEffect } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  pagehandler: (idx: number) => void;
}

const Pagination = ({ totalPage, currentPage, pagehandler }: PaginationProps) => {
  const firstNum = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const arrLength = firstNum + 9 > totalPage ? totalPage - firstNum + 1 : 10;
  const pageArray = Array.from(new Array(arrLength), (x, i) => firstNum + i);

  return (
    <Wrapper>
      <PrevButtonBox>
        <ArrowLeft />
      </PrevButtonBox>
      <PaginationList>
        {pageArray.map((item, idx) => {
          return (
            <PaginationItem $isActive={currentPage === item} onClick={() => pagehandler(item)}>
              {item}
            </PaginationItem>
          );
        })}
      </PaginationList>
      <NextButtonBox></NextButtonBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  gap: 10px;
`;
const PrevButtonBox = styled.div``;
const NextButtonBox = styled.div``;
const PaginationList = styled.ul`
  gap: 10px;
  display: flex;
`;
const PaginationItem = styled.li<{ $isActive: boolean }>`
  width: 18px;
  height: 24px;
  cursor: pointer;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.agoraBlue[400] : theme.colors.agoraBlack[700])};
  text-decoration-line: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};
  ${({ theme }) => theme.fontStyle.detail_2}
`;
export default Pagination;
