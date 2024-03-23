import { Cancel } from 'public/assets/svgs';
import { useState } from 'react';
import styled from 'styled-components';
import ProfileBadge from '~/components/common/display/ProfileBadge';
import ContentTextField from '~/components/common/inputs/textField/ContentTextField';
import { UserType } from '~/core/retro/retroService.types';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';

const PLACEHOLDER = '프로젝트를 진행하면서 좋았던 점, 지속하고 싶은 점에 대해 알려주세요.' as const;

const USER = {
  id: 1,
  profileImg: '',
  nickname: '진현우',
  name: '진현우',
};
interface KeepEditorProps {
  retroId: number;
  author: UserType;
}
const KeepEditor = ({ author, retroId }: KeepEditorProps) => {
  const [keep, setKeep] = useState<string>('');

  const keepHandler = (text: string) => {
    setKeep(text);
  };

  return (
    <Wrapper>
      <Title>
        지속하고 싶은 점은 무엇인가요?
        <Cancel onClick={() => defaultDialogActions.close()} />
      </Title>
      <Content>
        <ProfileBadge memberState={author} />
        <ContentTextField
          maxLength={400}
          value={keep}
          onChange={keepHandler}
          placeholder={PLACEHOLDER}
          fontStyle="body_2"
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
const Title = styled.h1`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.fontStyle.headline_1}
  color: ${({ theme }) => theme.colors.agoraBlack[900]};
  svg {
    cursor: pointer;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default KeepEditor;

KeepEditor.displayName = 'KeepEditor';
