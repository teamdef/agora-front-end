import styled from 'styled-components';
import EditorHeader from '../EditorHeader';
import { UserType } from '~/core/retro/retroService.types';
import { Problem } from '~/types/retro/sprint';
import Text from '~/components/common/typo/Text';
import { theme } from '~/styles/theme';
import ProblemEditorCard from './ProblemEditorCard';

export type ProblemEditorProps = {
  retroId: number;
  author: UserType;
} & Partial<Omit<Problem, 'author'>>;

const ProblemEditor = ({ retroId, status, id, author, content, comments }: ProblemEditorProps) => {
  return (
    <Wrapper>
      <EditorHeader text="문제는 무엇이고, 해결하기 위해 어떤 노력을 할 수 있나요?" />
      <SubTitle>
        <Text variant="headline_2" color={theme.colors.agoraBlack[900]}>
          마주한 문제는 무엇인가요?
        </Text>
        <Text variant="detail_2" color={theme.colors.agoraBlack[400]}>
          스프린트를 진행하면서 발생했던 문제를 알려주세요.
        </Text>
      </SubTitle>
      <ProblemEditorCard author={author} content={content} id={id} retroId={retroId} status={status} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export default ProblemEditor;

ProblemEditor.displayName = 'ProblemEditor';
