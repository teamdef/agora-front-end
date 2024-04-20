import styled from 'styled-components';
import Text from '../typo/Text';
import { colors } from '~/styles/theme';
import { ArrowRight } from 'public/assets/svgs';

interface Props {
  menuDepth: string[];
}
const MenuDepth = ({ menuDepth }: Props) => {
  return (
    <Wrapper>
      {menuDepth.map((menu, idx) => {
        return (
          <div key={crypto.randomUUID()}>
            <Text variant="subtitle_2" color={colors.agoraBlack[400]}>
              {menu}
            </Text>
            {menuDepth.length !== idx + 1 && <ArrowRight fill={colors.agoraBlack[400]} />}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  > div {
    display: flex;
    gap: 4px;
  }
`;

export default MenuDepth;
