import styled from 'styled-components';

export const Banner = styled.div`
  min-width: 100%;
  height: 85vh;
  background-image: url('/assets/home/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
  }
`;
export const FirstSection = styled.section`
  background-size: cover;
  background-color: black;
  display: flex;
  flex-direction: column;

  min-height: 35rem;
  align-items: center;
  justify-content: end;
  padding: 5rem 5rem 0 20rem;
  margin: 0;

  .section2 {
    align-items: center;
    max-width: 2000px;
    width: 100%;

    .card {
      display: flex;
      flex-direction: column;

      p {
        color: red;
        font-size: 2.5rem;
        align-items: center;
        padding-bottom: 1rem;
      }

      span {
        float: left;
        color: white;
        font-size: 1.3rem;
      }

      .pdf {
        background-color: #181818;
        margin-top: 1rem;
        color: white;
        width: 80%;
        height: 3rem;
        text-align: center;
        border-radius: 0.8rem;
        align-items: center;
        display: flex;
        a {
          color: #a9a9a9;
          margin-left: 1rem;
          float: left;
          font-size: 1rem;
          align-items: center;
        }
      }
    }
  }

  .conteudo {
    height: 25rem;
    width: 60%;

    justify-content: center;
    display: flex;
    flex-direction: column;
    display: flex;
    p {
      text-align: left;
      color: red;
      font-size: 2rem;
    }

    svg {
      float: left;
      color: white;
      font-size: 6rem;
    }

    span {
      float: left;
      color: white;
      font-size: 1.3rem;
    }
    a {
      color: #0066a2;
    }
  }
  img {
    width: 50%;
    margin: 0 0 0 30rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: end;
    padding: 5rem 5rem 0 15rem;
    margin: 0;

    .section2 {
      max-width: 2000px;
      width: 100%;

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
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: end;
    padding: 5rem 5rem 0 10rem;
    margin: 0;

    .section2 {
      max-width: 2000px;
      width: 120%;
    }

    .conteudo {
      p {
        font-size: 1.2rem;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    padding: 5rem 5rem 0 10rem;
    margin: 0;

    .pdf {
      width: 50%;
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Reserved = styled.span`
  h2 {
    text-align: center;
    color: #fff;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 15rem;
    margin-top: 20rem;
  }
`;

export default Banner;
