import styled from 'styled-components';

const EditorDialog = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 648px;
  max-height: 768px;
  border-radius: 8px;
  padding: 28px 32px;
  background-color: #fff;
  box-shadow: 0px 0px 14px 0px ${({ theme }) => `${theme.colors.agoraBlack[900]}25`};
`;
export default EditorDialog;
