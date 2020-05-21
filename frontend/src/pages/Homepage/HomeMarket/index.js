import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaCheckCircle,
  FaAngleDown,
  FaDollarSign,
  FaAngleDoubleUp,
} from 'react-icons/fa';

import {
  SectionHome,
  SectionComoFunciona,
  SectionAtention,
  SectionFerramentas,
  SectionPerguntas,
  Footer,
  FlexRow,
  Form,
  Header,
  HomeCall,
  Login,
} from './styles';

import formImg from '../../../assets/images/HomeMarket/form.svg';
import fastImg from '../../../assets/images/HomeMarket/fast.svg';
import mobileIcon from '../../../assets/icons/mobile.svg';
import webIcon from '../../../assets/icons/web.svg';
import dashboardIcon from '../../../assets/icons/budget.svg';

function HomeMarket() {
  const home = React.createRef();
  const comoFunciona = React.createRef();
  const ferramentas = React.createRef();

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

  function ScrollFerramentas() {
    ferramentas.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <>
      <SectionHome ref={home}>
        <div className="container">
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
                  <button type="button" onClick={ScrollFerramentas}>
                    Ferramentas
                  </button>
                </li>

                <Login to="/login">
                  <button className="button" type="button">
                    ENTRAR
                  </button>
                </Login>
              </ul>
            </div>
          </Header>

          <div className="content">
            <HomeCall>
              <div className="texto-left">
                <span>
                  A melhor forma de <br />
                  vender, está no <br />
                  <strong>MercadoExpress</strong>.
                </span>
                <div>
                  <FaDollarSign />
                  <FaAngleDoubleUp />
                  <p>Cadastre o seu mercado e venda exponencialmente.</p>
                </div>
              </div>
            </HomeCall>

            <Form>
              <h1>Cadastre seu mercado</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod.
              </p>
              <form>
                <span>Nome do mercado</span>
                <input
                  type="text"
                  placeholder="Qual o nome do mercado?"
                  required
                />

                <span>E-mail</span>
                <input
                  type="email"
                  placeholder="Qual o e-mail do dono ou gerente do mercado?"
                  required
                />

                <span>Cidade</span>
                <input
                  type="text"
                  placeholder="Qual cidade está localizado o mercado?"
                  required
                />

                <p>
                  Ao prosseguir, aceito que o MercadoExpress entre em contato
                  comigo por telefone, e-mail ou WhatsApp (incluindo mensagens
                  automáticas para fins comerciais).
                </p>

                <button type="submit" className="button">
                  Começar cadastro
                </button>
              </form>
            </Form>
          </div>
        </div>
      </SectionHome>

      <SectionComoFunciona className="container" ref={comoFunciona}>
        <FlexRow className="space-top-250">
          <div className="exp-left">
            <span>Cadastre o seu Mercado.</span>
            <p>
              Em Começar cadastro você envia suas informações e assina nosso
              contrato digital.
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
            <img src={formImg} alt="É fácil entrar!" />
          </div>
        </FlexRow>

        <FlexRow className="space-top-250 space-bottom-250">
          <div className="img-left">
            <img src={fastImg} alt="Só aguardar os resultados!" />
          </div>
          <div className="exp-right">
            <span>E lucre de uma forma rápida!</span>
            <p>
              Feito isso, você escolhe o dia para começar a receber pedidos pelo
              MercadoExpress e vender muito.
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
      </SectionComoFunciona>

      <SectionAtention>
        <h1>E não se preocupe, o Marketing e Publicidade é por nossa conta!</h1>
        <p>Então, aproveite e aumente o seu faturamento com a gente :)</p>
      </SectionAtention>

      <SectionFerramentas className="container" ref={ferramentas}>
        <div className="space-top-250 space-bottom-250">
          <div className="text-up">
            <span>Nossas ferramentas para te ajudar!</span>
          </div>
          <div className="container-specs">
            <div className="mobile">
              <img src={mobileIcon} alt="Simplificando sua vida" />
              <h2>Aplicativo Mobile</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue.
              </p>
            </div>
            <div className="web">
              <img src={webIcon} alt="Totalmente seguro" />
              <h2>Página Web</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue.
              </p>
            </div>
            <div className="dashboard">
              <img src={dashboardIcon} alt="Suporte 24h :)" />
              <h2>Painel de Controle</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                aliquet purus sit amet velit porttitor euismod. Sed tristique
                ipsum vitae turpis pharetra, ac pretium tellus congue.
              </p>
            </div>
          </div>
        </div>
      </SectionFerramentas>

      <SectionAtention>
        <h1>
          O MercadoExpress é perfeito para o seu mercado, seja ele do tamanho
          que for.
        </h1>
        <button type="button" className="button">
          Quero fazer parte
        </button>
      </SectionAtention>

      <SectionPerguntas>
        <div>
          <div className="text-left">
            <h1>Perguntas frequentes</h1>
            <p>
              Tire suas dúvidas sobre o MercadoExpress para Mercados e faça
              parte da maior marketech do Brasil.
            </p>
          </div>
          <dl className="questions">
            <dt className="question-single">
              <span>Quanto custa para entrar no MercadoExpress?</span>
              <FaAngleDown />
            </dt>
            <dd>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, eos.
              </span>
            </dd>

            <dt className="question-single">
              <span>O que eu preciso para me cadastrar?</span>
              <FaAngleDown />
            </dt>
            <dd>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, eos.
              </span>
            </dd>

            <dt className="question-single">
              <span>Como faço o cadastro do mercado?</span>
              <FaAngleDown />
            </dt>
            <dd>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, eos.
              </span>
            </dd>

            <dt className="question-single">
              <span>O contrato tem fidelidade?</span>
              <FaAngleDown />
            </dt>
            <dd>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, eos.
              </span>
            </dd>
          </dl>
        </div>
      </SectionPerguntas>

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
                  <button type="button" onClick={ScrollFerramentas}>
                    Ferramentas
                  </button>
                </li>
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="parceiros">
              <span>Usuários</span>
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

export default HomeMarket;
