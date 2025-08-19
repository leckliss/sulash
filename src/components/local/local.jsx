import React from 'react';
import './local.css';
import LocalImage from '../../assets/imgs/home/imgPrincipal.svg'; // Substitua por uma imagem real

function Local() {
    return (
        <div className="local-container">
            <h2>Nosso Espaço</h2>
            <div className="local-conteudo">
                <img src={LocalImage} alt="Nosso Local" />
                <p>
                    Um ambiente aconchegante e preparado para te receber.
                    Localizado no coração da cidade, nosso estúdio é o lugar ideal para
                    cuidar da sua beleza e bem-estar.
                </p>
            </div>
        </div>
    );
}

export default Local;