import styled from 'styled-components';
import { darken } from 'polished';

export const DashboardSection = styled.section`
  font-family: Roboto, sans-serif;

  background-color: #f3f5f7;

  padding: 100px 0;

  div.container {
    width: 1340px;
    padding: 0;

    .categoria {
      display: flex;
      align-items: center;

      color: #43425d;

      margin-bottom: 10px;

      span {
        font-family: ArialRounded;
        font-size: 16px;
      }
      svg {
        margin-left: 10px;
      }
    }

    div.grid-products {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;

      li.single-item {
        display: flex;
        flex-direction: column;

        padding: 15px;

        height: 340px;

        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        color: #616161;

        list-style: none;

        img {
          align-self: center;
          max-width: 220px;
        }

        > strong {
          font-size: 20px;
          font-weight: 500;

          line-height: 20px;

          margin-top: 5px;
        }

        > p {
          font-size: 16px;
          font-weight: 300;
          line-height: 25px;

          margin-top: 10px;

          > span {
            font-size: 30px;
            font-weight: 700;

            small {
              font-size: 22px;
              font-weight: 400;
            }
          }
        }

        button {
          background: #43425d;
          color: #fff;
          border: 0;
          border-radius: 4px;

          overflow: hidden;

          margin-top: auto;

          display: flex;
          align-items: center;
          transition: background 0.2s;

          &:hover {
            background: #128977;
          }

          div {
            display: flex;
            align-items: center;
            padding: 12px;
            background: #128977;

            svg {
              margin-right: 5px;
            }
          }

          span {
            font-size: 13px;
            font-weight: 500;

            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
`;
