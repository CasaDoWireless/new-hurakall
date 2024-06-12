import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 2000px;
  background-color: #000;

  padding: 8% 15%;

  width: 100%;

  p,
  h1,
  span,
  li,
  a {
    color: #fff;
    transition: color 0.2s;
  }

  a {
    :hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  div {
    display: flex;
    flex-direction: row;

    section {
      flex: 1;
      img {
        margin-bottom: 4rem;
      }
      p {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
      }
      ul {
        display: flex;
        list-style: none;
        padding: 0;

        li {
          img {
            width: 1.2rem;
          }

          & + li {
            margin-left: 1rem;
          }
        }
      }
      & + section {
        nav {
          line-height: 2.5rem;
          a {
            text-decoration: none;
            font-size: 1rem;

            & + a {
              margin-left: 2rem;
            }
          }
        }
      }
    }
  }
  span {
    width: 100%;
    text-align: center;

    font-size: 0.7rem;

    :before {
      content: '';
      display: block;
      min-width: 12rem;

      height: 1px;
      background: red;
      margin: 4rem 10%;
    }
  }

  @media screen and (max-width: 950px) {
    div {
      align-items: center;
      flex-direction: column;

      section + section {
        margin-top: 5rem;

        ul {
          li {
            a {
              font-size: 2rem;
            }
          }
        }
        nav {
          a {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
