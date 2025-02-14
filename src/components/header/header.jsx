import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/Logo.svg';
import './header.css';

export default function Header() {
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
                <div ref={logoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/cursos">CURSOS</Link>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/contato">CONTATO</Link>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/local">LOCAL</Link>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/servicos">SERVIÇOS</Link>
                </div>

                <div className='header-container__nav__login1' >
                    <Link className='header-container__nav__login2' to="/login">Entrar</Link>
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