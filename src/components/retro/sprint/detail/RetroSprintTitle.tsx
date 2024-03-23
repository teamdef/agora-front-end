import { Delete, More } from 'public/assets/svgs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MoreDropdown from '~/components/common/dropdown/more/MoreDropdown';
import TitleTextField from '~/components/common/inputs/textField/TitleTextField';
import { theme } from '~/styles/theme';

const moreList = [
  {
    icon: <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />,
    title: '삭제',
    onClick: () => console.log('삭제버튼 클릭'),
  },
];

const RetroSprintTitle = ({ title }: { title: string }) => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const toggleMore = () => setIsOpenMore((prev) => !prev);

  useEffect(
    function moreButtonHandler() {
      const handleClickOutside = (event: MouseEvent) => {
        if (moreButtonRef.current && !moreButtonRef.current.contains(event.target as Node)) setIsOpenMore(false);
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [moreButtonRef, setIsOpenMore],
  );

  return (
    <Wrapper>
      <TitleTextField
        value={title}
        maxLength={20}
        fontStyle={theme.fontStyle.headline_1}
        placeholder={title}
        onChange={() => console.log('값 변경')}
        onBlur={() => console.log('저장')}
      />
      <button onClick={toggleMore} ref={moreButtonRef}>
        <More />
      </button>
      {isOpenMore && <MoreDropdown items={moreList} toggleMore={toggleMore} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 41px;
  svg {
    cursor: pointer;
  }
`;
export default RetroSprintTitle;

RetroSprintTitle.displayName = 'RetroSprintTitle';
