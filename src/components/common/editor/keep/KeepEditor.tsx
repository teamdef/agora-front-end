import { useState } from 'react';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import ContentTextField from '~/components/common/inputs/textField/ContentTextField';
import { Keep } from '~/types/retro/sprint';
import EditorHeader from '../EditorHeader';
import { UserType } from '~/core/retro/retroService.types';
import { useCreateKeepMutation } from '~/query/retro/retroQueries';

const PLACEHOLDER = '프로젝트를 진행하면서 좋았던 점, 지속하고 싶은 점에 대해 알려주세요.' as const;

const INITIAL_MEMBER = {
  id: 4,
  profileImg: '',
  nickname: '진현우',
  name: '진현우',
};

type KeepEditorProps = {
  retroId: number;
  author: UserType;
} & Partial<Omit<Keep, 'author'>>;

const KeepEditor = ({ retroId, id, author, content }: KeepEditorProps) => {
  const createKeepMutation = useCreateKeepMutation();
  const [keep, setKeep] = useState<string>(content || '');

  const keepHandler = (text: string) => {
    setKeep(text);
  };
  const saveNewContent = async () => {
    const payload = {
      retroId,
      content: keep,
      authorId: author.id,
    };
    await createKeepMutation.mutateAsync(payload, { onSuccess: () => console.log('keep 등록 성공') });
  };
  return (
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
