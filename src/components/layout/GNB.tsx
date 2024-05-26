import styled from 'styled-components';
import { zIndex } from '~/styles/mixin';
import Container from './Container';
import { useRouter } from 'next/router';

const GNB = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <Logo onClick={() => router.push('/')}>
          <img src="/assets/img/illust/agora_logo.png" />
        </Logo>
        <button onClick={() => router.push('/my-project')}>프로젝트</button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${zIndex.gnb}
  height: 68px;
  box-shadow: 0px 3px 2px 0px #e7eafc;
  > .container {
    height: 100%;
    align-items: center;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    padding-left: 32px;
    width: 111px;
    height: auto;
    object-fit: cover;
  }
`;

export default GNB;
