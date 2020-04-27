import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  font-family: MuseoSlab;
  font-size: 20px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  div.menu-desktop {
    font-family: Poppins, sans-serif;
    font-size: 16px;

    ul {
      li {
        display: inline-block;
        margin-left: 25px;

        button {
          font-size: 16px;
          border: none;
          background: none;
          color: #6f6f6f;
        }

        a {
          text-decoration: none;
          color: #6f6f6f;
        }
      }
      button.button {
        width: 150px;
        margin-left: 25px;
      }
    }
  }
`;

export const HomeCall = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div.texto-left {
    span {
      font-size: 50px;
      font-weight: 700;
      line-height: 65px;

      strong {
        color: #b655bb;
      }
    }

    p {
      font-family: Poppins, sans-serif;
      font-size: 18px;
      margin-top: 35px;
    }

    button.button {
      width: 150px;
      margin-top: 35px;

      text-transform: uppercase;
      font-size: 15px;
    }
  }

  div.img-right {
    img {
      width: 630px;
    }
  }
`;

export const Login = styled(Link)``;

export const SectionAchar = styled.section`
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
  }

  div.input-cidade {
    display: flex;
    justify-content: center;

    margin-bottom: 150px;
    margin-top: 50px;

    form {
      input {
        width: 700px;
        height: 70px;
      }

      button {
        position: relative;
        right: 50px;

        font-family: Poppins, sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
      }

      button.button {
        width: 150px;
        height: 70px;
      }
    }
  }

  div.container-specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 100px;

    div {
      width: 320px;
      height: 250px;
      padding: 0 25px 0 25px;
      background: #fff;
      border: 0;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      img {
        height: 60px;
      }

      h2 {
        font-size: 17px;

        margin: 15px 0 15px 0;
      }

      p {
        font-family: Poppins, sans-serif;
        font-size: 13px;
        color: #606060;
      }
    }
  }
`;

export const SectionComoFunciona = styled.section`
  background: linear-gradient(140deg, #6b2482, #0a1e89);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionAplicativo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.text-up {
    margin: 150px 0 50px 0;

    > span {
      display: block;
      margin-bottom: 25px;

      font-size: 35px;
      font-weight: 700;
      color: #6b3c96;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 300;
      font-size: 17px;
      line-height: 33px;
      color: #4e4e4e;

      max-width: 560px;
    }
  }
`;

export const Footer = styled.footer`
  font-family: Montserrat, sans-serif;

  padding: 50px;

  background: #1b1543;
  color: #fff;

  div {
    span {
      display: block;

      font-size: 15px;
      font-weight: 700;

      margin-bottom: 20px;
    }

    p {
      width: 200px;
    }

    ul {
      font-weight: 400;
      list-style: none;

      li {
        margin-top: 15px;

        button {
          border: 0;
          background: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
        }

        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }
      }
    }

    form {
      display: block;
      input {
        font-size: 14px;

        width: 270px;
        height: 45px;
        padding-left: 15px;

        border-radius: 4px;
      }

      button {
        position: relative;
        right: 30px;
        vertical-align: bottom;

        font-size: 19px;
        font-weight: 700;

        width: 120px;
        height: 45px;

        border: 0;
        border-radius: 4px;

        background: #3ecced;
        color: #fff;
      }
    }
  }

  div.endereco {
    span {
      font-family: MuseoSlab;
      font-weight: 500;
      font-size: 20px;
    }
  }
  div.line-footer {
    margin: 50px 0 30px 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  div.footer-last {
  }
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div.exp-left,
  div.exp-right {
    color: #fff;

    span {
      font-size: 35px;
      font-weight: 700;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 300;
      font-size: 17px;
      line-height: 33px;

      max-width: 560px;
      margin: 30px 0 30px 0;
    }

    div.topics {
      font-family: Poppins, sans-serif;
      font-weight: 300;
      font-size: 18px;

      div.topics-single {
        display: flex;
        align-items: center;
        margin-bottom: 18px;

        svg {
          color: #6ac259;
          font-size: 30px;

          margin-right: 20px;
        }
      }
    }
  }

  div.exp-app {
    span {
      font-size: 57px;
      font-weight: 700;

      strong {
        color: #971bad;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        font-size: 40px;
        color: #5d5d5d;
      }

      img {
        width: 380px;
        margin-top: 50px;
      }
    }
  }

  div.img-right {
    position: relative;
    top: 100px;

    img {
      width: 450px;
    }
  }

  div.img-left {
    position: relative;
    top: 90px;

    img {
      width: 470px;
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.exp-center {
    text-align: center;

    span {
      font-family: Poppins, sans-serif;
      font-size: 40px;
      font-weight: 300;
      line-height: 60px;
      color: #fff;

      span {
        font-size: 60px;
      }
    }
  }

  div.img-center {
    img {
      width: 850px;
    }
  }
`;
