import styled from 'styled-components';

export const FirstSection = styled.section`
  background-color: black;
  padding: 5rem;
  min-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80%;
    max-width: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    article {
      display: flex;
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 25rem;

        img {
          width: 25rem;
        }

        .img1{
          width: 35rem;
        }

        header {
          max-width: 25rem;
          h1 {
            margin: 0;
            font-weight: normal;
            font-size: 2rem;
            color: #fff;
          }
          p {
            margin: 0 0 2rem 0;
            color: #fff;
          }
        }
        main {
          figure {
            margin: 0;
            display: flex;
            gap: 1rem;
            img {
              width: 7rem;
              margin: 0.2rem;
              height: auto;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 4rem;
    div {
      article {
        section {
          img {
            width: 25rem;
          }
          header {
          }
          main {
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 3rem;
    div {
      article {
        section {
          img {
            width: 25rem;
          }
          header {
            h1 {
              font-size: 1.5rem;
            }
            p {
              font-size: 0.9rem;
            }
          }
          main {
            figure {
              img {
                width: 5rem;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    height: auto;
    padding: 0;
    div {
      width: 80%;
      article {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        section {
          max-width: 100%;
          margin: 3rem 0;
          img {
            width: 27rem;
          }
          header {
            max-width: 40rem;
            h1 {
              font-size: 3rem;
            }
            p {
              font-size: 1.5rem;
            }
          }
          main {
            figure {
              justify-content: center;
              img {
                width: 14rem;
              }
            }
          }
        }
      }
    }
  }
`;

export const SecondSection = styled.section`
  background: url(${'/assets/images/drop-background-06.png'}) no-repeat fixed
    center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding: 5rem;
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 3000px;
    header {
      margin-bottom: 4rem;
      h1 {
        font-weight: normal;
        color: #fff;
        max-width: 48rem;
        text-align: center;
      }
    }
    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 5rem;
      align-items: center;
      div {
        background-image: linear-gradient(135deg, #060000, #2b2b2b);
        background-size: 500%;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 1rem;
        width: 15rem;
        height: 15rem;
        transition: 0.7s ease;

        p {
          font-size: 0.8rem;
          text-align: center;
          margin: 0;
          padding: 1rem;
        }

        figure {
          width: 8rem;
          margin: 0;
          padding: 0.5rem;
        }

        :hover {
          cursor: pointer;
          transition: 0.7s ease;
          background-position: 100%;
          transform: scale(1.05) translateY(-4px);
        }
        :active {
          background-position: 50%;
          transform: scale(0.9) translateY(0);
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    padding: 2rem;
    article {
      main {
        div {
          width: 20rem;
           margin-bottom: 10rem;
          height: 20rem;
          figure {
            width: 15rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
    article {
      header {
        h1 {
          font-size: 1.2rem;
        }
      }
      main {
        div {
          width: 25rem;
          height: 25rem;

          p {
            font-size: 1.2rem;
          }
          figure {
            width: 20rem;
          }
        }
      }
    }
  }
`;

export default FirstSection;
