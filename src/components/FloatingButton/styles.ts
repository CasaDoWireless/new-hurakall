import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  margin: 2rem;
  right: 0;
  bottom: 0;

  z-index: 99;

  a {
    align-items: center;

    color: #000000;

    border: none;
    svg {
      font-size: 3rem;
      background-color: #323639;
      border-radius: 50%;
    }
    @media screen and (max-width: 800px) {
      svg {
        font-size: 3rem;
      }
    }
  }
`;

export default Container;
