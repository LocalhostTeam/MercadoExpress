import React from 'react';

import { FaCheckCircle } from 'react-icons/fa';

import {
  SectionHome,
  SectionAchar,
  SectionComoFunciona,
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

import LifeIcon from '../../../assets/Icons/icon1.svg';
import SecurityIcon from '../../../assets/Icons/icon2.svg';
import SupportIcon from '../../../assets/Icons/icon3.svg';

function Home() {
  return (
    <>
      <SectionHome id="home">
        <Header>
          <div className="logo">
            <h1>MercadoExpress</h1>
          </div>
          <div className="menu-desktop">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#como-funciona">Como Funciona</a>
              </li>
              <li>
                <a href="#aplicativo">Aplicativo</a>
              </li>
              <li>
                <a href="#parceiros">Parceiros</a>
              </li>
              <li>
                <Login to="/login">
                  <button className="button" type="button">
                    ENTRAR
                  </button>
                </Login>
              </li>
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

      <SectionComoFunciona>
        <div className="container">
          <FlexRow>
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

          <FlexRow>
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
    </>
  );
}

export default Home;
