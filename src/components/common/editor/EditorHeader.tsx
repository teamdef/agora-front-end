import { Cancel } from 'public/assets/svgs';
import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import { theme } from '~/styles/theme';

const EditorHeader = ({ text }: { text: string }) => {
  return (
    <Wrapper>
      <Text variant="headline_1" color={theme.colors.agoraBlack[900]}>
        {text}
      </Text>
      <Cancel onClick={() => defaultDialogActions.close()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export default EditorHeader;

EditorHeader.displayName = 'EditorHeader';
