import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom'; // Não precisamos mais do Link aqui
import Logo from '../../assets/logos/Logo.png';
import './header.css';

// 1. Receba a prop 'setActiveComponent'
export default function Header({ setActiveComponent }) {
    const [divisorPosition, setDivisorPosition] = useState({ left: 0, width: 0 });
    const logoRef = useRef(null);

    const handleMouseEnter = (event) => {
        const target = event.target;
        const rect = target.getBoundingClientRect();
        setDivisorPosition({ left: rect.left, width: rect.width });
    };

    const handleMouseLeave = () => {
        if (logoRef.current) {
            const rect = logoRef.current.getBoundingClientRect();
            setDivisorPosition({ left: rect.left, width: rect.width });
        }
    };

    return (
        <header className='header-container'>
            <nav className='header-container__nav'>
                {/* 2. Troque os <Link> por <button> e adicione o onClick */}
                <div className='logo-header' ref={logoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {/* O Logo volta a ser o Banner */}
                    <button onClick={() => setActiveComponent('Banner')}>
                        <img src={Logo} alt="Logo" />
                    </button>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => setActiveComponent('Cursos')}>Cursos</button>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => setActiveComponent('Contato')}>Contato</button>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => setActiveComponent('Local')}>Local</button>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => setActiveComponent('Servicos')}>Serviços</button>
                </div>

                <div className='header-container__nav__login-wrapper'>
                    {/* Mantive o Link aqui, assumindo que /login é uma página separada */}
                    <a className='login-link' href="/login">Entrar</a>
                </div>
            </nav>

            <div
                className='header-container__divisor'
                style={{
                    left: divisorPosition.left,
                    width: divisorPosition.width,
                    transition: 'left 0.3s, width 0.3s'
                }}
            ></div>
        </header>
    );
}