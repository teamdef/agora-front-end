import { Delete, More } from 'public/assets/svgs';
import { useState } from 'react';
import styled from 'styled-components';
import MoreDropdown from '~/components/common/dropdown/MoreDropdown';
import TitleTextField from '~/components/common/inputs/textField/TitleTextField';
import { theme } from '~/styles/theme';

const moreList = [
  {
    icon: <Delete style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />,
    title: '삭제',
    onClick: () => console.log('d'),
  },
];

const mock = {
  // 회고 기본 정보
  projectId: 0,
  reviewId: 0,
  title: '스프린트 48 회고',
  date: '2023.10.18 17:00',
  creator: '장원석',
  member: ['이승원', '장원석', '김성은', '진현우', '배광호', '전하영'],
  // 회고록 부분
  retrospective: {
    keep: [
      {
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      },
    ],
    mission: [
      {
        status: 'problem',
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            profileImage: '',
            nickname: '진현우',
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'try',
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            profileImage: '',
            nickname: '진현우',
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'solve',
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            profileImage: '',
            nickname: '진현우',
            content: '이렇게 해결 해봐요',
          },
        ],
      },
    ],
  },
};
const RetrospectSprintDetail = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);

  const toggleMore = () => setIsOpenMore((prev) => !prev);

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
        <More onClick={toggleMore} />
        {isOpenMore && <MoreDropdown items={moreList} toggleMore={toggleMore} />}
      </TitleBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;
export default RetrospectSprintDetail;

RetrospectSprintDetail.displayName = 'RetrospectSprintDetail';
