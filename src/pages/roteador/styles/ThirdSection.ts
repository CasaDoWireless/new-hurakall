import styled from 'styled-components';

const ThirdSection = styled.section`
  background: url(${'/assets/images/roteador/fundo1.png'}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  margin: 0 auto;
  padding-bottom: 4rem;

  div {
    max-width: 1280px;
    margin: 0 auto;
    h1 {
      max-width: 80%;
      font-size: 1.2rem;
      font-weight: 400;
      max-width: 50rem;
      margin: 5rem 12% 4rem 24%;
      text-align: center;
    }

    li {
      list-style: none;
    }

    .speed-mbps-section {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 70%;
      margin: 0 7rem 0 auto;

      height: 15rem;

      @keyframes slidein-left {
        0% {
          opacity: 0;
          transform: translatex(-100%);
        }
        100% {
          opacity: 1;
          transform: translatex(0);
        }
      }

      @keyframes slidein-right {
        0% {
          opacity: 0;
          transform: translatex(100%);
        }
        100% {
          opacity: 1;
          transform: translatex(0);
        }
      }

      .blue-section,
      .red-section {
        position: absolute;
        background: rgb(0, 0, 0);
        min-height: 10rem;
        height: 80%;
        display: flex;
        align-items: center;
        padding: 0 5rem;
        color: #fff;
        font-size: 1.5rem;

        ul {
          position: absolute;
          display: flex;
          justify-content: space-around;
          align-items: center;
          top: -1rem;
          margin: 0 auto;

          li {
            padding: 0 1rem;

            img {
              max-height: 1.8rem;
            }
          }
        }
      }

      .blue-section {
        left: 0;
        justify-content: flex-end;
        background: linear-gradient(
          90deg,
          transparent 7%,
          rgba(228, 3, 128, 0.8) 88%
        );
        width: 49.5%;
        border-radius: 0 1rem 1rem 0;
        animation: slidein-left 2s ease;
      }

      .red-section {
        right: 0;
        justify-content: flex-start;
        background: linear-gradient(
          90deg,
          rgba(109, 35, 164, 0.8) 12%,
          transparent 93%
        );
        width: 49.5%;
        border-radius: 1rem 0 0 1rem;
        animation: slidein-right 2s ease;
      }

      .blue-section p,
      .red-section p {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        span {
          font-size: 3.5rem;
        }
      }
    }

    .ont-back-section {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      max-width: 1280px;
      margin: 0 auto;

      .ont-back-container {
        .info {
          font-size: 1rem;
          position: absolute;
          z-index: 1;
          right: 15%;
          ul {
            display: flex;
            align-items: center;
            li {
              display: flex;
              align-items: center;
              padding: 0 2rem;
              gap: 1.5rem;
              span img {
                min-width: 2rem;
              }
            }
          }
        }

        .ont-back-img {
          position: relative;
          span {
            top: -4.2rem;
            img {
              max-height: 45rem;
            }
          }

          .rectangles {
            display: flex;
            width: 85%;
            position: absolute;
            bottom: 8.7rem;
            left: 16.5rem;
            .rectangle-1,
            .rectangle-2,
            .rectangle-3 {
              height: 7rem;
              border: 2px solid #ccc;
              border-top: none;
              border-radius: 0 0 20px 20px;
              position: relative;

              .icon-text {
                color: white;
                display: flex;
                align-items: center;
                flex-direction: column;
                position: absolute;
                bottom: -8rem;
                left: 0.5rem;
                .icon {
                  width: 100%;
                  max-height: 1rem;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  padding: 0 1rem;
                  margin-bottom: 0.5rem;

                  span img {
                    max-height: 2rem;
                  }
                }

                .text {
                  text-align: center;
                  min-width: 10rem;
                  margin: 0;
                }
              }
            }

            .rectangle-1 {
              width: 3rem;
              margin: 0 0.2rem;
              .icon-text {
                left: -3rem;
              }
            }

            .rectangle-2 {
              width: 5rem;
              margin: 0 0.2rem;
              .icon-text {
                left: -2.8rem;
              }
            }

            .rectangle-3 {
              width: 16.3rem;
              margin: 0 0.3rem;
              .icon-text {
                left: 1.3rem;
              }
            }
          }
        }

        .ont-back-homologado {
          position: absolute;
          top: 8rem;
          padding-left: 0.5rem;
        }

        .warranty-support {
          position: absolute;
          bottom: 1rem;
          right: 3.5rem;
          display: flex;
          gap: 2.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 1260px) {
    div {
      .speed-mbps-section {
        .blue-section,
        .red-section {
          position: relative;
          margin: 0 0.28rem;
          ul {
            top: -0.8rem;
            li img {
              max-height: 1.5rem;
            }
          }
        }

        .blue-section p,
        .red-section p {
          font-size: 1.2rem;
          span {
            font-size: 2.5rem;
          }
        }
      }

      .ont-back-section {
        max-width: 800px;
        .motion.div {
          width: 5rem;
        }
        .ont-back-container {
          .info {
            right: 0;
            ul li span img {
              max-height: 1.5rem;
            }
          }

          .ont-back-img {
            max-width: 700px;

            .rectangles {
              bottom: 2rem;
              left: 8.5rem;
              .rectangle-1,
              .rectangle-2,
              .rectangle-3 {
                height: 6rem;
                .icon-text {
                  bottom: -8rem;
                  left: 0;
                  .icon {
                    align-items: center;
                    margin-bottom: 0rem;

                    span img {
                      max-height: 1.5rem;
                    }
                  }
                }
              }

              .rectangle-1 {
                width: 1.5rem;
                .icon-text .text {
                  text-align: center;
                  margin-left: 3rem;
                  margin-bottom: 1rem;
                }
              }

              .rectangle-2 {
                width: 3rem;
                .icon-text .text {
                  margin-bottom: 1rem;
                  margin-left: 0.5rem;
                }
              }

              .rectangle-3 {
                width: 9rem;
              }
            }
          }

          .ont-back-homologado {
            top: 6rem;
            max-height: 2rem;
          }

          .warranty-support {
            max-width: 18rem;
            bottom: 3rem;
            right: -2rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1060px) {
    div {
      tbody {
        font-size: 1.2rem;
      }
      h1 {
        font-size: 1.8rem;
        font-weight: 400;
        max-width: 50rem;
        margin: 5rem 10% 8rem 10%;
      }

      .speed-mbps-section {
        margin: 0 auto;
        margin-bottom: 3rem;
        flex-direction: column;
        .blue-section,
        .red-section {
          width: 100%;
        }
      }

      .ont-back-section {
        max-width: 600px;
        .ont-back-container {
          .info {
            ul {
              li span img {
                min-width: 1.5rem;
              }
            }
          }

          .ont-back-img {
            max-width: 600px;

            .rectangles {
              bottom: 0.8rem;
              left: 6.8rem;
              .rectangle-1,
              .rectangle-2,
              .rectangle-3,
              .rectangle-4 {
                .icon-text {
                  left: 0;
                }
              }

              .rectangle-1 {
                width: 1.5rem;
                margin: 0 0.2rem;
                .icon-text .text {
                  margin-bottom: 1.2rem;
                }
              }

              .rectangle-2 {
                width: 2.5rem;
                margin: 0 0.2rem;
              }

              .rectangle-3 {
                width: 8rem;
              }
            }
          }

          .ont-back-homologado {
            top: 5rem;
            max-height: 1.5rem;
          }

          .warranty-support {
            display: flex;
            flex-direction: column;
            max-width: 6rem;
            bottom: 0rem;
            right: 2rem;
            gap: 1rem;
          }
        }
      }
    }
  }
`;
export default ThirdSection;
