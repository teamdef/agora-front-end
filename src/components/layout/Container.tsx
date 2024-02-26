import styled from 'styled-components';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper id="container" className="container">
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export default Container;

Container.displayName = 'Container';
