import styled from 'styled-components';

const FourthSection = styled.section`
  background: url(${'/assets/images/roteador/reta2.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  height: fit-content;

  .container {
    padding: 6rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    max-width: 1260px;
    h1 {
      margin-left: 7.5rem;
      font-weight: 540;
      font-size: 2.5rem;
      text-align: left;
      span {
        color: #f1f1f1;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .content-info {
      color: #fff;
      display: flex;
      table {
        border-collapse: separate;
        border-spacing: 0;
        min-width: 350px;
        tr th,
        tr td {
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          padding: 1.5rem;
        }

        tr th:first-child,
        tr th {
          text-align: left;
          border-right: 0;
          font-weight: 400;
        }
        /* top-left border-radius */
        tr:first-child th:first-child {
          border-top-left-radius: 0.5rem;
        }
        /* top-right border-radius */
        tr:first-child th:last-child {
          border-top-right-radius: 0.5rem;
        }
        /* bottom-left border-radius */
        tr:last-child td:first-child {
          border-bottom-left-radius: 0.5rem;
        }
        /* bottom-right border-radius */
        tr:last-child td:last-child {
          border-bottom-right-radius: 0.5rem;
        }
      }
    }
  }

  .left,
  .right {
    margin-left: 6rem;
  }

  @media screen and (max-width: 1160px) {
    flex-direction: column;
    height: fit-content;
    font-size: 1.2rem;
    .right {
      margin-left: 7.5rem;

      .hardware-info {
        margin-bottom: 2rem;
        ul {
          li + li {
            margin-top: 1rem;
          }
        }
      }
    }
  }
`;

export default FourthSection;
