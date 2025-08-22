import React, { useState } from 'react';
import './cursos.css'; // Corrigido

const CardCurso = ({ titulo, formato, detalhes }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card-curso"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3>{titulo}</h3>
            <p>{formato}</p>
            <div className={`card-curso-detalhes ${isHovered ? 'visible' : ''}`}>
                <p>{detalhes}</p>
            </div>
        </div>
    );
};

function Cursos() {
    return (
        <div className="cursos-container">
            <h2>Por onde começar a aprender?</h2>
            <div className="cards-container">
                <CardCurso
                    titulo="Apostila"
                    formato="PDF"
                    detalhes="Aprenda as técnicas de extensão de cílios com essa apostila completa."
                />
                <CardCurso
                    titulo="Curso Para Iniciantes"
                    formato="Online"
                    detalhes="Curso com aulas online gravadas por mim e inclui a apostila em PDF."
                />
            </div>
        </div>
    );
}

export default Cursos;