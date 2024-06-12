import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: auto;
  overflow-x: hidden;
`;

export const Banner = styled.section`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: flex-start;

    span {
      color: rgb(255 90 6);
      align-self: flex-start;
      margin-top: 1rem;
    }

    p {
      font-size: 2rem;
      margin: 0;
    }

    .logo {
      margin: 0;
      filter: brightness(0) invert(1);
    }
  }

  .imgMaquina {
    margin: 0;
    position: relative;
    width: 40rem;
    height: 30rem;
  }

  @media (max-width: 1050px) {
    .imgMaquina {
      width: 20rem;
      height: 20rem;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Reserved = styled.span`
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    text-align: center;
  }

  figure {
    position: relative;
    margin: 0;
  }
`;

export const Description = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40rem;
  background: url('/assets/fusion-machine/background-description.png') no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  div {
    width: 55%;
    height: 30%;
  }

  p {
    opacity: 0.75;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    div {
      margin-top: -15rem;
    }
  }
`;

export const Features = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  figure {
    margin: 0;
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p {
    color: rgb(255 136 0);
    font-size: 2rem;
    margin: 0;
  }

  .lessOpacity {
    opacity: 0.75;
    font-size: 1.5rem;
    width: 80%;
    text-align: center;
  }

  .features {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 2rem;

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: rgb(255 136 0);
        position: relative;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        figure.icon {
          margin: 0;
          width: 3rem;
          height: 2rem;
          position: relative;
        }
      }

      .featDescription {
        color: white;
        font-size: 1rem;
        width: 10rem;
        text-align: center;
      }
    }
  }

  @media (max-width: 500px) {
    width: 85%;
    p {
      font-size: 1.9rem;
    }
  }
`;

export const ExtraFeatures = styled.section`
  display: flex;
  align-items: flex-start;
  padding-left: 50%;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 32rem;
  background: url('/assets/fusion-machine/bzvk.png') no-repeat;
  background-position: top;
  background-size: 100% 35rem;

  span {
    background-color: rgb(255 95 5);
    padding: 0.2rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    border-radius: 30%;
    color: white;
    margin-right: 1rem;
  }

  .p2 {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .featText {
    font-size: 2rem;
  }
`;

export const DetailedInformations = styled.section`
  color: white;
  width: 100%;

  .info {
    background-color: rgb(24 24 24);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    h4 {
      align-self: center;
      width: 50%;
      text-align: center;
    }

    .infoList {
      margin-left: 20%;
    }

    .imagesInfo {
      display: flex;
      justify-content: center;
      align-items: flex-end;

      figure {
        margin: 0;
        position: relative;
        width: 15rem;
        height: 15rem;
        transform: translateY(4rem);
      }

      .fotoD3 {
        width: 7rem;
        height: 7rem;
      }

      .fotoD2 {
        width: 18rem;
        height: 18rem;
        transform: translateY(5.5rem);
      }
    }
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const ExtraDetails = styled.section`
  padding-bottom: 8rem;
  padding-top: 8rem;
  background: url('/assets/fusion-machine/DEGRADE.png') no-repeat fixed center;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .container {
    width: 52.5%;
    margin-left: 25%;
  }

  .desenhoContainer {
    width: 100% !important;
    margin: 0;

    h3 {
      margin-left: 25% !important;
    }
  }

  .acessorios {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    div {
      width: 9rem;
      text-align: center;
      margin-top: 1rem;
    }

    figure {
      margin: 0;
      position: relative;
      width: 9rem;
      height: 9rem;
    }

    p {
      text-align: center;
      color: black;
      margin: 0;
      margin-top: 0.5rem;
    }
  }

  .desenho {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 2rem;
    padding-left: 8%;
    padding-right: 8%;

    div {
      text-align: center;
    }

    figure {
      margin: 0;
      width: 25rem;
      height: 25rem;
      position: relative;
    }

    p {
      color: black;
      font-weight: bold;
      span {
        font-weight: normal;
        font-size: 1.2rem;
      }
    }
  }

  ul {
    padding-left: 20px;
  }

  li {
    color: black;
    font-weight: bold;
    font-size: 0.9rem;
  }

  h3 {
    color: black;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
    .container {
      li,
      h3 {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Container;
