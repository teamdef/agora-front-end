import { useRouter } from 'next/router';
import { Cancel } from 'public/assets/svgs';
import styled from 'styled-components';
import { defaultDialogActions } from '~/store/dialog/defaultDialog';
import { flexCenter } from '~/styles/mixin';
import Text from '../common/typo/Text';

const LoginDialog = () => {
  const router = useRouter();
  const handleDialogClose = () => {
    defaultDialogActions.close();
  };

  const googleLogin = () => {
    const url =
      'https://accounts.google.com/o/oauth2/v2/auth?client_id=' +
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID +
      '&redirect_uri=' +
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL +
      '&response_type=code' +
      '&scope=email profile';
    router.push(url);
  };
  return (
    <Wrapper>
      <Text variant="headline_1" className="title">
        로그인
      </Text>
      <Cancel onClick={handleDialogClose} width="32px" height="32px" className="cancel-button" />

      <GoogleLoginButton onClick={googleLogin}>
        <img src="/assets/img/google_logo.png" alt="구글 로고" className="logo" />
        <div className="text">구글로 회원가입</div>
      </GoogleLoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 768px;
  padding: 28px 32px;
  background-color: #fff;
  box-shadow: 0px 0px 14px 0px ${({ theme }) => `${theme.colors.agoraBlack[900]}25`};
  position: relative;
  .title {
    ${flexCenter}
  }
  .cancel-button {
    position: absolute;
    top: 27px;
    right: 40px;
  }
`;

const GoogleLoginButton = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 60px;
  ${flexCenter}
  border:solid 1px #E0E0E0;
  border-radius: 8px;
  gap: 12px;
  .logo {
    width: 18px;
    height: 18px;
  }
  .text {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

export default LoginDialog;
