import styled from 'styled-components';

export const Container = styled.section`
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

export const ContactContainer = styled.section`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  * {
    border: 0;
  }

  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-bottom: 0;
      color: red;
      font-size: 2rem;
    }
    h1 {
      font-size: 3rem;
      margin-left: 0.35rem;
      font-weight: normal;
    }
    input {
      margin-top: 1rem;
      width: 43rem;
      height: 2.5rem;
      color: white;
      border-radius: 0.5rem;
      border: none;
      padding-left: 1rem;
      background-color: rgb(24, 24, 24);
      ::placeholder {
        color: rgb(90, 90, 90);
      }
    }
    .inputFile {
      display: none !important;
    }
    button {
      height: 2.75rem;
      border-radius: 0.5rem;
      background-color: red;
      color: white;
      text-align: center;
      width: 7.5rem;
    }
    .fileButton {
      font-size: 1.2rem;
      height: 2.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: red;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      span {
        font-size: 1.2rem;
      }
    }
    textarea {
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      background-color: rgb(24, 24, 24);
      padding: 0.5rem;
      border: none;
      resize: none;
      color: white;
    }
    .optionsButton {
      align-self: flex-start;
      display: flex;
      margin-top: 0.75rem;
      justify-content: center;
      align-items: center;
    }
    span {
      margin-left: 0.5rem;
      font-size: 2rem;
    }
  }

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
  }
  @media screen and (max-width: 1020px) {
  }

  @media screen and (max-width: 950px) {
    form {
      h1 {
        font-size: 2.5rem;
        padding-left: 9rem;
      }
      input {
        width: 35rem;
        margin-left: 5rem;
        font-size: 1.6rem;
      }
      textarea {
        width: 25rem;
        margin-left: 2rem;
      }
      h4 {
        font-size: 2rem;
        padding-left: 5rem;
      }
      .span1 {
        padding-left: 5rem;
        font-size: 1.6rem;
      }
      .optionsButton {
        align-self: center;
      }
    }
  }

  @media screen and (max-width: 550px) {
    form {
      margin: 0 auto;
      h1 {
        font-size: 1.9rem;
        padding-left: 9rem;
      }
      input {
        width: 30rem;
        margin-left: 5rem;
        font-size: 1.2rem;
      }
      textarea {
        width: 25rem;
        margin-left: 2rem;
      }
      h4 {
        font-size: 1.5rem;
        padding-left: 5rem;
      }
      .span1 {
        padding-left: 5rem;
        font-size: 1.2rem;
      }
      .optionsButton {
        align-self: center;
      }
    }
    div.localizacao {
      width: 39rem;
      .colorLayer {
        width: 39rem;
      }
    }
  }
`;

export default Container;
