import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 35rem;

  align-items: center;
  justify-content: space-around;

  padding: 0 5rem;
  position: relative;
  background: url(${'/assets/images/drop-background-01.png'}) no-repeat fixed
    right;
  background-size: cover;
  z-index: 0;

  .shade {
    z-index: 1;
    position: absolute;
    background-color: black;
    opacity: 50%;
    width: 100%;
    height: 100%;
  }

  img {
    height: 25rem;
    z-index: 2;
  }

  article {
    z-index: 2;
    h1 {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 400;
      margin: 0;
    }

    p {
      color: #f00;
    }
  }
  @media screen and (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;

    img {
      margin-bottom: 4rem;
      height: 25rem;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      margin-bottom: 4rem;
      height: 17rem;
    }
  }

  @media screen and (max-width: 500px) {
    background-attachment: scroll;
    img {
      height: 19rem;
      margin-bottom: 4rem;
    }
    article {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

export const SecondSection = styled.section`
  background: url(${'/assets/images/asu-cable-imgs/asu-background-1.png'})
    no-repeat fixed center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  article {
    margin: 2rem 0;
    width: 65%;
    max-width: 2000px;
  }
  p {
    color: #000;
  }

  @media screen and (max-width: 1020px) {
    article {
      width: 80%;
    }
  }

  @media screen and (max-width: 600px) {
    article {
      width: 80%;
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    background-attachment: scroll;
    article {
      width: 80%;
      p {
        font-size: 1.9rem;
      }
    }
  }
`;

export const ThirdSection = styled.section`
  background: url(${'/assets/images/drop-background-06.png'}) no-repeat fixed
    center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  * {
    z-index: 2;
  }
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 2000px;
    img {
      position: absolute;
      width: 100%;
    }
  }

  header {
    max-width: 2000px;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
    article {
      width: 20%;
      h1 {
        font-size: 0.8rem;
        color: #02dfe0;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }

  main {
    * {
      margin: 0%;
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      img {
        height: 30rem;
        margin: 3rem 0 6rem 0;
      }
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-direction: center;

        width: 50%;
        margin: 4rem 0;
        h1 {
          font-size: 0.8rem;
          margin: 1rem 0;
        }
        p {
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }

        img {
          width: 100%;
          height: 100%;
          margin: 1rem 0;
        }
      }
    }
  }

  @media screen and (max-width: 1090px) {
    main {
      article {
        section {
          width: 60%;
        }
      }
    }
  }

  @media screen and (max-width: 1020px) {
    main {
      article {
        img {
          height: 27.5rem;
        }
        section {
          width: 75%;
          h1 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    header {
      width: 80%;
      article {
        width: 30%;
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
    main {
      article {
        section {
          width: 80%;
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
  }
`;

export const FourthSection = styled.section`
  background: url(${'/assets/images/asu-cable-imgs/asu-background-3.png'})
    no-repeat fixed center;
  background-size: cover;
  height: 30rem;

  @media screen and (max-width: 600px) {
    background-attachment: scroll;
  }
`;

export const FifthSection = styled.section`
  * {
    margin: 0;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  background-color: #f00;
  padding: 7rem 0;

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 2000px;
    header {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      section {
        h1 {
          margin: 0 0 1rem 0;
          font-size: 1.7rem;
          font-weight: normal;
          letter-spacing: 2px;
        }
        p {
          font-size: 0.75rem;
          margin: 0.5rem 0;
        }
        .feats-text {
          display: flex;
          flex-direction: row;
          div {
            margin-right: 2rem;
          }
        }
      }
    }

    main {
      margin: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        h1 {
          font-size: 0.7rem;
          font-weight: normal;
          margin-bottom: 1rem;
          text-align: center;
        }
        table {
          color: white;
          min-height: 4rem;
          outline: 2px solid white;
          border-radius: 1.5rem;
          border-collapse: collapse;
          overflow: hidden;
          th {
            font-size: 0.6rem;
            border-bottom: 2px solid white;
            padding: 0.5rem 1.5rem;
          }
          td {
            font-size: 0.7rem;
            padding: 0.5rem 1.5rem;
          }
          td:nth-child(1) {
            border-right: 2px solid white;
          }
        }
        .radius {
          td {
            font-size: 0.6rem;
            padding: 0.1rem 2rem;
          }
        }
        div {
          display: flex;
          text-align: center;
          padding: 1rem;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 0.8rem;
          min-height: 4rem;
          min-width: 100%;
          border: 2px solid white;
          border-radius: 1.5rem;
        }
      }
    }

    footer {
      width: 80%;
      p {
        font-size: 0.8rem;
        letter-spacing: 2px;
      }
    }
  }

  @media screen and (max-width: 1090px) {
    article {
      main {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 1020px) {
    article {
      header {
        flex-direction: column;
        section {
          margin-top: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    article {
      header {
        section {
          h1 {
            font-size: 3rem;
          }
          p {
            font-size: 1.5rem;
            margin: 0.5rem 0;
          }
        }
      }
      main {
        flex-direction: column;
        section {
          min-width: 100%;
          margin: 1.5rem 0;
          h1 {
            font-size: 1.7rem;
          }
          table {
            min-width: 100%;
            th {
              font-size: 1.2rem;
            }
            td {
              font-size: 1.5rem !important;
            }
          }
          div {
            font-size: 1.5rem;
          }
        }
      }
      footer {
        p {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
  }
`;

export const SixthSection = styled.section`
  background: url(${'/assets/images/drop-background-06.png'}) no-repeat fixed
    center;
  background-size: cover;
  padding: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    max-width: 2000px;
    position: relative;
    h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: normal;
      letter-spacing: 2px;
    }
    article {
      display: flex;
      margin-bottom: 3rem;
      div {
        margin-right: 1rem;
        h2 {
          font-size: 1rem;
          font-weight: normal;
        }
        p {
          font-size: 0.8rem;
        }
      }
      .info {
        p {
          font-size: 1rem;
        }
      }
    }
  }

  .img-cont {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    img {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
      max-width: 30rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .img-cont {
      img {
        max-width: 20rem;
      }
    }
  }

  @media screen and (max-width: 890px) {
    padding: 5rem 5rem 2rem 5rem;

    padding-bottom: 5rem;

    .container {
      h1 {
        font-size: 2rem;
      }

      article {
        flex-direction: column;

        div + div {
          margin: 0;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    background-attachment: scroll;
    .container {
      h1 {
        font-size: 3rem;
      }

      article {
        display: flex;
        margin-bottom: 3rem;
        div {
          margin-right: 1rem;
          h2 {
            font-size: 1.54rem;
            font-weight: normal;
          }
          p {
            font-size: 1.2rem;
          }
        }
        .info {
          p {
            font-size: 1rem;
          }
        }
      }
    }

    .img-cont {
      justify-content: center;
      align-items: center;
      img {
        position: relative;
        max-width: 100%;
        height: 30rem;
        transform: translateX(30px);
      }
    }
  }
`;

export const SeventhSection = styled.section`
  background: url(${'/assets/images/asu-cable-imgs/asu-background-4.png'})
    no-repeat center;
  height: 20rem;
`;

export const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

export default FirstSection;
