import { UserType } from '~/core/retro/retroService.types';

export const mock = {
  // 회고 기본 정보
  projectId: 0,
  reviewId: 0,
  title: '스프린트 48 회고',
  createTime: '2024-02-24T05:29:21.835Z',
  author: {
    id: 0,
    profileImg: '',
    name: '장원석',
    nickname: '장원석',
  },
  members: [
    {
      id: 1,
      profileImg: '',
      name: '이승원',
      nickname: '이승원',
    },
    {
      id: 2,
      profileImg: '',
      name: '장원석',
      nickname: '장원석',
    },
    {
      id: 3,
      profileImg: '',
      name: '김성은',
      nickname: '김성은',
    },
    {
      id: 4,
      profileImg: '',
      name: '진현우',
      nickname: '진현우',
    },
    {
      id: 5,
      profileImg: '',
      name: '배광호',
      nickname: '배광호',
    },
    {
      id: 6,
      profileImg: '',
      name: '전하영',
      nickname: '전하영',
    },
  ],
  // 회고록 부분
  keeps: [
    {
      id: 0,
      author: {
        id: 0,
        profileImg: '',
        name: '이승원',
        nickname: '이승원',
      },
      content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
    },
  ],
  problems: [
    {
      status: 'problem',
      id: 0,
      author: {
        id: 0,
        profileImg: '',
        name: '이승원',
        nickname: '이승원',
      },
      content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      comments: [
        {
          id: 0,
          author: {
            id: 0,
            profileImg: '',
            name: '이승원',
            nickname: '이승원',
          },
          content: '이렇게 해결 해봐요',
        },
      ],
    },
    {
      status: 'problem',
      id: 0,
      author: {
        id: 0,
        profileImg: '',
        name: '이승원',
        nickname: '이승원',
      },
      content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      comments: [
        {
          id: 0,
          author: {
            id: 0,
            profileImg: '',
            name: '이승원',
            nickname: '이승원',
          },
          content: '이렇게 해결 해봐요',
        },
      ],
    },
    {
      status: 'problem',
      id: 0,
      author: {
        id: 0,
        profileImg: '',
        name: '이승원',
        nickname: '이승원',
      },
      content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      comments: [
        {
          id: 0,
          author: {
            id: 0,
            profileImg: '',
            name: '이승원',
            nickname: '이승원',
          },
          content: '이렇게 해결 해봐요',
        },
      ],
    },
    {
      status: 'try',
      id: 0,
      author: {
        id: 0,
        profileImg: '',
        name: '이승원',
        nickname: '이승원',
      },
      content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      comments: [
        {
          id: 0,
          author: {
            id: 0,
            profileImg: '',
            name: '이승원',
            nickname: '이승원',
          },
          content: '이렇게 해결 해봐요',
        },
      ],
    },
    {
      status: 'solve',
      id: 0,
      author: {
        id: 0,
        profileImg: '',
        name: '이승원',
        nickname: '이승원',
      },
      content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      comments: [
        {
          id: 0,
          author: {
            id: 0,
            profileImg: '',
            name: '이승원',
            nickname: '이승원',
          },
          content: '이렇게 해결 해봐요',
        },
      ],
    },
  ],
};

export interface Comment {
  id: number;
  author: UserType;
  content: string;
}
export interface Problem {
  status: 'problem' | 'try' | 'solve';
  id: number;
  author: UserType;
  content: string;
  comments: Comment[];
}

export type Keep = Pick<Problem, 'id' | 'author' | 'content'>;
