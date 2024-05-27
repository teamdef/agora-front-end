import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import { useReadProjectListQuery } from '~/query/project/projectQueries';

const MyProjectList = () => {
  const { data: projectList, isSuccess } = useReadProjectListQuery();

  if (!isSuccess) {
    return null;
  }
  return (
    <Wrapper>
      {projectList.map((project) => {
        return <ProjectListItem project={project} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap: 16px;
  margin-bottom: 48px;
  width: 100%;
`;

export default MyProjectList;
