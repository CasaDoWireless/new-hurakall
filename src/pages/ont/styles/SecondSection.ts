import styled from 'styled-components';

const SecondSection = styled.section`
  min-height: 40rem;

  background-color: #fff;

  div {
    position: relative;
    .striped-bg {
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: space-between;
      height: 12.35rem;
      background: url(${'/assets/ont/background-striped-rectangle.png'})
        no-repeat scroll top;
      background-size: cover;
      position: relative;
      z-index: 0;
    }

    .white-bg {
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      left: 0;
      right: 0;
      top: 58%;
      max-width: 1100px;
      margin: 0 auto;
      width: 90%;

      article {
        flex-grow: 0.2;
        line-height: 240%;
        min-height: 30rem;
        max-width: 50%;

        h1 {
          color: #fff;
          font-size: 2rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 7rem;
          width: 100%;

          span {
            font-size: 3.5rem;
            font-weight: 400;
            letter-spacing: 0.1rem;
          }
        }

        p {
          font-size: 1.2rem;
          font-weight: 450;
          line-height: 1;
          color: #000;
          span {
            word-break: break-word;
            font-size: 0.9rem;
            font-weight: 400;
          }
        }
      }

      img {
        padding-left: 2rem;
        max-height: 28rem;
        margin-top: 4rem;
      }

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        article {
          min-height: fit-content;
          max-width: fit-content;
          h1 {
            font-size: 1.5rem;
            margin-bottom: 0;

            span {
              font-size: 3rem;
            }
          }

          p {
            font-size: 1.8rem;
            span {
              font-size: 1.3rem;
            }
          }
        }

        img {
          max-height: 12rem;
        }
      }
    }
  }
`;

export default SecondSection;
