import styled from 'styled-components';
import MenuDepth from '~/components/common/etc/MenuDepth';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import CreateForm from './CreateForm';

const RetrospectSprintCreate = () => {
  return (
    <Wrapper>
      <HeaderSection>
        <Text variant="headline_1" color={colors.agoraBlack[900]}>
          새로만들기
        </Text>
        <MenuDepth menuDepth={['스프린트회고', '새로만들기']} />
      </HeaderSection>
      <ContentSection>
        <CreateForm/>
      </ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentSection = styled.div``;
export default RetrospectSprintCreate;
