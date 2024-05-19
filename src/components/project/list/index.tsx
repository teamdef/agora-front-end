import styled from 'styled-components';
import Button from '~/components/common/inputs/button/Button';
import ProjectList from './ProjectList';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/projects/create');
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
export default Projects;
