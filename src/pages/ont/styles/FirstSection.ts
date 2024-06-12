import styled from "styled-components";

const FirstSection = styled.section`
  min-height: fit-content;
  background: url(${"/assets/ont/background-red-blur.png"}) no-repeat center;
  background-attachment: fixed;
  background-size: 80%;

  .sectionDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 0;
    max-width: fit-content;
    margin: auto;
    padding-top: 4rem;

    article {
      position: absolute;
      left: -10%;
      top: 22%;
      z-index: 2;
      h1 {
        color: #fff;
        font-size: 2.5rem;
        font-weight: 400;
        margin: 0;
      }

      p {
        color: #fff;
      }
    }

    img {
      height: 30rem;
      margin-top: 4rem;
      z-index: 1;
    }

    @media screen and (max-width: 1428px) {
      article {
        position: absolute;
        left: -10%;
        top: 22%;
        z-index: 2;
        h1 {
          color: #fff;
          font-size: 2rem;
          font-weight: 400;
          margin: 0;
        }
      }

      img {
        max-height: 30rem;
      }
    }

    @media screen and (max-width: 1020px) {
      background-size: auto;
      flex-direction: column;
      justify-content: center;
      padding: 5rem 0;

      article {
        position: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 4rem;

        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 2rem;
        }
      }

      img {
        height: 25rem;
        width: auto;
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
  }
`;

export default FirstSection;
