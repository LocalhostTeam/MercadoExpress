// import styled from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImg from '../../../assets/images/HomeMarket/bghome.svg';

export const SectionHome = styled.section`
  background: url(${bgImg});
  background-size: cover;
  background-position: center;

  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    div.content {
      display: flex;
    }
  }
`;

export const Header = styled.header`
  font-family: MuseoSlab;
  font-size: 20px;
  color: #fff;

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
          color: #fff;
        }

        a {
          text-decoration: none;
          color: #fff;
        }
      }
      button.button {
        width: 150px;
        margin-left: 25px;

        background: none;
        border: 2px solid #fff;
      }
    }
  }
`;

export const HomeCall = styled.div`
  position: relative;
  top: 200px;

  width: 100%;

  div.texto-left {
    color: #fff;

    span {
      font-size: 70px;
      font-weight: 700;
      line-height: 65px;

      strong {
        color: #b655bb;
      }
    }

    p {
      font-family: Poppins, sans-serif;
      font-size: 18px;
      margin-top: 60px;
    }
  }
`;

export const Form = styled.div`
  background: #fff;
  width: 85%;
  padding: 24px 24px;
  border: 1px solid #f6f5f5;
  box-sizing: border-box;
  box-shadow: 0px 10px 26px rgba(176, 176, 176, 0.25);
  border-radius: 10px;
  margin: 120px auto 0 auto;

  h1 {
    font-size: 35px;
  }

  p {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #606060;

    margin-top: 10px;
    margin-bottom: 30px;
  }

  form {
    span {
      font-size: 25px;
      font-weight: 700;
    }

    input {
      font-size: 14px;

      height: 50px;

      border: 1px solid #6e6e6e;
      border-radius: 8px;
      box-shadow: none;
      color: #606060;

      padding-left: 15px;
      margin-top: 15px;
      margin-bottom: 30px;
    }

    > p {
      font-size: 11px;
    }

    button.button {
      border-radius: 8px;
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
`;

export const SectionComoFunciona = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionFerramentas = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.text-up {
    margin-bottom: 150px;

    > span {
      display: block;
      font-family: MuseoSlab;

      margin-bottom: 25px;

      font-size: 35px;
      font-weight: 500;
      color: #6b3c96;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 300;
      font-size: 17px;
      line-height: 33px;
      color: #4e4e4e;
    }
  }

  div.container-specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;

    div {
      font-family: Poppins, sans-serif;

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      text-align: left;

      img {
        height: 90px;
      }

      h2 {
        font-weight: 500;
        font-size: 22px;
        color: #393743;

        margin: 25px 0;
      }

      p {
        font-weight: 300;
        font-size: 15px;
        color: #4e4e4e;

        width: 80%;
      }
    }
  }
`;

export const SectionAtention = styled.section`
  width: 100%;
  height: 400px;

  background: linear-gradient(to right, #6b2482, #0a1e89);

  color: #fff;
  text-align: center;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 73%;
    font-size: 60px;

    margin-bottom: 30px;
  }

  p {
    width: 20%;
    font-size: 20px;
  }

  button.button {
    width: 250px;

    background: #fff;
    border-radius: 8px;
    color: #2a2087;
  }
`;

export const SectionPerguntas = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
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
    color: #3c3c3c;

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
      width: 500px;
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
