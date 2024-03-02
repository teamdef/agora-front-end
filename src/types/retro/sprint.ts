export const mock: Mock = {
  // 회고 기본 정보
  projectId: 0,
  reviewId: 0,
  title: '스프린트 48 회고',
  createTime: '2024-02-24T05:29:21.835Z',
  creator: {
    id: 0,
    profileImg: '',
    name: '장원석',
  },
  members: [
    {
      id: 1,
      profileImg: '',
      name: '이승원',
    },
    {
      id: 2,
      profileImg: '',
      name: '장원석',
    },
    {
      id: 3,
      profileImg: '',
      name: '김성은',
    },
    {
      id: 4,
      profileImg: '',
      name: '진현우',
    },
    {
      id: 5,
      profileImg: '',
      name: '배광호',
    },
    {
      id: 6,
      profileImg: '',
      name: '전하영',
    },
  ],
  // 회고록 부분
  retro: {
    keep: [
      {
        id: 0,
        creator: {
          id: 0,
          profileImg: '',
          name: '이승원',
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
      },
    ],
    mission: [
      {
        status: 'problem',
        id: 0,
        creator: {
          id: 0,
          profileImg: '',
          name: '이승원',
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            creator: {
              id: 0,
              profileImg: '',
              name: '이승원',
            },
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'problem',
        id: 0,
        creator: {
          id: 0,
          profileImg: '',
          name: '이승원',
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            creator: {
              id: 0,
              profileImg: '',
              name: '이승원',
            },
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'problem',
        id: 0,
        creator: {
          id: 0,
          profileImg: '',
          name: '이승원',
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            creator: {
              id: 0,
              profileImg: '',
              name: '이승원',
            },
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'try',
        id: 0,
        creator: {
          id: 0,
          profileImg: '',
          name: '이승원',
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            creator: {
              id: 0,
              profileImg: '',
              name: '이승원',
            },
            content: '이렇게 해결 해봐요',
          },
        ],
      },
      {
        status: 'solve',
        id: 0,
        creator: {
          id: 0,
          profileImg: '',
          name: '이승원',
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Mauris tristique viverra vel tristique facilisi.',
        comments: [
          {
            id: 0,
            creator: {
              id: 0,
              profileImg: '',
              name: '이승원',
            },
            content: '이렇게 해결 해봐요',
          },
        ],
      },
    ],
  },
};
interface Mock {
  // 회고 기본 정보
  projectId: number;
  reviewId: number;
  title: string;
  createTime: string;
  creator: User;
  members: User[];
  // 회고록 부분
  retro: {
    keep: KeepItemData[];
    mission: ProblemTryData[];
  };
}

export interface User {
  id: number;
  profileImg: string;
  name: string;
}
export interface Comment {
  id: number;
  creator: User;
  content: string;
}
export interface ProblemTryData {
  status: 'problem' | 'try' | 'solve';
  id: number;
  creator: User;
  content: string;
  comments: Comment[];
}

export type KeepItemData = Pick<ProblemTryData, 'id' | 'creator' | 'content'>;
