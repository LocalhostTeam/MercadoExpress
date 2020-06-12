import styled from 'styled-components';
import { darken } from 'polished';

export const FooterContainer = styled.footer`
  font-family: Roboto, sans-serif;

  padding: 50px;

  background: #263238;
  color: #fff;

  position: relative;

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
