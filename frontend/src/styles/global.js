import { createGlobalStyle } from 'styled-components';

import ArialRoundedLight from '../assets/fonts/arial-rounded/arial-rounded-mt-light.ttf';
import ArialRounded from '../assets/fonts/arial-rounded/arial-rounded-mt.ttf';
import ArialRoundedBold from '../assets/fonts/arial-rounded/arial-rounded-mt-bold.ttf';
import MuseoSlab500 from '../assets/fonts/museo-slab/Museo_Slab_500.otf';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  @font-face {
    font-family: ArialRoundedLight;
    src: url(${ArialRoundedLight});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: ArialRounded;
    src: url(${ArialRounded});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: ArialRoundedBold;
    src: url(${ArialRoundedBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: MuseoSlab;
    src: url(${MuseoSlab500});
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body {
    font-family: ArialRounded;
    font-size: 14px;
  }

  input {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    color: #868686;

    width: 100%;
    border: 0;
    border-radius: 50px;
    background: #FFF;
    box-shadow: 0 3px 20px rgba(0, 0, 0, .15);

    padding-left: 40px;
  }

  .clear {
    clear: both;
  }

  .container {
    width: 1280px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  .container-app {
    width: 1440px;
    margin-right: auto;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .space-top-250 {
    margin-top: 250px;
  }

  .space-bottom-250 {
    margin-bottom: 250px;
  }

  .space-bottom-150 {
    margin-bottom: 150px;
  }

  .button {
    width: 100%;
    height: 45px;

    background: #16A08B;
    border: 0;
    border-radius: 20px;

    color: #FFF;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
}

.button2 {
    width: 100%;
    height: 45px;

    background: none;
    border: 1px solid #212121;
    border-radius: 20px;

    color: #111111;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
}

  button {
    font-family: Roboto, sans-serif;
    cursor: pointer;
  }

  @media (max-width: 1240px) {
    .container {
      width: 100%;
    }

    .container-app {
      width: 100%;
    }
  }
`;
