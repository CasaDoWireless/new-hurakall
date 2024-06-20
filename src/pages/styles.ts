import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: auto;
`;

export const Banner = styled.section`
  min-width: 100%;
  min-height: 75vh;
  background: url('/assets/home/background.png') no-repeat fixed center;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
    height: 100%;
  }
  @media screen and (max-width: 530px) {
    background-attachment: scroll;
  }
`;

export const Description = styled.section`
  text-align: left;
  min-width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    width: 60%;
    margin: 5rem 0rem;
  }
`;

export const Products = styled.section`
  text-align: center;
  min-width: 100%;

  h1 {
    color: #ee0000;
    font-weight: 400;
    font-size: 2.4rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  h2 {
    color: #000;
    font-weight: 400;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  h3 {
    color: #000;
    font-weight: 400;
    font-size: 1.4rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #ee0000;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  .productDiv {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ddd;

    /* section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5rem;
      padding: 2rem;

      max-width: 2000px;

      position: relative;

      h1 {
        color: #ee0000;
        font-weight: 400;
        font-size: 2.4rem;
        margin: 0;
        margin-bottom: 1rem;
      }

      h2 {
        color: #000;
        font-weight: 400;
        font-size: 2rem;
        margin: 0;
        margin-bottom: 1rem;
      }

      h3 {
        color: #000;
        font-weight: 400;
        font-size: 1.4rem;
        margin: 0;
        margin-bottom: 1rem;
      }

      a {
        color: #ee0000;
        font-weight: 500;
        font-size: 1.2rem;
        margin: 0;
        margin-bottom: 1rem;
        margin-top: 3rem;
      }

      span {
        width: 80%;
      }
    } */

    figure {
      position: relative;
      margin: 0;
      width: 35rem;
      height: 25rem;
      margin-top: 10rem;
      margin-bottom: 10rem;
    }

    @media screen and (max-width: 1000px) {
      figure {
        width: 25rem;
        height: 15rem;
      }
    }
  }

  .left {
    background: #000;
    flex-direction: row-reverse;
    h2,
    h3 {
      color: #fff;
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
    margin-bottom: 1rem;
  }
`;

export default Container;
