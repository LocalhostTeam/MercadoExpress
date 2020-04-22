import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Register() {
    return (
        <div className="register-container">
            <section className="form">
                <h1>Cadastre-se</h1>
                <p>
                    Junte-se ao iMarket e faça suas compras no conforto do seu
                    lar.
                </p>
            </section>

            <h1>Cadastro</h1>
            <input className="input" placeholder="Nome completo" />
            <input placeholder="Endereço" />
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="Estado" />
            <input placeholder="CEP" />

            <button className="button" type="submit">
                Confirmar
                <Link to="/home" />
            </button>
        </div>
    );
}

export default Register;
