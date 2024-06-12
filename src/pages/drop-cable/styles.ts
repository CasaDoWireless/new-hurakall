import styled from 'styled-components';

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 40rem;

  align-items: center;
  justify-content: space-around;

  padding: 0 5rem;
  position: relative;

  background: url(${'/assets/images/drop-background-01.png'}) no-repeat fixed
    center;
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

  article {
    z-index: 2;
    h1 {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 400;
      margin: 0;
    }

    p {
      color: #c20a13;
    }
  }

  img {
    height: 30rem;
    margin-top: 4rem;
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
    p {
      font-size: 2rem;
    }
    img {
      height: 20rem;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      height: 30rem;
    }
  }
`;

export const SecondSection = styled.section`
  background: url(${'/assets/images/drop-background-02.png'}) no-repeat fixed
    center;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 35rem;

  p,
  span {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 300;
  }

  figure {
    height: 35rem;
    width: 22rem;
    margin: 0;
    position: relative;
  }

  article {
    max-width: 30rem;
    p {
    }

    article {
      max-width: 30rem;
      p {
      }

      ul {
        display: flex;
        flex-direction: row;
        list-style: none;

        li {
          margin-left: 1.3rem;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            width: 5rem;
            height: 2rem;
            background-color: red;
            border-radius: 2rem;
            z-index: 5000;
          }

          :first-child {
            span {
              :before {
                content: '';
                position: absolute;
                margin-left: -10rem;
                display: inline;
                width: 6rem;
                border-radius: 5px;
                height: 2px;
                background: rgba(255, 255, 255, 1);
              }

              :after {
                content: '';
                position: absolute;
                margin-left: 1rem;
                display: inline;
                width: 4rem;

                height: 1px;
                border: 1px solid white;
                border-radius: 5px;
                opacity: 25%;
              }
            }
          }
          :not(:first-child) {
            span {
              :before {
                content: '';
                position: absolute;
                margin-left: -5.5rem;
                display: inline;
                width: 1.5rem;
                height: 2px;
                border-radius: 5px;
                background: linear-gradient(to right, transparent, white);
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 730px) {
    flex-direction: column-reverse;
    justify-content: end;
    padding: 5rem 5rem 0 5rem;
    margin: 0;

    figure {
      height: 15rem;
      align-self: center;
    }
    article {
      p {
        font-size: 2rem;
      }
    }

    article ul li:first-child span:before {
      width: 4rem;
      margin-left: -7.5rem;
    }
  }
`;

export const ThirdSection = styled.section`
  background: url(${'/assets/images/drop-background-03.png'}) no-repeat fixed
    center;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 35rem;
  color: white;

  padding: 0 1rem;

  p {
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 2rem;
  }

  img {
    max-width: 32rem;
    margin-left: 5rem;
  }

  figure {
    position: relative;
    margin: 0;
    max-width: 32rem;
    width: 30rem;
    height: 20rem;
  }

  @media screen and (max-width: 1200px) {
    figure {
      height: 17rem;
    }
  }

  @media screen and (max-width: 975px) {
    figure {
      height: 13rem;
    }
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: center;
    svg {
      transform: rotate(90deg);
    }

    figure {
      height: 13rem;
      margin: 5rem 0;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      transform: rotate(90deg);
    }

    figure {
      height: 13rem;
      margin: 5rem 0;
      left: 4rem;
    }
  }
`;

export const FouthSection = styled.section`
  background: url(${'/assets/images/drop-background-04.png'}) no-repeat fixed
    center;
  background-size: cover;

  padding: 7rem 7rem 5rem 7rem;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 2000px;
    h2 {
      color: #f00;
      font-weight: 400;
    }
    h1,
    p,
    li {
      color: white;
    }

    h1 {
      font-size: 3rem;
      font-weight: 400;
      z-index: 2;
    }

    h2 {
      margin: 0.5rem 0;
      z-index: 2;
    }

    article {
      z-index: 2;
      display: flex;
      flex-direction: row;
      margin-bottom: 2.5rem;

      div {
        p {
          line-height: 1.7rem;
        }

        & + div {
          margin-left: 3rem;
        }

        ul {
          padding: 0 0 0 1rem;
        }
      }
    }

    .img {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
      max-width: 60rem;
    }

    @media screen and (max-width: 1100px) {
      .img {
        max-width: 40rem;
      }
    }

    @media screen and (max-width: 890px) {
      div {
        h1 {
          font-size: 2rem;
        }

        article {
          flex-direction: column;
          font-size: 1.9rem;
          div + div {
            margin: 0;
          }
        }

        img {
          position: relative;
          max-width: 30rem;
        }
      }
    }

    .img {
      position: relative;
      max-width: 60rem;
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
  padding: 0 7rem;

  div {
    img {
    }
    p {
      color: #fff;
      font-size: 1.2rem;
    }
    margin: 0 3rem 0 0;
  }

  img {
    max-width: 40rem;
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
    div {
      img {
        min-width: 30rem;
      }
    }
    img {
      max-width: 50rem;
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
  min-height: 35rem;
  padding: 7rem 7rem;

  p {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 5rem;
  }
  div {
    .img-map {
      width: 37rem;
      margin-bottom: 10rem;
    }
  }

  .img-logo {
  }

  figure {
    position: relative;
    margin: 0;
    width: 37rem;
    height: 15rem;
    max-width: 45rem;
  }

  @media screen and (max-width: 1200px) {
    div {
      .img-map {
        max-width: 45rem;
      }
    }
  }

  @media screen and (max-width: 830px) {
    div {
      .img-map {
        max-width: 35rem;
      }
    }
    figure {
      position: relative;
      max-width: 30rem;
    }

    figure {
      height: 10rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
    div {
      .img-map {
        margin-bottom: 5rem;
      }
    }

    .img-map,
    figure {
      position: relative;
      max-width: 20rem;
    }

    figure {
      height: 7.5rem;
    }
  }
`;

export default FirstSection;
