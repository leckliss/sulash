import React, { useState } from 'react';
import './local.css';

// Importe suas imagens aqui
import studio1 from '../../assets/imgs/local/studio1.jpg';
import studio2 from '../../assets/imgs/local/studio2.jpg';
import studio3 from '../../assets/imgs/local/studio3.jpg';

// Array com as imagens para a galeria e o modal
const images = [studio1, studio2, studio3];

function Local() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // Fecha o modal ao clicar no fundo
    const handleModalClick = (e) => {
        if (e.target.className === 'modal-overlay open') {
            closeModal();
        }
    };

    return (
        <section className="local-container">
            <h2>Nosso Espaço</h2>
            <p>Um ambiente preparado com carinho para te receber e realçar sua beleza.</p>

            <div className="gallery-wrapper">
                {/* Imagem principal (grande) */}
                <div className="gallery-item-large" onClick={() => openModal(images[0])}>
                    <img src={images[0]} alt="Studio Principal" />
                    <div className="media-overlay">+</div>
                </div>

                {/* Imagens secundárias (pequenas) */}
                <div className="gallery-item-small-container">
                    <div className="gallery-item-small" onClick={() => openModal(images[1])}>
                        <img src={images[1]} alt="Detalhe do Studio 1" />
                        <div className="media-overlay">+</div>
                    </div>
                    <div className="gallery-item-small" onClick={() => openModal(images[2])}>
                        <img src={images[2]} alt="Detalhe do Studio 2" />
                        <div className="media-overlay">+</div>
                    </div>
                </div>
            </div>

            {/* Modal (Lightbox) para expandir a imagem */}
            {selectedImage && (
                <div className={`modal-overlay open`} onClick={handleModalClick}>
                    <button className="close-button" onClick={closeModal}>×</button>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Imagem expandida" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Local;