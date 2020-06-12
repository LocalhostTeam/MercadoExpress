import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const SectionHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  div.logo {
    h1 {
      font-family: MuseoSlab;
      font-weight: 500;
      font-size: 30px;
    }
  }

  div.menu-desktop {
    font-family: Roboto, sans-serif;
    font-size: 15px;

    ul {
      li {
        display: inline-block;
        margin-left: 25px;

        button {
          font-weight: 500;
          font-size: 15px;
          border: none;
          background: none;
          color: #212121;

          transition: 0.3s ease-out;

          &:hover {
            color: ${darken('0.35', '#6f6f6f')};
          }
        }

        a {
          font-weight: 500;
          text-decoration: none;
          color: #212121;
          transition: 0.3s ease-out;

          &:hover {
            color: ${darken('0.35', '#6f6f6f')};
          }
        }
      }
      button.button {
        width: 160px;
        margin-left: 25px;
      }
    }
  }

  div.menu-mobile {
    display: none;

    font-family: Roboto, sans-serif;
    font-size: 20px;
    text-align: center;

    width: 100%;
    background: red;

    ul {
      li {
        display: block;
        margin-bottom: 10px;

        button {
          font-weight: 500;
          font-size: 20px;
          border: none;
          background: none;
          color: #212121;

          transition: 0.3s ease-out;

          &:hover {
            color: ${darken('0.35', '#6f6f6f')};
          }
        }

        a {
          font-weight: 500;
          text-decoration: none;
          color: #212121;
          transition: 0.3s ease-out;

          &:hover {
            color: ${darken('0.35', '#6f6f6f')};
          }
        }
      }
      button.button {
        width: 160px;
        margin-left: 25px;
      }
    }
  }

  @media (max-width: 1308px) {
    display: flex;
    flex-direction: column;

    div.menu-desktop {
      display: none;
    }

    div.menu-mobile {
      display: none;
    }
  }
`;

export const HomeCall = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div.texto-left {
    font-family: ArialRoundedBold;
    color: #212121;

    margin-right: 15px;

    span {
      font-size: 65px;
      line-height: 70px;

      strong {
        color: #2a9f8d;
      }
    }

    p {
      font-family: ArialRoundedLight;
      font-size: 15px;

      max-width: 460px;
      margin-top: 35px;
    }

    div {
      margin-top: 100px;

      button.button {
        width: 160px;
      }

      button.button2 {
        width: 160px;
        margin-left: 20px;
      }
    }
  }

  div.img-right {
    img {
      width: 630px;
    }
  }

  @media (max-width: 430px) {
    div.texto-left {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        button.button2 {
          margin-top: 15px;
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin-top: 50px;

    div.texto-left {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 45px;
        line-height: 50px;
      }

      p {
        font-size: 13px;
      }

      div {
        margin: 40px 0 20px 0;
      }
    }

    div.img-right {
      img {
        width: 430px;
      }
    }
  }

  @media (max-width: 960px) {
    div.texto-left {
      span {
        font-size: 40px;
        line-height: 40px;
      }

      p {
        font-size: 13px;

        max-width: 340px;
      }
    }

    div.img-right {
      img {
        width: 400px;
      }
    }
  }

  @media (max-width: 1080px) {
    justify-content: space-around;

    div.texto-left {
      span {
        font-size: 45px;
        line-height: 50px;
      }

      p {
        max-width: 390px;
      }
    }

    div.img-right {
      img {
        width: 500px;
      }
    }
  }

  @media (max-width: 1190px) {
    justify-content: space-around;

    div.texto-left {
      span {
        font-size: 55px;
      }

      p {
        font-size: 14px;
      }

      div {
        margin: 40px 0;
      }
    }

    div.img-right {
      img {
        width: 560px;
      }
    }
  }
`;

export const Login = styled(Link)``;

export const SectionAchar = styled.section`
  div {
    text-align: center;

    h1 {
      font-size: 57px;
      color: #363636;
    }

    p {
      font-family: ArialRoundedLight;
      font-size: 20px;
      color: #363636;

      margin-top: 20px;
    }
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

  @media (max-width: 790px) {
    margin: 250px 0;
  }
`;

export const SectionComoFunciona = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.leaves1 {
    width: 100%;
    text-align: center;

    > img {
      position: relative;
      left: 5%;
      width: 50%;
    }
  }

  div.leaves2 {
    width: 100%;
    text-align: center;

    > img {
      position: relative;
      right: 5%;
      width: 50%;
    }
  }

  div.leaves3 {
    width: 100%;
  }

  @media (max-width: 790px) {
    div.leaves1,
    div.leaves2 {
      > img {
        display: none;
      }
    }
  }
`;

export const SectionAplicativo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
  font-family: Roboto, sans-serif;

  padding: 50px;

  background: #263238;
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

          transition: 0.3s;

          &:hover {
            color: ${darken('-0.6', '#fff')};
          }
        }

        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;

          transition: 0.3s;

          &:hover {
            color: ${darken('-0.6', '#fff')};
          }
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div.exp-left,
  div.exp-right {
    color: #363636;

    span {
      font-family: ArialRoundedBold;
      font-size: 40px;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 26px;

      width: 480px;
      margin: 20px 0;
    }
  }

  div.exp-app {
    display: block;
    margin-left: auto;
    text-align: center;
    color: #363636;

    span {
      font-family: ArialRounded;
      font-size: 57px;

      strong {
        color: #16a08b;
      }
    }

    span:nth-of-type(2) {
      display: block;
      font-size: 35px;
      margin-bottom: 50px;
    }

    div.stores {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 50px 0;

      img {
        width: 70%;
      }
    }

    button.button2 {
      width: 200px;
      background: #fff;
      color: #2a2087;
      border: 0;
      border-radius: 8px;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    }
  }

  div.img-app {
    img {
      position: relative;
      left: -150px;
      width: 120%;
    }
  }

  div.img-right {
    img {
      width: 80%;
    }
  }

  div.img-left {
    img {
      width: 80%;
    }
  }

  @media (max-width: 550px) {
    div.exp-app {
      span {
        font-size: 30px;
      }

      span:nth-of-type(2) {
        font-size: 25px;
      }
    }
  }

  @media (max-width: 790px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;

    div.exp-app {
      span {
        font-size: 40px;
      }

      span:nth-of-type(2) {
        font-size: 30px;
      }
    }

    div.exp-left,
    div.exp-right {
      order: 1;

      span {
        font-size: 30px;
      }

      p {
        font-size: 13px;
        line-height: 23px;

        width: 100%;
      }
    }

    div.img-app {
      display: none;
    }

    div.img-left {
      img {
        width: 53%;
      }
    }

    div.img-right {
      img {
        width: 60%;
      }
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.exp-center {
    font-family: ArialRounded;
    text-align: center;
    color: #363636;

    margin-bottom: 30px;

    span {
      display: block;
      font-size: 50px;
      margin-bottom: 10px;
    }

    p {
      font-family: ArialRoundedLight;
      font-size: 25px;
    }
  }

  div.img-center {
    img {
      display: block;
      margin: 0 auto;
      width: 78%;
    }
  }

  @media (max-width: 790px) {
    margin-top: 80px;
  }
`;
