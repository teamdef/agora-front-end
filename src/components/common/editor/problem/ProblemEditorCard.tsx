import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { STATE_LIST } from '~/constants/sprint/problem';
import { useCreateProblemMutation, useUpdateProblemMutation } from '~/query/retro/retroQueries';
import { theme } from '~/styles/theme';
import { ProblemStatus } from '~/types/retro/sprint';
import Badge from '../../display/Badge';
import ProfileBadge from '../../display/ProfileBadge';
import StateSelectBox from '../../dropdown/state/StateSelectBox';
import ContentTextField from '../../inputs/textField/ContentTextField';
import Text from '../../typo/Text';
import { ProblemEditorProps } from './ProblemEditor';

type ProblemEditorCardProps = Omit<ProblemEditorProps, 'comments'>;

const ProblemEditorCard = ({ id, retroId, author, content, status, isModify }: ProblemEditorCardProps) => {
  const createProblemMutation = useCreateProblemMutation();
  const updateProblemMutation = useUpdateProblemMutation();
  const [text, setText] = useState<string>(content || '');
  const [badgeStatus, setBadgeStatus] = useState<ProblemStatus['value']>(status || 'START');
  const [openSelectBox, setOpenSelectBox] = useState<boolean>(false);
  const validUpdateProblem = useMemo(() => {
    console.log(status, content);
    if (status && content && (status !== badgeStatus || text !== content)) return true;
    return false;
  }, [text, badgeStatus]);

  console.log(validUpdateProblem);

  const label = useMemo(
    () => STATE_LIST.find((item) => item.value === badgeStatus)?.label as ProblemStatus['label'],
    [badgeStatus],
  );

  const dropdownHandler = () => {
    setOpenSelectBox((prev) => !prev);
  };
  const badgeStatusHandler = (value: ProblemStatus['value']) => {
    setBadgeStatus(value);
  };

  const textHandler = (value: string) => {
    setText(value);
  };

  const handleSubmit = async () => {
    if (isModify && id && validUpdateProblem) {
      const payload = {
        problemId: id,
        content: text,
      };
      await updateProblemMutation.mutateAsync(payload, { onSuccess: () => console.log('problem 수정 성공') });
    } else if (retroId) {
      const payload = {
        retroId,
        content: text,
        authorId: author.id,
      };
      await createProblemMutation.mutateAsync(payload, { onSuccess: () => console.log('problem 등록 성공') });
    }
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
          <BadgeBox>
            <Badge label={label} value={badgeStatus} onClick={dropdownHandler} />
            {openSelectBox && (
              <StateSelectBox selected={badgeStatus} valueHandler={badgeStatusHandler} closeHandler={dropdownHandler} />
            )}
          </BadgeBox>
        </InfoTextBox>
      </ProblemInfo>
      <ContentTextField maxLength={300} value={text} onChange={textHandler} onBlur={handleSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 18px;
  min-height: 204px;
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
const BadgeBox = styled.div`
  position: relative;
  span {
    cursor: pointer;
  }
`;
export default ProblemEditorCard;

ProblemEditorCard.displayName = 'ProblemEditorCard';
