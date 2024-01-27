'use client';

import { ArrowFirst, ArrowLast, ArrowLeft, ArrowRight } from 'public/assets/svgs';
import styled from 'styled-components';
import { theme } from '~/styles/theme';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  pagehandler: (idx: number) => void;
}

const Pagination = ({ totalPage, currentPage, pagehandler }: PaginationProps) => {
  const firstNum = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const arrLength = firstNum + 9 > totalPage ? totalPage - firstNum + 1 : 10;
  const pageArray = Array.from(new Array(arrLength), (x, i) => firstNum + i);

  const firstPage = () => pagehandler(1);
  const prevPage = () => pagehandler(currentPage - 10);
  const nextPage = () => (currentPage + 10 > totalPage ? pagehandler(totalPage) : pagehandler(currentPage + 10));
  const lastPage = () => pagehandler(totalPage);

  return (
    <Wrapper>
      <PrevButtonBox>
        {firstNum !== 1 && (
          <>
            <ArrowFirst
              width={16}
              height={16}
              viewBox="0 0 25 25"
              color={theme.colors.agoraBlack[400]}
              onClick={firstPage}
            />
            <ArrowLeft
              width={16}
              height={16}
              viewBox="0 0 25 25"
              color={theme.colors.agoraBlack[400]}
              onClick={prevPage}
            />
          </>
        )}
      </PrevButtonBox>
      <PaginationList>
        {pageArray.map((num) => {
          return (
            <PaginationItem $isActive={currentPage === num} onClick={() => pagehandler(num)}>
              {num}
            </PaginationItem>
          );
        })}
      </PaginationList>
      <NextButtonBox>
        {pageArray[9] < totalPage && (
          <>
            <ArrowRight
              width={16}
              height={16}
              viewBox="0 0 25 25"
              color={theme.colors.agoraBlack[400]}
              onClick={nextPage}
            />
            <ArrowLast
              onClick={lastPage}
              width={16}
              height={16}
              viewBox="0 0 25 25"
              color={theme.colors.agoraBlack[400]}
            />
          </>
        )}
      </NextButtonBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    cursor: pointer;
  }
`;
const PrevButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 24px;
`;
const NextButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 24px;
`;
const PaginationList = styled.ul`
  gap: 10px;
  display: flex;
`;
const PaginationItem = styled.li<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  height: 24px;
  cursor: pointer;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.agoraBlue[400] : theme.colors.agoraBlack[700])};
  text-decoration-line: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};
  ${({ theme }) => theme.fontStyle.detail_2}
`;
export default Pagination;
