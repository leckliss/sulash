import React from 'react';
import './servicos.css';

function Servicos() {
    return (
        <div className="servicos-container">
            <h2>Nossos Serviços</h2>
            <div className="servico-item">
                <h3>Extensão de Cílios</h3>
                <p>Do clássico ao mega volume, temos a técnica perfeita para você.</p>
                <ul>
                    <li>Fio a Fio</li>
                    <li>Volume Brasileiro</li>
                    <li>Volume Russo</li>
                    <li>Mega Volume</li>
                </ul>
            </div>
            <div className="servico-item">
                <h3>Lash Lifting</h3>
                <p>Realce a curvatura natural dos seus cílios, sem a necessidade de extensões.</p>
            </div>
        </div>
    );
}

export default Servicos;