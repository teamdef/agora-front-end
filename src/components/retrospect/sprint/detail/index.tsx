import { Delete, More } from 'public/assets/svgs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MoreDropdown from '~/components/common/dropdown/MoreDropdown';
import TitleTextField from '~/components/common/inputs/textField/TitleTextField';
import { theme } from '~/styles/theme';
import RetroInfo from './RetroInfo';
import RetroContent from './RetroContent';
import { mock } from '~/types/retro/sprint';

const moreList = [
  {
    icon: <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />,
    title: '삭제',
    onClick: () => console.log('삭제버튼 클릭'),
  },
];

const RetroSprintDetail = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMore = () => setIsOpenMore((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreButtonRef.current && !moreButtonRef.current.contains(event.target as Node)) {
        setIsOpenMore(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreButtonRef, setIsOpenMore]);

  return (
    <Wrapper>
      <TitleBox>
        <TitleTextField
          value={mock.title}
          maxLength={20}
          fontStyle={theme.fontStyle.headline_1}
          placeholder={mock.title}
          onChange={() => console.log('값 변경')}
          onBlur={() => console.log('저장')}
        />
        <button onClick={toggleMore} ref={moreButtonRef}>
          <More />
        </button>
        {isOpenMore && <MoreDropdown items={moreList} toggleMore={toggleMore} />}
      </TitleBox>
      <RetroInfo />
      <RetroContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 56px;
  padding-bottom: 120px;
`;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 41px;
  svg {
    cursor: pointer;
  }
`;
export default RetroSprintDetail;

RetroSprintDetail.displayName = 'RetroSprintDetail';
