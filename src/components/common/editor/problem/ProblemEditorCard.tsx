import styled from 'styled-components';
import { ProblemEditorProps } from './ProblemEditor';
import Text from '../../typo/Text';
import { theme } from '~/styles/theme';
import ProfileBadge from '../../display/ProfileBadge';
import Badge from '../../display/Badge';
import ContentTextField from '../../inputs/textField/ContentTextField';
import { useState } from 'react';

type ProblemEditorCardProps = Omit<ProblemEditorProps, 'comments'>;

const ProblemEditorCard = ({ id, retroId, author, content, status }: ProblemEditorCardProps) => {
  const [text, setText] = useState<string>(content || '');
  const textHandler = (value: string) => {
    setText(value);
  };
  return (
    <Wrapper>
      <ProblemInfo>
        <InfoTextBox>
          <Text variant="subtitle_1" color={theme.colors.agoraBlack[800]}>
            작성자
          </Text>
          <ProfileBadge memberState={author} />
        </InfoTextBox>
        <InfoTextBox>
          <Text variant="subtitle_1" color={theme.colors.agoraBlack[800]}>
            상태
          </Text>
          <Badge label="문제 인식" status={status || 'problem'} />
        </InfoTextBox>
      </ProblemInfo>
      <ContentTextField maxLength={300} value={text} onChange={textHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 18px;
  gap: 19px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[100]};
`;
const ProblemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const InfoTextBox = styled.div`
  display: flex;
  gap: 10px;
  > div:first-child {
    width: 72px;
  }
`;
export default ProblemEditorCard;

ProblemEditorCard.displayName = 'ProblemEditorCard';
