import styled from 'styled-components';

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 45rem;

  align-items: center;
  justify-content: space-around;

  padding: 0 5rem;
  position: relative;

  background: url(${'assets/estacao-BDC/BDC_bg.jpg.png'}) no-repeat fixed center;
  background-size: cover;
  z-index: 0;

  img {
    height: 40rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    z-index: 2;
    box-shadow: black;
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 35rem;
  align-items: center;

  .section2 {
    max-width: 2000px;
    
  }

  .title {
    text-align: center;
    text-align: center;

    p {
      color: red;
      font-size: 1.7rem;
      align-items: center;
      padding-bottom: 2rem;
      
    }
  }
  .conteudo {
    text-align: center;
    height: 25rem;
    align-items: center;
    justify-content: center;
    display: flex;
    p {
      text-align: left;
      color: black;
      width: 62%;
      font-size: 1.4rem;
    }
  }
  img {
    width: 50%;
    margin: 0 0 0 30rem;
  }

  @media screen and (max-width: 1500px) {
    flex-direction: column;
    justify-content: end;
    padding: 5rem 5rem 0 5rem;
    margin: 0;

    img {
      height: 15rem;
      width: 80%;
      align-self: center;
      margin: 0 0 0 7rem;
    }

    .conteudo {
      p {
        font-size: 1.8rem;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: end;
    padding: 5rem 5rem 0 5rem;
    margin: 0;

    img {
      height: 15rem;
      width: 80%;
      align-self: center;
      margin: 0 0 0 5rem;
    }

    .conteudo {
      p {
        font-size: 1.9rem;
        width: 100%;
      }
    }
  }
`;

export const ThirdSection = styled.section`
  background: url(${'assets/conector/backgroundred.png'}) no-repeat fixed center;
  width: 100%;
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
  .img1 {
    img {
      max-width: 20rem;
      margin-left: 10rem;
    }
  }
  .img2 {
    img {
      max-width: 20rem;
      margin-bottom: 10rem;
    }
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

  @media screen and (max-width: 730px) {
    flex-direction: row;
    justify-content: center;

    svg {
      transform: rotate(90deg);
    }

    img {
      height: 9rem;
    }
    p {
      padding-left: 3%;
      width: 188%;
      font-size: 1.2rem;
    }
  }
`;

export const FouthSection = styled.section`
  display: flex;

  .two {
      img {
        width: 50rem;
      }
    }

  min-height: 45rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 5rem;
  position: relative;
  background-color: white;
  background-size: cover;
  z-index: 0;
  margin: 0 0 4rem 0;
  .section4 {
    flex-direction: row;
    margin: 0 0 2rem 0;
    .list {
      float: left;
      margin: 3rem 3rem 0 0;
      color: #000000;
    }

    

    .vertical {
      border-left: 3px solid red;
      height: 130px;
      position: absolute;
      margin: 2rem 3rem 0 1rem;
      left: 49%;
    }
    .premium {
      h1 {
        float: left;
        width: 35%;
        font-size: 2rem;
        margin-left: 2rem;
      }
      img {
        float: right;
        margin: 2rem 0 0 0;
        height: 8rem;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;
    .vertical {
      visibility: hidden;
    }
    .two {
      img {
        width: 35rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .vertical {
      margin: 5rem 3rem 0 1rem;
      left: 48%;
      visibility: visible;
    }
    .premium {
      img {
        margin: 0 auto;
      }
    }
    li {
      font-size: 1.2rem;
      width: 50%;
    }
    p {
      font-size: 1.9rem;
      width: 50%;
    }

    .two {
      img {
        width: 43rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .vertical {
      margin: 5rem 3rem 0 1rem;
      left: 48%;
    }
    .premium {
      img {
        margin: 0 auto;
      }
    }
    li {
      font-size: 1.8rem;
      width: 80%;
    }
    p {
      font-size: 1.9rem;
      width: 90%;
    }

    .two {
      img {
        width: 35rem;
      }
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
  min-height: 35rem;
  padding: 0 20rem;
  text-align: center;

  p {
    font-size: 1.7rem;
    width: 60%;
  }
  @media screen and (max-width: 1150px) {
    padding: 7rem 7rem;
    flex-direction: column;
  }

  @media screen and (max-width: 530px) {
  }
`;

export const SixthSection = styled.section`
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
    width: 55%;
    border-radius: 1.5rem;
    border-collapse: hidden;
    padding: 1rem 2rem;

    th {
      font-size: 0.6rem;
      border-bottom: 2px solid white;
      padding: 0.5rem 1rem;
    }
    td {
      font-size: 1.4rem;
      padding: 1rem 4rem;
      border-bottom: 0.5px solid #696969;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 350;
    z-index: 2;
  }
  p {
    margin-top: 0;
    color: red;
    font-size: 1.5rem;
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
      font-size: 1.9rem;
    }

    article {
      flex-direction: column;

      div + div {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 530px) {
    table {
      td {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border-bottom: 0.5px solid #696969;
      }
    }
  }
`;

export const SeventhSection = styled.section`
  background: url(${'/assets/ont/bg.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1260px;
    width: 100%;
    margin: 5rem auto 14rem auto;
    text-align: center;

    h1 {
      font-weight: 350;
      font-size: 3rem;
      margin: 2rem auto;
    }
    .manufacturing-images {
      flex-direction: row;
      width: 80rem;
      margin: 0 auto;
      span {
        text-align: center;
        flex-direction: row;
        border-radius: 1rem;

        img {
          height: 18rem;
          width: 25rem;
          border-radius: 1.2rem;
          margin: 0.3rem;
          :hover {
            transform: scale(1.05);
            box-shadow: 0px 5px 20px 4px red;
          }
        }

        :hover {
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    .image {
      max-width: 45rem;
    }
  }

  @media screen and (max-width: 830px) {
    flex-direction: column;
    .image {
      max-width: 30rem;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      margin: 0;

      flex-direction: column;
      .manufacturing-images {
        margin: 0 auto;
        width: 35rem;
        align-items: center;
        flex-direction: column;
        span {
          flex-direction: column;
        }
      }
    }
  }
`;

export default FirstSection;
