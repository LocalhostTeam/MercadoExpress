import styled from 'styled-components';

export const HeaderContainer = styled.header`
  font-family: Roboto, sans-serif;

  width: 100%;
  height: 80px;

  padding: 0 2%;

  position: relative;

  display: flex;
  align-items: center;

  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

  .menu-box {
    img {
      height: 18px;
    }
  }

  .caixa-busca {
    form {
      display: flex;

      button.button3 {
        width: 70px;
        height: 40px;

        position: relative;
        left: 40px;

        background: #f8f9fa;
        border-radius: 50px;

        svg {
          font-size: 30px;
          color: #16a08b;
        }
      }

      input {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 15px;

        width: 550px;
        height: 40px;

        background: #f8f9fa;
        box-shadow: none;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;

    margin-left: auto;

    li {
      display: inline-block;

      .endereco-box {
        text-align: center;

        cursor: pointer;

        span {
          display: block;

          font-weight: 300;
          line-height: 13px;

          strong {
            display: flex;
            align-items: center;

            color: #4b4b4b;
            font-weight: 700;

            svg {
              margin-left: 5px;
              font-size: 25px;
            }
          }
        }
      }

      .cart-box {
        margin: 0 90px;

        div.cart {
          display: inline-block;

          span {
            display: block;

            position: relative;
            top: 10px;
            left: 17px;

            width: 20px;
            height: 20px;

            border-radius: 50%;
            background-color: #16a08b;

            color: #ffffff;

            text-align: center;

            p {
              font-size: 13px;
              font-weight: 700;
            }
          }

          img {
            height: 23px;
          }
        }

        strong {
          font-weight: 700;
          color: #4b4b4b;

          margin-left: 15px;
        }
      }

      .profile-box {
        display: flex;
        align-items: center;

        color: #a4afb7;

        span {
          display: block;
          font-weight: 400;

          color: #4d4f5c;
        }

        svg {
          font-size: 28px;
          margin: 0 10px;
        }

        div.avatar-box {
          width: 50px;
          height: 50px;

          border-radius: 50%;

          background-color: #4b4b4b;
        }
      }
    }
  }
`;
