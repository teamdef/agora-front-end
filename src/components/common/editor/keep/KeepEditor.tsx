import { useState } from 'react';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import ContentTextField from '~/components/common/inputs/textField/ContentTextField';
import { Keep } from '~/types/retro/sprint';
import EditorHeader from '../EditorHeader';
import { useCreateKeepMutation } from '~/query/retro/retroQueries';
import { MemberType } from '~/query/common/commonQueries.types';
import EditorDialog from '~/components/dialog/EditorDIalog';

const PLACEHOLDER = '프로젝트를 진행하면서 좋았던 점, 지속하고 싶은 점에 대해 알려주세요.' as const;

type KeepEditorProps = {
  retroId: number;
  author: MemberType;
  isModify?: boolean;
} & Partial<Omit<Keep, 'author'>>;

// id : 수정일 경우 keep.id 제공해야함.
// isModify : 수정일 경우 true 필요
const KeepEditor = ({ retroId, id, author, content, isModify }: KeepEditorProps) => {
  const createKeepMutation = useCreateKeepMutation();
  const [keep, setKeep] = useState<string>(content || '');

  const keepHandler = (text: string) => {
    setKeep(text);
  };

  const saveNewContent = async () => {
    // TODO isModify 값에 따라 신규 / 변경 수행되도록 필요
    const payload = {
      retroId,
      content: keep,
      authorId: author.id,
    };
    await createKeepMutation.mutateAsync(payload, { onSuccess: () => console.log('keep 등록 성공') });
  };
  return (
    <EditorDialog>
      <Wrapper>
        <EditorHeader text="지속하고 싶은 점은 무엇인가요?" />
        <Content>
          {/* <ProfileBadge memberState={author} /> */}

          <ContentTextField
            maxLength={400}
            value={keep}
            onChange={keepHandler}
            onBlur={saveNewContent}
            placeholder={PLACEHOLDER}
            fontStyle="body_2"
            autoFocus={!content}
          />
        </Content>
      </Wrapper>
    </EditorDialog>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  min-height: 314px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default KeepEditor;

KeepEditor.displayName = 'KeepEditor';
