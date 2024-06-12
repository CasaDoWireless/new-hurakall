import styled from 'styled-components';

const SixthSection = styled.section`
  background: #fff;
  display: flex;
  align-items: center;
  .container {
    max-width: 1260px;
    min-height: 30rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;

    .signal {
      margin: 0;

      span {
        min-width: 100%;
      }
      img {
        right: 7%;
      }
    }

    .placeholder {
      min-width: 40%;
    }

    .info-text {
      position: absolute;
      left: 5%;
      min-height: fit-content;
      h1 {
        max-width: 18rem;
        color: #e3030a;
        font-size: 2.5rem;
        line-height: 2.5rem;
        margin-bottom: 0;
      }
      p {
        color: #444;
        max-width: 25rem;
        line-height: 2rem;
      }
    }
  }
  @media screen and (max-width: 912px) {
    .container {
      height: 50rem;

      .info-text {
        p {
          width: 20rem;
          font-size: 1.2rem;
          font-weight: 8rem;
        }
      }
    }
  }
`;

export default SixthSection;
