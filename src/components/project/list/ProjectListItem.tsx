import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { ProjectListItemType } from '~/query/project/projectQueries.types';
import { theme } from '~/styles/theme';

interface Props {
  project: ProjectListItemType;
}
const ProjectListItem = ({ project }: Props) => {
  return (
    <Wrapper>
      <Text variant="headline_2">{project.projectTitle}</Text>
      <Text variant="body_1" color={theme.colors.agoraBlack[400]}>
        {project.projectDescription}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  min-width: 250px;
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.agoraBlack[50]};
  cursor: pointer;
`;
export default ProjectListItem;
