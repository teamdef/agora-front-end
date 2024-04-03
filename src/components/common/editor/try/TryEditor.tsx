import styled from 'styled-components';
import { Problem, Try } from '~/types/retro/sprint';
import Button from '../../inputs/button/Button';
import { Pencil } from 'public/assets/svgs';
import EditorDialog from '~/components/dialog/EditorDIalog';

const TryEditor = ({ tries }: { tries?: Try[] }) => {
  return (
    <EditorDialog>
      <Wrapper>
        <Content>
          {tries?.map((item) => {
            return <div key={crypto.randomUUID()}>{item.content}</div>;
          })}
        </Content>
        <Button label="새로 만들기" icon={<Pencil />} large />
      </Wrapper>
    </EditorDialog>
  );
};

const Wrapper = styled.div``;
const Content = styled.div``;

export default TryEditor;

TryEditor.displayName = 'TryEditor';
