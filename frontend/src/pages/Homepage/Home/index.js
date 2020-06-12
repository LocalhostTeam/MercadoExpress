import React from 'react';
import { Link } from 'react-router-dom';

import { FaPlay, FaYoutube } from 'react-icons/fa';

import {
  SectionHome,
  SectionAchar,
  SectionComoFunciona,
  SectionAplicativo,
  Footer,
  FlexRow,
  FlexColumn,
  Header,
  HomeCall,
  Login,
} from './styles';

import HomeImg from '../../../assets/images/Home/confort.svg';
import MobileAndWeb from '../../../assets/images/Home/onlinebuy.svg';
import TimeImg from '../../../assets/images/Home/waitminutes.svg';
import GlobalImg from '../../../assets/images/Home/partnes.svg';
import AppImg from '../../../assets/images/Home/simpleandfast.svg';
import StoresImg from '../../../assets/images/Home/stores.svg';

import Leaves1 from '../../../assets/images/Home/leaves1.svg';
import Leaves2 from '../../../assets/images/Home/leaves2.svg';
import Leaves3 from '../../../assets/images/Home/leaves3.svg';
import Leaves4 from '../../../assets/images/Home/leaves4.svg';

import Line1 from '../../../assets/images/Home/line1.svg';
import Line2 from '../../../assets/images/Home/line2.svg';

