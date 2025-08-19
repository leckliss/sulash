import React, { useState } from 'react';
import './cursos.css'; // Corrigido

const CardCurso = ({ titulo, detalhes }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card-curso"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3>{titulo}</h3>
            <div className={`card-curso-detalhes ${isHovered ? 'visible' : ''}`}>
                <p>{detalhes}</p>
            </div>
        </div>
    );
};

function Cursos() {
    return (
        <div className="cursos-container">
            <h2>Nossos Cursos</h2>
            <div className="cards-container">
                <CardCurso
                    titulo="Lash Lifting"
                    detalhes="Aprenda a técnica que realça a curvatura natural dos cílios."
                />
                <CardCurso
                    titulo="Volume Brasileiro"
                    detalhes="Domine a técnica de volume com fios em formato de Y."
                />
                <CardCurso
                    titulo="Volume Russo"
                    detalhes="Crie um olhar denso e dramático com extensões de cílios."
                />
            </div>
        </div>
    );
}

export default Cursos;