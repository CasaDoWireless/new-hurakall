import styled from 'styled-components';

const SeventhSection = styled.section`
  background: #fff;
  display: flex;
  align-items: center;
  .container {
    max-width: 1260px;
    min-height: 36rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;

    .signal {
      margin: 0;
      margin-right: auto;
      span {
        min-width: 100%;
      }
    }

    .placeholder {
      min-width: 35%;
    }

    .info-text {
      position: absolute;
      left: 54%;
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
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 530px) {
    .container {
      .info-text {
        p {
          font-size: 1.2rem;
          font-weight: 2rem;
        }
      }
      .signal {
        margin-right: 2rem;
      }
    }
  }
`;

export default SeventhSection;
