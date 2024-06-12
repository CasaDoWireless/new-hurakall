import styled from 'styled-components';
const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 35rem;

  align-items: center;
  justify-content: space-around;

  padding: 0 5rem;
  position: relative;

  background: url(${'/assets/images/roteador/background.png'}) no-repeat fixed
    center;
  background-size: cover;
  z-index: 0;

  Image {
    height: 20rem;
    margin-top: 4rem;
    z-index: 2;
  }

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;

    img {
      height: 25rem;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      height: 17rem;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      height: 14rem;
    }
  }
`;
export default FirstSection;
