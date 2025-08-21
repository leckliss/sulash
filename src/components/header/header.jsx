import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/logos/Logo.png';
import './header.css';

export default function Header({ setActiveComponent }) {
    // 1. ADICIONADO: Estado para controlar a visibilidade do menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [divisorPosition, setDivisorPosition] = useState({ left: 0, width: 0 });
    const navRef = useRef(null); // Usaremos uma ref na nav para pegar a posição inicial

    // Efeito para definir a posição inicial do divisor
    useEffect(() => {
        if (navRef.current) {
            const firstButton = navRef.current.querySelector('.logo-header-btn');
            if (firstButton) {
                const rect = firstButton.getBoundingClientRect();
                const headerRect = navRef.current.parentElement.getBoundingClientRect();
                // Ajusta a posição relativa ao header
                setDivisorPosition({ left: rect.left - headerRect.left, width: rect.width });
            }
        }
    }, []);


    const handleMouseEnter = (event) => {
        const target = event.target.closest('button'); // Garante que pegamos o botão
        if (target) {
            const rect = target.getBoundingClientRect();
            const headerRect = target.closest('.header-container').getBoundingClientRect();
             // Ajusta a posição relativa ao header
            setDivisorPosition({ left: rect.left - headerRect.left, width: rect.width });
        }
    };

    const handleMouseLeave = () => {
         if (navRef.current) {
            const firstButton = navRef.current.querySelector('.logo-header-btn');
            if (firstButton) {
                const rect = firstButton.getBoundingClientRect();
                const headerRect = navRef.current.parentElement.getBoundingClientRect();
                setDivisorPosition({ left: rect.left - headerRect.left, width: rect.width });
            }
        }
    };

    // 2. ADICIONADO: Função para abrir/fechar o menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para lidar com cliques nos itens do menu
    const handleNavClick = (component) => {
        setActiveComponent(component);
        setIsMenuOpen(false); // Fecha o menu ao clicar em um item
    };

    return (
        <header className='header-container'>
            {/* 3. ESTRUTURA AJUSTADA: Logo movido para fora da <nav> */}
            <div className='logo-header'>
                <button className='logo-header-btn' onClick={() => handleNavClick('Banner')}>
                    <img src={Logo} alt="Logo" />
                </button>
            </div>

            {/* 4. ADICIONADO: Ícone do menu hambúrguer (só aparece em telas pequenas via CSS) */}
            <button className='menu-icon' onClick={toggleMenu} aria-label="Abrir menu">
                &#9776; {/* Este é o código HTML para o ícone de hambúrguer ☰ */}
            </button>

            {/* 5. CLASSE DINÂMICA: Adiciona a classe 'active' quando isMenuOpen for true */}
            <nav 
                className={`header-container__nav ${isMenuOpen ? 'active' : ''}`}
                ref={navRef}
                onMouseLeave={handleMouseLeave}
            >
                <div onMouseEnter={handleMouseEnter}>
                    <button onClick={() => handleNavClick('Cursos')}>Cursos</button>
                </div>
                <div onMouseEnter={handleMouseEnter}>
                    <button onClick={() => handleNavClick('Contato')}>Contato</button>
                </div>
                <div onMouseEnter={handleMouseEnter}>
                    <button onClick={() => handleNavClick('Local')}>Local</button>
                </div>
                <div onMouseEnter={handleMouseEnter}>
                    <button onClick={() => handleNavClick('Servicos')}>Serviços</button>
                </div>
                <div className='header-container__nav__login-wrapper' onMouseEnter={handleMouseEnter}>
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