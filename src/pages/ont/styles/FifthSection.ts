import styled from 'styled-components';

const FifthSection = styled.section`
  background: url(${'/assets/ont/bg.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;

  .container {
    max-width: 1200px;
    margin: 4rem auto;

    .title {
      text-align: center;
      h1 {
        font-size: 3rem;
        font-weight: 500;
        margin: 0;
      }
      p {
        font-size: 1rem;
        font-weight: 300;
        max-width: 55rem;
        margin: 0 auto;
        margin-top: 1.5rem;
      }
    }

    .features {
      display: flex;
      margin-top: 4rem;
      .features-list {
        display: flex;
        flex-direction: column;
        h2 {
          margin: 0 auto;
          margin-left: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #bd0309;
        }
        ul {
          margin: 0;
          li + li {
            margin-top: 0.5rem;
          }
        }
      }

      .features-table {
        margin-left: 4rem;
        table {
          border-collapse: separate;
          border-spacing: 0;
          min-width: 350px;
          tr th,
          tr td {
            border-right: 1px solid #bbb;
            border-bottom: 1px solid #bbb;
            padding: 0.2rem 1rem;
            padding-right: 2rem;
          }
          tr th:first-child,
          tr td:first-child {
            border-left: 1px solid #bbb;
          }
          tr th {
            border-top: 1px solid #bbb;
            text-align: left;
            padding: 0;
            li {
              list-style: none;
              border-bottom: 1px solid #bbb;
              padding: 0.2rem 1rem;
              &:last-child {
                border-bottom: none;
              }
            }
          }
          tr th:first-child {
            padding-left: 1rem;
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
          .transparent-red {
            background-color: rgba(189, 3, 9, 0.35);
          }
        }
      }
    }

    @media screen and (max-width: 1260px) {
      max-width: 960px;

      .title {
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1rem;
        }
      }

      .features {
        .features-list {
          font-size: 0.8rem;
          h2 {
            font-size: 1.2rem;
            margin-left: 1.7rem;
          }
        }

        .features-table {
          font-size: 0.8rem;
        }
      }
    }

    @media screen and (max-width: 1060px) {
      max-width: 660px;

      .title {
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1rem;
        }
      }

      .features {
        flex-direction: column;
        align-items: center;
        .features-list {
          margin-left: 0;
          font-size: 1rem;
        }

        .features-table {
          margin-left: 0;
          margin-top: 4rem;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .container {
      p,
      li,
      td {
        font-size: 1.2rem;
      }
    }
  }
`;

export default FifthSection;
