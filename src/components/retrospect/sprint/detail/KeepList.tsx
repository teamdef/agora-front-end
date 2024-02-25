import styled from 'styled-components';
import KeepItem from './KeepItem';
import CreateItemBox from './CreateItemBox';

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
      {
        id: 0,
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      },
      {
        id: 0,
        profileImage: '',
        creator: '이승원',
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      },
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

const KeepList = () => {
  return (
    <Wrapper>
      <Title>지속하고 싶은 점은 무엇인가요?</Title>
      <Content>
        {mock.retrospective.keep.map((item) => {
          return <KeepItem data={item} />;
        })}
        <CreateItemBox />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h3`
  margin-top: 28px;
  padding-left: 24px;
  ${({ theme }) => theme.fontStyle.subtitle_1};
  color: ${({ theme }) => theme.colors.agoraBlack[800]};
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export default KeepList;

KeepList.displayName = 'KeepList';
