import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionHome = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px 50px;

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
    font-size: 15px;

    ul {
      li {
        display: inline-block;
        margin-left: 25px;

        a {
          text-decoration: none;
          color: #6f6f6f;
        }

        button.button {
          width: 150px;
        }
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

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
  height: 300vh;
  background: linear-gradient(140deg, #6b2482, #0a1e89);
`;
