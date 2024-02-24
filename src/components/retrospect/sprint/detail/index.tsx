import { Delete, More } from 'public/assets/svgs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MoreDropdown from '~/components/common/dropdown/MoreDropdown';
import TitleTextField from '~/components/common/inputs/textField/TitleTextField';
import { theme } from '~/styles/theme';
import RetrospectInfo from './RetrospectInfo';

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
  createTime: '2024-02-24T05:29:21.835Z',
  creator: {
    id: 0,
    profileImage: '',
    nickname: '장원석',
  },
  members: [
    {
      id: 1,
      profileImage: '',
      nickname: '이승원',
    },
    {
      id: 2,
      profileImage: '',
      nickname: '장원석',
    },
    {
      id: 3,
      profileImage: '',
      nickname: '김성은',
    },
    {
      id: 4,
      profileImage: '',
      nickname: '진현우',
    },
    {
      id: 5,
      profileImage: '',
      nickname: '배광호',
    },
    {
      id: 6,
      profileImage: '',
      nickname: '전하영',
    },
  ],
  // 회고록 부분
  retrospective: {
    keep: [
      {
        id: 0,
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      },
    ],
    mission: [
      {
        status: 'problem',
        id: 0,
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            profileImage: '',
            nickname: '진현우',
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'try',
        id: 0,
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            profileImage: '',
            nickname: '진현우',
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'solve',
        id: 0,
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

export type GetRetrospectDtoMock = typeof mock;
const RetrospectSprintDetail = () => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMore = () => setIsOpenMore((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log(moreButtonRef.current?.contains(event.target as Node));
      console.log(moreButtonRef.current);
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
      <RetrospectInfo info={mock} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  margin-bottom: 41px;
  svg {
    cursor: pointer;
  }
`;
export default RetrospectSprintDetail;

RetrospectSprintDetail.displayName = 'RetrospectSprintDetail';