function Home() {
  const home = React.createRef();
  const comoFunciona = React.createRef();
  const aplicativo = React.createRef();

  function ScrollHome() {
    home.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function ScrollFunciona() {
    comoFunciona.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function ScrollAplicativo() {
    aplicativo.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <>
      <SectionHome className="container" ref={home}>
        <Header>
          <div className="logo">
            <h1>MercadoExpress</h1>
          </div>
          <div className="menu-desktop">
            <ul>
              <li>
                <button type="button" onClick={ScrollHome}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={ScrollFunciona}>
                  Como Funciona
                </button>
              </li>
              <li>
                <button type="button" onClick={ScrollAplicativo}>
                  Aplicativo
                </button>
              </li>
              <li>
                <Link to="/mercado">Parceiros</Link>
              </li>

              <Login to="/login">
                <button className="button" type="button">
                  Entre de graça
                </button>
              </Login>
            </ul>
          </div>

          <div className="menu-mobile">
            <ul>
              <li>
                <button type="button" onClick={ScrollHome}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={ScrollFunciona}>
                  Como Funciona
                </button>
              </li>
              <li>
                <button type="button" onClick={ScrollAplicativo}>
                  Aplicativo
                </button>
              </li>
              <li>
                <Link to="/mercado">Parceiros</Link>
              </li>

              <Login to="/login">
                <button className="button" type="button">
                  Entre de graça
                </button>
              </Login>
            </ul>
          </div>
        </Header>
        <HomeCall>
          <div className="texto-left">
            <span>
              Comprar ficou <br />
              bem mais <strong>fácil</strong> !
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquet purus sit amet velit porttitor euismod. Sed tristique
              ipsum vitae turpis pharetra, ac pretium tellus congue.{' '}
            </p>
            <div>
              <Login to="/login">
                <button className="button" type="button">
                  <FaPlay
                    style={{
                      fontSize: 15,
                      position: 'relative',
                      top: 2,
                      marginRight: 5,
                    }}
                  />
                  Começar agora!
                </button>
              </Login>
              <a
                href="https://www.youtube.com/watch?v=XWF4SBbRMdc"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="button2" type="button">
                  <FaYoutube
                    style={{
                      fontSize: 20,
                      verticalAlign: 'top',
                      marginRight: 5,
                    }}
                  />
                  Saiba mais
                </button>
              </a>
            </div>
          </div>
          <div className="img-right">
            <img src={HomeImg} alt="Home" />
          </div>
        </HomeCall>
      </SectionHome>

      <SectionAchar>
        <img style={{ width: '16%' }} src={Leaves1} alt="" />
        <div>
          <h1>É simples e rápido!</h1>
          <p>Da uma olhada :)</p>
        </div>
        <img
          style={{
            position: 'relative',
            bottom: 30,
            float: 'right',
            width: '15%',
          }}
          src={Leaves2}
          alt=""
        />
        <div className="clear" />
      </SectionAchar>

      <SectionComoFunciona ref={comoFunciona}>
        <div className="container">
          <FlexRow className="">
            <div className="img-left">
              <img src={MobileAndWeb} alt="Mobile ou Web" />
            </div>
            <div className="exp-right">
              <span>Faça sua compra!</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue. Praesent
                vestibulum.
              </p>
            </div>
          </FlexRow>
        </div>

        <div className="leaves1">
          <div>
            <img
              style={{
                float: 'right',
                width: '10%',
              }}
              src={Leaves3}
              alt=""
            />
          </div>
          <img src={Line1} alt="" />
        </div>

        <div className="container">
          <FlexRow className="">
            <div className="exp-left">
              <span>Espere por alguns minutos</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue. Praesent
                vestibulum.
              </p>
            </div>
            <div className="img-right">
              <img src={TimeImg} alt="Só aguardar!" />
            </div>
          </FlexRow>
        </div>

        <div className="leaves2">
          <img src={Line2} alt="" />
          <img
            style={{
              position: 'relative',
              left: 0,
              top: 140,
              float: 'left',
              width: '8%',
            }}
            src={Leaves4}
            alt=""
          />
        </div>

        <div className="container">
          <FlexColumn>
            <div className="exp-center">
              <span>Receba a sua compra!</span>
              <p>Simples né?</p>
            </div>
            <div className="img-center">
              <img src={GlobalImg} alt="Em qualquer lugar!" />
            </div>
          </FlexColumn>
        </div>
      </SectionComoFunciona>

      <SectionAplicativo ref={aplicativo}>
        <FlexRow className="space-top-250 space-bottom-250 container-app">
          <div className="img-app">
            <img src={AppImg} alt="Mobile ou Web" />
          </div>

          <div className="exp-app">
            <span>
              Economize seu tempo agora baixando nosso <strong>APP</strong>.
            </span>
            <div className="stores">
              <a
                href="https://play.google.com/store"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={StoresImg} alt="Google Play" />
              </a>
            </div>
            <span>ou</span>
            <button type="button" className="button2">
              Tentar pela web
            </button>
          </div>
        </FlexRow>
      </SectionAplicativo>

      <Footer>
        <div className="row">
          <div className="column">
            <div className="endereco">
              <span>MercadoExpress</span>
              <p>
                Rua José Eugênio da Silva, n°262 - Jardim América. RanchariaSP
              </p>
            </div>
          </div>

          <div className="column">
            <div className="links">
              <span>Links Rápidos</span>
              <ul>
                <li>
                  <button type="button" onClick={ScrollHome}>
                    Home
                  </button>
                </li>
                <li>
                  <button type="button" onClick={ScrollFunciona}>
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button type="button" onClick={ScrollAplicativo}>
                    Aplicativo
                  </button>
                </li>
                <li>
                  <Link to="/mercado">Parceiros</Link>
                </li>
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="parceiros">
              <span>Parceiros</span>
              <ul>
                <li>
                  <a href="/mercado">Home</a>
                </li>
                <li>
                  <a href="/mercado">Como Funciona</a>
                </li>
                <li>
                  <a href="/mercado">Ferramentas</a>
                </li>
                <li>
                  <a href="/login">Entrar</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="conta">
              <span>Conta</span>
              <ul>
                <li>
                  <Link to="/login">Minha conta</Link>
                </li>
                <li>
                  <Link to="/cadastro">Criar conta</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="novidades">
              <span>Receba nossas novidads :)</span>
              <form>
                <input type="email" placeholder="Digite o seu melho e-mail" />
                <button type="button">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="line-footer" />

        <div className="row footer-last">
          <span>© 2020 MercadoExpress</span>
          <span>Privacy Policy Terms & Conditions</span>
        </div>
      </Footer>
    </>
  );
}

export default Home;
