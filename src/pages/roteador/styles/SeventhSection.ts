import styled from 'styled-components';

const EighthSection = styled.section`
  background: url(${'/assets/ont/bg.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1260px;
    width: 100%;
    margin: 5rem auto 14rem auto;
    text-align: center;

    h1 {
      font-weight: 500;
      margin: 2rem auto;
    }

    .manufacturing-images {
      flex-direction: row;
      width: 62rem;
      margin: 0 auto;
      span {
        text-align: center;
        flex-direction: row;

        border-radius: 1rem;

        img {
          height: 12rem;
          width: 17rem;
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
    @media screen and (max-width: 980px) {
      .manufacturing-images {
        margin: 0 auto;
        width: 40rem;
        align-items: center;
        flex-direction: column;
        span {
          flex-direction: column;
        }
      }
    }
  }
`;

export default EighthSection;
