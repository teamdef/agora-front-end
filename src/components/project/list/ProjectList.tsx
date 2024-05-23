import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import Button from '~/components/common/inputs/button/Button';
import { useReadProjectListQuery } from '~/query/project/projectQueries';
import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ProjectService from '~/core/project/projectService';

const ProjectList = () => {
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
  gap: 16px;
  margin-bottom: 48px;
`;

const ProjectListWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
`;

export default ProjectList;
