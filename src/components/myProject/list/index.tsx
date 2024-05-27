import styled from 'styled-components';
import Button from '~/components/common/inputs/button/Button';
import ProjectList from './ProjectList';
import { useRouter } from 'next/router';

const MyProject = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/my-project/create');
  };

  return (
    <Wrapper>
      <ProjectList />
      <Button label="프로젝트 생성" onClick={handleCreateClick}></Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 48px 48px 120px 48px;
`;
export default MyProject;
