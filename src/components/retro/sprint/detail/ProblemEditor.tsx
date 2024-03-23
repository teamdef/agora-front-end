import styled from 'styled-components';
import EditorHeader from './EditorHeader';
import { UserType } from '~/core/retro/retroService.types';
import { Problem } from '~/types/retro/sprint';

type ProblemEditorProps = {
  retroId: number;
  author: UserType;
} & Partial<Omit<Problem, 'author'>>;

const ProblemEditor = ({ retroId, status, id, author, content, comments }: ProblemEditorProps) => {
  return (
    <Wrapper>
      <EditorHeader text="문제는 무엇이고, 해결하기 위해 어떤 노력을 할 수 있나요?" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default ProblemEditor;

ProblemEditor.displayName = 'ProblemEditor';
