import { Cancel } from 'public/assets/svgs';
import styled from 'styled-components';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';

const LoginDialog = () => {
  const handleDialogClose = () => {
    defaultDialogActions.close();
  };
  return (
    <Wrapper>
      <Cancel onClick={handleDialogClose} /> 아고라 회원가입/로그인
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 768px;
  padding: 28px 32px;
  background-color: #fff;
  box-shadow: 0px 0px 14px 0px ${({ theme }) => `${theme.colors.agoraBlack[900]}25`};
`;

export default LoginDialog;
