import styled from 'styled-components';

const FourthSection = styled.section`
  background: url(${'/assets/ont/specs-bg.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  height: fit-content;

  .container {
    padding: 6rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    max-width: 1260px;
    h1 {
      margin-left: 7.5rem;
      span {
        color: #000;
      }
    }

    .specs {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      height: 22rem;
      .right {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        height: 100%;
        padding: 2% 0;
        padding-bottom: 3%;
        .hardware-info ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            span + span {
              margin-left: 1rem;
            }
            span img {
              max-height: 2rem;
            }
          }
          li + li {
            margin-top: 2rem;
          }
        }
        .content-info {
          color: #fff;
          table {
            border-collapse: separate;
            border-spacing: 0;
            min-width: 350px;
            tr th,
            tr td {
              border-right: 1px solid #bbb;
              border-bottom: 1px solid #bbb;
              padding: 5px;
            }
            tr th:first-child,
            tr td:first-child {
              border-left: 1px solid #bbb;
            }
            tr th {
              border-top: 1px solid #bbb;
              text-align: left;
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
    }
    @media screen and (max-width: 650px) {
      .container {
        .specs {
          .left {
            margin-left: 4rem;

            ul {
              li {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
`;

export default FourthSection;
