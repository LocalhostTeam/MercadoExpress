import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './styles';

function Footer() {
  return (
    <FooterContainer>
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
                <button type="button">Home</button>
              </li>
              <li>
                <button type="button">Como Funciona</button>
              </li>
              <li>
                <button type="button">Aplicativo</button>
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
    </FooterContainer>
  );
}

export default Footer;
