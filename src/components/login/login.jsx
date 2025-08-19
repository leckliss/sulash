import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/logos/Logo.png';
import './login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulação de autenticação
        if (username === 'user' && password === 'password') {
            onLogin();
            navigate('/plataforma');
        } else {
            alert('Credenciais inválidas');
        }
    };

    return (
        <div className="auth-container">
                <Link to="/" className="auth-logo-link">
                    <img src={Logo} className="logo-header" alt="Voltar para Home" />
                </Link>
            
            <div className="auth-form">
                <h2>Login</h2>
                <div className="input-group">
                    <input type="email" id="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password" required />
                    <label htmlFor="password">Senha</label>
                </div>
                <button className="auth-button">Entrar</button>
                <div className="auth-link">
                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;