import React from 'react';
import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md';

import { HeaderContainer } from './styles';

import MenuImg from '../../assets/icons/menu.svg';
import CartImg from '../../assets/icons/cart.svg';

function Header() {
  return (
    <HeaderContainer>
      <div className="menu-box">
        <img src={MenuImg} alt="" />
      </div>

      <div className="caixa-busca">
        <form>
          <button type="submit" className="button3">
            <MdSearch />
          </button>
          <input
            type="text"
            placeholder="Caixa de cereal Nestle chocolate 500g…"
          />
        </form>
      </div>
      <ul>
        <li>
          <div className="endereco-box">
            <span>
              Entregar em{' '}
              <strong>
                Av. Liga das Lendas... 312 <MdKeyboardArrowDown />
              </strong>
            </span>
          </div>
        </li>
        <li>
          <div className="cart-box">
            <div className="cart">
              <span>
                <p>2</p>
              </span>
              <img src={CartImg} alt="" />
            </div>

            <strong>R$ 12.325,00</strong>
          </div>
        </li>
        <li>
          <div className="profile-box">
            <span>
              Olá,
              <br /> Matheus M
            </span>
            <MdKeyboardArrowDown />

            <div className="avatar-box">
              <img src="" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
