import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/logos/Logo.png';
import '../login/login.css';

function Cadastro({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulação de cadastro
        onLogin();
        navigate('/plataforma');
    };

    return (
        <div className="auth-container">

            <Link to="/" className="auth-logo-link">
                <img src={Logo} className="logo-header" alt="Voltar para Home" />
            </Link>

            <div className="auth-form">
                <h2>Cadastro</h2>
                <div className="input-group">
                    <input type="text" id="name" required />
                    <label htmlFor="name">Nome Completo</label>
                </div>
                <div className="input-group">
                    <input type="email" id="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password" required />
                    <label htmlFor="password">Senha</label>
                </div>
                <button className="auth-button">Cadastrar</button>
                <div className="auth-link">
                    <p>Já tem uma conta? <a href="/login">Faça Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;