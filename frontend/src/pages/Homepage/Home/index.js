import React from 'react';
import { Link } from 'react-router-dom';

import { FaCheckCircle, FaAngleDown } from 'react-icons/fa';

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

import HomeImg from '../../../assets/images/home.svg';
import MobileAndWeb from '../../../assets/images/mobileandweb.svg';
import TimeImg from '../../../assets/images/time.svg';
import GlobalImg from '../../../assets/images/global.svg';
import AppImg from '../../../assets/images/app.svg';
import StoresImg from '../../../assets/images/stores.svg';
import LifeIcon from '../../../assets/Icons/icon1.svg';
import SecurityIcon from '../../../assets/Icons/icon2.svg';
import SupportIcon from '../../../assets/Icons/icon3.svg';

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
                  ENTRAR
                </button>
              </Login>
            </ul>
          </div>
        </Header>
        <HomeCall>
          <div className="texto-left">
            <span>
              Faça sua compra <br />
              do mês com apenas <br />
              <strong>um click</strong>.
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Login to="/login">
              <button className="button" type="button">
                Entrar
              </button>
            </Login>
          </div>
          <div className="img-right">
            <img src={HomeImg} alt="Home" />
          </div>
        </HomeCall>
      </SectionHome>

      <SectionAchar>
        <h1>Procure na sua Cidade</h1>
        <div className="input-cidade">
          <form action="">
            <input type="text" placeholder="Pesquise para começar" />
            <button className="button" type="button">
              Achar
            </button>
          </form>
        </div>
        <div className="container-specs">
          <div className="life">
            <img src={LifeIcon} alt="Simplificando sua vida" />
            <h2>Simplificando sua Vida</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquet purus sit amet velit porttitor euismod. Sed tristique
            </p>
          </div>
          <div className="security">
            <img src={SecurityIcon} alt="Totalmente seguro" />
            <h2>Totalmente seguro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquet purus sit amet velit porttitor euismod. Sed tristique
            </p>
          </div>
          <div className="support">
            <img src={SupportIcon} alt="Suporte 24h :)" />
            <h2>Suporte 24h :)</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquet purus sit amet velit porttitor euismod. Sed tristique
            </p>
          </div>
        </div>
      </SectionAchar>

      <SectionComoFunciona ref={comoFunciona}>
        <div className="container">
          <FlexRow className="space-top-250">
            <div className="exp-left">
              <span>Faça sua compra!</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue. Praesent
                vestibulum.
              </p>
              <div className="topics">
                <div className="topics-single">
                  <FaCheckCircle />
                  Informe seu endereço
                </div>
                <div className="topics-single">
                  <FaCheckCircle />
                  Monte seu carrinho
                </div>
                <div className="topics-single">
                  <FaCheckCircle />
                  Pague em dinheiro ou cartão
                </div>
              </div>
            </div>
            <div className="img-right">
              <img src={MobileAndWeb} alt="Mobile ou Web" />
            </div>
          </FlexRow>

          <FlexRow className="space-top-250 space-bottom-250">
            <div className="img-left">
              <img src={TimeImg} alt="Só aguardar!" />
            </div>
            <div className="exp-right">
              <span>Espere por alguns minutos</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue. Praesent
                vestibulum.
              </p>
              <div className="topics">
                <div className="topics-single">
                  <FaCheckCircle />O pagamento irá ser processado
                </div>
                <div className="topics-single">
                  <FaCheckCircle />
                  Depois, o mercado vai receber sua compra
                </div>
                <div className="topics-single">
                  <FaCheckCircle />E enviar para você
                </div>
              </div>
            </div>
          </FlexRow>

          <FlexColumn>
            <div className="exp-center">
              <span>
                <i>
                  <span>Agora,</span> <br />é só receber a sua compra :)
                </i>
              </span>
            </div>
            <div className="img-center">
              <img src={GlobalImg} alt="Em qualquer lugar!" />
            </div>
          </FlexColumn>
        </div>
      </SectionComoFunciona>

      <SectionAplicativo className="container" ref={aplicativo}>
        <div className="text-up">
          <span>Aplicativo MercadoExpress</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet purus sit amet velit porttitor euismod. Sed tristique ipsum
          </p>
        </div>
        <FlexRow className="space-bottom-150">
          <div className="img-left">
            <img src={AppImg} alt="Portátil, fácil, rápido!" />
          </div>
          <div className="exp-app">
            <span>
              Faça sua compra <br />
              usando nosso
              <br />
              <strong>Aplicativo</strong>.
            </span>

            <div>
              <FaAngleDown />
              <img src={StoresImg} alt="AppStore e PlayStore" />
            </div>
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Como Funciona</a>
                </li>
                <li>
                  <a href="/">Parceiros</a>
                </li>
                <li>
                  <a href="/">Aplicativo</a>
                </li>
                <li>
                  <a href="/">Entrar</a>
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
                  <Link to="/login">Criar conta</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="novidades">
              <span>Receba nossas novidads :)</span>
              <form>
                <input type="text" placeholder="Digite o seu melho e-mail" />
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
