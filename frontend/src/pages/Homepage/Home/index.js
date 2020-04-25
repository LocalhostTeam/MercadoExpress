import React from 'react';

import {
  SectionHome,
  SectionAchar,
  SectionComoFunciona,
  Header,
  HomeCall,
  Login,
} from './styles';

import HomeImg from '../../../assets/images/home.svg';
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
        <div />
      </SectionComoFunciona>
    </>
  );
}

export default Home;
