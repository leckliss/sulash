import ImgPrincipal from '../../assets/imgs/home/imgPrincipal.svg';
import { FaWhatsapp } from 'react-icons/fa';
import SplitText from "./SplitText";
import './banner.css';
import { useState } from 'react';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function Banner() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const iconColor = isHovered ? '#fff' : '#000';

    // Movido o estilo para o CSS para melhor organização
    return (
        <main>
            <section className='introduction-container'>
                <div className='introduction-container__actions-container'>
                    <SplitText
                        text="Oi Amiga!"
                        className="split-text-title"
                        delay={130}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeInOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <h1>Marque sua sessão comigo hoje mesmo!</h1>
                    <button
                        className="whatsapp-button" // Adicionada classe para estilização
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => window.open('https://wa.link/sxlltm', '_blank')}
                    >
                        <span>AGENDAR SERVIÇO</span>
                        <FaWhatsapp size={36} color={iconColor} />
                    </button>
                </div>
                <div className='introduction-container__img-container'>
                    <img src={ImgPrincipal} alt="Banner Principal" />
                </div>
            </section>
        </main>
    );
}