import { useRouter } from 'next/router';
import styled from 'styled-components';

const Page = () => {
  const router = useRouter();
  const { code } = router.query;

  return <Wrapper>로그인 성공함 {code}</Wrapper>;
};

const Wrapper = styled.div``;

export default Page;
