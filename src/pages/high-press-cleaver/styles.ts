import styled from 'styled-components';

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 35rem;

  align-items: center;
  justify-content: space-around;

  padding: 0 5rem;
  position: relative;

  background: url(${'assets/clivador/redbackground.png'}) no-repeat fixed center;
  background-size: cover;
  z-index: 0;

  img {
    height: 25rem;
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

export const SecondSection = styled.section`
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 35rem;

  .title {
    color: #fff;
    padding-left: 20%;
    align-items: row;

    p {
      font-size: 1.7rem;
      align-items: center;
      padding-bottom: 1rem;
    }
    strong {
      font-size: 6rem;
      font-weight: 350;
      color: red;
    }
  }
  .conteudo {
    background-color: #363636;
    width: 100%;
    min-height: 25rem;
    align-items: center;
    justify-content: center;
    display: flex;
    p {
      padding-left: 20%;
      text-align: left;
      width: 65%;
      font-size: 1.2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: end;

    margin: 0;

    img {
      height: 15rem;
      align-self: center;
    }

    article ul li:first-child span:before {
      width: 3rem;
      margin-left: -7.5rem;
    }
  }
`;

export const ThirdSection = styled.section`
  background: url(${'assets/clivador/BGBLACK.png'}) no-repeat fixed center;

  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 0 20rem;
  justify-content: center;
  min-height: 35rem;

  color: white;

  article {
    p {
      padding-left: 15%;
      text-align: left;
      font-size: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }

  img {
    max-width: 20rem;
    margin-left: 10rem;
  }
  @media screen and (max-width: 1020px) {
    img {
      height: 17rem;
    }

    p {
      padding-left: 3%;
      width: 50%;
    }
  }

  @media screen and (max-width: 975px) {
    img {
      height: 13rem;
    }
  }

  @media screen and (max-width: 775px) {
    flex-direction: row;
    justify-content: center;
    .conteudo {
      height: 44rem;
    }

    svg {
      transform: rotate(90deg);
    }

    img {
      height: 13rem;
      margin: 0 0 0 12rem;
    }
    p {
      padding-left: 3%;
      width: 188%;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 530px) {
    .conteudo {
      article {
        p {
          font-size: 1.2rem;
        }
      }
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const FouthSection = styled.section`
  background-color: black;
  background-size: cover;

  padding: 7rem 7rem 5rem 7rem;
  text-align: left;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  table {
    background-color: #363636;
    color: #fff;
    min-height: 44rem;
    width: 50%;
    border-radius: 1.5rem;
    border-collapse: hidden;

    th {
      font-size: 0.6rem;
      border-bottom: 2px solid white;
    }
    td {
      font-size: 1.2rem;
      padding: 1rem 2rem;
      border-bottom: 0.5px solid #696969;
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 350;
    z-index: 2;
    padding-bottom: 2rem;
  }

  img {
    width: 55%;
    height: 55%;
  }

  @media screen and (max-width: 1020px) {
    img {
      width: 45rem;
    }
    table {
      width: 80%;
    }
  }

  @media screen and (max-width: 890px) {
    padding: 5rem 5rem 2rem 5rem;

    padding-bottom: 5rem;

    h1 {
      font-size: 2rem;
    }

    article {
      flex-direction: column;

      div + div {
        margin: 0;
      }
    }

    img {
      position: relative;
      max-width: 60rem;
    }
  }

  @media screen and (max-width: 500px) {
    .conteudo {
      article {
        p {
          font-size: 1.2rem;
        }
      }
    }
    p {
      font-size: 1.2rem;
    }

    img {
      max-width: 70rem;
    }
    table {
      width: 50%;
    }
  }
`;

export const FifthSection = styled.section`
  background: url(${'/assets/images/drop-background-05.png'}) no-repeat fixed
    center;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 25rem;
  padding: 0 20rem;
  img {
    max-width: 13rem;
  }

  @media screen and (max-width: 1150px) {
    padding: 7rem 7rem;

    flex-direction: column;

    div {
      img {
        max-width: 20rem;
      }
      margin: 0 0 3rem 0;
    }

    img {
      max-width: 25rem;
    }
  }

  @media screen and (max-width: 530px) {
    img {
      max-width: 20rem;
      margin: 2rem;
    }
  }
`;

export const SixthSection = styled.section`
  background: url(${'/assets/images/drop-background-06.png'}) no-repeat fixed
    center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 5rem;
  text-align: center;

  p {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .img-logo {
    margin-top: 20%;
  }

  @media screen and (max-width: 1200px) {
    .img-map {
      max-width: 45rem;
    }
  }

  @media screen and (max-width: 830px) {
    .img-map,
    .img-product {
      max-width: 30rem;
    }
  }

  @media screen and (max-width: 600px) {
    .img-map {
      margin-bottom: 5rem;
    }

    .img-map,
    .img-product {
      max-width: 20rem;
    }
  }
`;

export default FirstSection;
