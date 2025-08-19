import React from 'react';
import './contato.css';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

function Contato() {
    return (
        <div className="contato-container">
            <h2>Entre em Contato</h2>
            <p>Siga-nos nas redes sociais e agende seu horário!</p>
            <div className="redes-sociais">
                <a href="https://wa.link/sxlltm" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={48} />
                </a>
                <a href="https://www.instagram.com/sulashdesigner/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={48} />
                </a>
                <a href="https://www.facebook.com/sulashdesignerr" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={48} />
                </a>
            </div>
        </div>
    );
}

export default Contato;