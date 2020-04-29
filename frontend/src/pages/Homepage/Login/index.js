import React from 'react';
import { Link } from 'react-router-dom';

import { FaAngleLeft } from 'react-icons/fa';

import { SectionLogin, Container, Form, Register } from './styles';

function Logon() {
  return (
    <SectionLogin>
      <Container>
        <div className="left">
          <Link to="/">
            <FaAngleLeft />
            <span>VOLTAR</span>
          </Link>
          <h1>BEM VINDO</h1>
          <span />
        </div>
        <div className="right">
          <span>ENTRAR</span>
          <p>Entre para começar a comprar :)</p>
          <div className="inputs">
            <Form>
              <span>E-mail</span>
              <input type="text" required />

              <span>Senha</span>
              <input type="password" required />

              <Link to="/">
                <span>Esqueceu a senha?</span>
              </Link>

              <div>
                <button type="submit" className="button">
                  Entrar
                </button>

                <Register to="/cadastro">
                  <span>Criar conta</span>
                </Register>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </SectionLogin>
  );
}

export default Logon;
