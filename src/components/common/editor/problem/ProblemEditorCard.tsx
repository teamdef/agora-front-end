import styled from 'styled-components';
import { ProblemEditorProps } from './ProblemEditor';
import Text from '../../typo/Text';
import { theme } from '~/styles/theme';
import ProfileBadge from '../../display/ProfileBadge';
import Badge from '../../display/Badge';
import ContentTextField from '../../inputs/textField/ContentTextField';
import { useMemo, useState } from 'react';
import { ProblemStatus } from '~/types/retro/sprint';
import StateDropdown from '../../dropdown/state/StateDropdown';
import StateSelectBox from '../../dropdown/state/StateSelectBox';
import { STATE_LIST } from '~/constants/sprint/problem';

type ProblemEditorCardProps = Omit<ProblemEditorProps, 'comments'>;

const ProblemEditorCard = ({ id, retroId, author, content, status }: ProblemEditorCardProps) => {
  const [text, setText] = useState<string>(content || '');
  const [badgeStatus, setBadgeStatus] = useState<ProblemStatus['value']>(status || 'problem');
  const [openSelectBox, setOpenSelectBox] = useState<boolean>(false);

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
      <ContentTextField maxLength={300} value={text} onChange={textHandler} />
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
