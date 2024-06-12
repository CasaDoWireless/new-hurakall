import styled from 'styled-components';

const FifthSection = styled.section`
  background: url(${'/assets/images/roteador/fundo2.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;

  .container {
    max-width: 1200px;
    margin: 4rem auto;
    align-items: center;
    .icons {
      align-items: center;

      .column {
        display: flex;
        flex-direction: row;
        div {
          background-color: #5c0c9a;
          width: 10rem;
          height: 8rem;
          margin: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          align-items: center;
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 1260px) {
    max-width: 960px;
    font-size: 1rem;
  }
`;

export default FifthSection;
