import styled from 'styled-components';
import CreateItemBox from './CreateItemBox';
import { mock } from '~/types/retro/sprint';
import KeepItem from './KeepItem';

const KeepBox = () => {
  return (
    <Wrapper>
      <Title>지속하고 싶은 점은 무엇인가요?</Title>
      <Content>
        {mock.retro.keep.map((item) => {
          return <KeepItem data={item} />;
        })}
        <CreateItemBox />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 64px;
`;
const Title = styled.h3`
  margin-top: 28px;
  ${({ theme }) => theme.fontStyle.subtitle_1};
  color: ${({ theme }) => theme.colors.agoraBlack[800]};
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  div:last-child {
    border: 1.2px solid ${({ theme }) => theme.colors.agoraBlue[100]};
    background: ${({ theme }) => theme.colors.agoraBlue.bg};
  }
`;

export default KeepBox;

KeepBox.displayName = 'KeepList';
