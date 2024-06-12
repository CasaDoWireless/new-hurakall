import styled from 'styled-components';

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 45rem;

  align-items: center;
  justify-content: space-around;

  padding: 0 5rem;
  position: relative;

  background: url(${'assets/images/galeria/banner-galeria.png'}) no-repeat fixed center;
  background-size: cover;
  z-index: 0;

  span {
    text-align: center;
    height: 100%;
  }

  img {
    height: 25rem;
    width: 10rem;
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
  background: url(${'/assets/ont/bg.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;
  flex-direction: row;

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
      color: red;
    }
    .manufacturing-images {
      flex-direction: row;
      .image {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 320px));
        align-items: center;
        justify-content: center;
        text-align: center;
        justify-items: center;
        gap: 2rem;

        width: 100%;
        border-radius: 1rem;
        img {
          height: 15rem;
          object-fit: cover;
          object-position: center;

          border-radius: 1.2rem;
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
    svg {
      font-size: 5rem;
      margin-top: 4rem;
      margin-left: 8rem;

      position: absolute;
    }

    .manufacturing-videos {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      .row {
        gap: 1rem;
        display: flex;
        flex-direction: row;

        .containerVideo {
          border-radius: 1rem;
          width: 100%;
          max-width: 370px;
          max-height: 185px;
          z-index: 1;
        }
      }
    }
  }

  @media screen and (max-width: 970px) {
    flex-direction: column;
    .container {
      .manufacturing-videos {
        margin: 0 auto;
        .row {
          a {
            svg {
              margin-top: 3rem;
              margin-left: 7.5rem;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    flex-direction: column;
    .container {
      .manufacturing-images {
        margin: 0 auto;
        align-items: center;
        flex-direction: column;
        .image {
          flex-direction: column;
          width: 40rem;
        }
      }
      .manufacturing-videos {
        margin: 0 auto;
        width: 90%;
        .row {
          flex-direction: column;
          a {
            svg {
              text-align: center;
              font-size: 4rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    .container {
      margin: 0;
      .manufacturing-images {
        margin: 0 auto;
        align-items: center;
        flex-direction: column;
        .image {
          flex-direction: column;
          width: 40rem;
        }
      }
      .manufacturing-videos {
        flex-direction: column;

        .row {
          flex-direction: column;
          a {
            svg {
              font-size: 5rem;
              margin-top: 3rem;
              margin-left: 9rem;
            }
          }
        }
      }
    }
  }
`;

export const ThirdSection = styled.section`
  background-size: cover;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 35rem;
  align-items: center;

  div.localizacao {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      align-self: flex-start;
    }
    .colorLayer {
      background-color: red;
      opacity: 0.2;
      width: 39rem;
      pointer-events: none;
      height: 35vh;
      position: absolute;
      z-index: 1000;
      border-radius: 20px;
      outline: 2px solid red;
    }
    @media screen and (max-width: 1020px) {
    }
  }
`;

export default FirstSection;
