import styled from 'styled-components';

const SixthSection = styled.section`
  background: url(${'/assets/ont/bg-kneaded.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;

  .container {
    max-width: 1260px;
    margin: 7rem auto;
    padding: 0 12rem;
    padding-left: 5rem;

    .feature + .feature {
      margin-top: 5rem;
      .feature-info p {
        max-width: 50rem;
      }
    }

    .feature {
      display: flex;
      .icon {
        min-width: fit-content;
        margin: 1rem 2.2rem;
      }
      .feature-info {
        h1 {
          margin: 0 auto;
          margin-bottom: 0.2rem;
          font-size: 3rem;
          font-weight: 400;
        }
        p {
          margin: 0;
          font-size: 1.2rem;
          max-width: 30rem;
        }
      }
    }
  }
  @media screen and (max-width: 530px) {
    .container {
      .feature {
        .feature-info {
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
export default SixthSection;
