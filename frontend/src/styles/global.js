import { createGlobalStyle } from 'styled-components';

import MuseoSlab500 from '../assets/fonts/museo-slab/Museo_Slab_500.otf';
// import MuseoSlab300 from '../assets/fonts/museo-slab/Museo_Slab_300.otf';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap');
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

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: Roboto, sans-serif;
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

  #root {

  }

  .button{
    width: 100%;
    height: 50px;

    background: linear-gradient(140deg,#F873CF, #5129B2);
    border: 0;
    border-radius: 50px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);

    color: #FFF;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
}

  button {
    cursor: pointer;
  }
`;
