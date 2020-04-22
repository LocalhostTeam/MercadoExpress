import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <h1>Faça seu login</h1>
                <input placeholder="Digite seu email" />
                <input placeholder="Digite sua senha" />

                <button className="button" type="submit">
                    Entrar
                    <Link to="/home" />
                </button>
                <Link to="/cadastro">Não tenho cadastro</Link>
            </section>
        </div>
    );
}

export default Logon;
