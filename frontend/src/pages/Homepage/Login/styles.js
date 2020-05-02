import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import CloudsImg from '../../../assets/images/clouds.svg';

export const SectionLogin = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: #ededed;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 1140px;
  height: 640px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

  div.left {
    width: 730px;
    height: 100%;

    background-image: url(${CloudsImg});
    background-position: left;
    color: #fff;

    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      color: #fff;
      transition: 0.2s;

      margin: 20px 20px 0;

      svg {
        font-size: 30px;
      }

      span {
        font-size: 16px;
        font-weight: 700;
      }

      &:hover {
        color: ${darken(0.15, '#fff')};
      }
    }

    h1 {
      position: relative;
      top: 10%;
      left: 10%;

      font-size: 120px;

      width: 50%;
      line-height: 110px;
    }

    > span {
      display: block;

      position: relative;
      top: 20%;
      left: 12%;

      width: 90px;
      border: 9px solid #fff;
    }
  }

  div.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 410px;
    height: 100%;

    background: #fff;

    > span {
      font-size: 30px;
      font-weight: 700;

      color: #44363b;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 400;
      font-size: 15px;

      color: #311e5c;
      margin: 15px 0 30px 0;
    }
  }
`;

export const Form = styled.form`
  text-align: left;

  > span {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;

    color: #311e5c;
  }

  input {
    display: block;

    width: 320px;
    height: 60px;
    padding-left: 10px;
    margin-bottom: 20px;

    background: none;
    border-bottom: 2px solid #d9d9d9;
    border-radius: 0;
    box-shadow: none;

    transition: 0.3s;
  }

  input[type='text']:focus,
  input[type='password']:focus {
    width: 330px;
    border-color: #b655bb;
  }

  > a {
    display: block;
    text-align: right;

    color: #ff5788;
    text-decoration: none;
    transition: 0.2s;

    margin-bottom: 50px;

    &:hover {
      color: ${darken(0.15, '#ff5788')};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      width: 190px;
      margin-bottom: 20px;
    }
  }
`;

export const Register = styled(Link)`
  text-decoration: none;

  > span {
    font-size: 16px;
    color: #6c6c6c;
    transition: 0.2s;

    &:hover {
      color: ${darken(0.15, '#6c6c6c')};
    }
  }
`;
