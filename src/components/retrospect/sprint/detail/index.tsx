import styled from 'styled-components';
import TitleTextField from '~/components/common/inputs/textField/TitleTextField';

const mockData = {
  title: '스프린트 48 회고',
  date: '2023.10.18 17:00',
  creator: '장원석',
  member: ['이승원', '장원석', '김성은', '진현우', '배광호', '전하영'],
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
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div``;
export default RetrospectSprintDetail;