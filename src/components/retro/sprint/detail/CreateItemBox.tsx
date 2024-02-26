import { Pencil } from 'public/assets/svgs';
import styled from 'styled-components';

const CreateItemBox = () => {
  return (
    <Wrapper>
      <Title>
        의견 작성하기
        <Pencil style={{ width: '18px', height: '18px' }} viewBox="0 0 25 25" />
      </Title>
      <Description>새로운 의견을 작성해주세요.</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 22px 0;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
`;
const Title = styled.h3`
  display: flex;
  gap: 4px;
  align-items: center;
  ${({ theme }) => theme.fontStyle.subtitle_2};
  color: ${({ theme }) => theme.colors.agoraBlack[700]};
`;
const Description = styled.span`
  ${({ theme }) => theme.fontStyle.subtitle_2};
  color: ${({ theme }) => theme.colors.agoraBlack[300]};
`;

export default CreateItemBox;

CreateItemBox.displayName = 'CreateItemBox';
