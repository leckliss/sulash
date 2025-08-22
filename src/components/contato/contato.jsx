import React from 'react';
import { FaInstagram, FaThList, FaMagic, FaPaintBrush, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import ProfileImage from '../../assets/imgs/contato/sulashprofile.jpg'; // Use uma imagem de perfil sua aqui
import './contato.css';

// Componente para cada link individual
const LinkButton = ({ icon, text, number, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-button">
        <div className="link-button-content">
            {icon}
            <span>{text}</span>
        </div>
        <span className="link-button-number">{number}</span>
    </a>
);

function Contato() {
    return (
        <section className="contato-container">
            <header className="contato-header">
                <img src={ProfileImage} alt="Su Lash Designer" className="profile-image" />
                <h1>Su Lash Designer</h1>
                <p>APAIXONADA POR REALÇAR OLHARES ✨</p>
                <a href="https://www.instagram.com/sulashdesigner/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
                    <FaInstagram size={28} />
                </a>
            </header>

            <div className="contato-links">
                {/* Abaixo, substitua '#' pelos seus links reais */}
                <LinkButton
                    icon={<FaThList size={24} />}
                    text="CATÁLOGO DOS PROCEDIMENTOS"
                    number="01"
                    href="https://wa.me/p/6139859919407792/5511981072746"
                />
                <LinkButton
                    icon={<FaMagic size={24} />}
                    text="ALONGAMENTO DE CÍLIOS"
                    number="02"
                    href="https://wa.me/5511981072746?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+agendamentos.+%F0%9F%A5%B0"
                />
                <LinkButton
                    icon={<FaPaintBrush size={24} />}
                    text="DESIGN/HENNA"
                    number="03"
                    href="https://wa.me/5511981072746?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+design+de+sobrancelhas.+%F0%9F%A5%B0"
                />
                <LinkButton
                    icon={<FaGraduationCap size={24} />}
                    text="CURSO DE EXTENSÃO FIO A FIO INICIANTE"
                    number="04"
                    href="https://wa.me/5511981072746?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+Curso+de+Extens%C3%A3o+de+C%C3%ADlios+Iniciante%21+%E2%9D%A4%EF%B8%8F+"
                />
                <LinkButton
                    icon={<FaMapMarkerAlt size={24} />}
                    text="LOCALIZAÇÃO"
                    number="05"
                    href="https://maps.app.goo.gl/SH5bEQMAcR1MxW5M6"
                />
            </div>
        </section>
    );
}

export default Contato;