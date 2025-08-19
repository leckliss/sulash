import ImgPrincipal from '../../assets/imgs/home/imgPrincipal.svg';
import { FaWhatsapp } from 'react-icons/fa';
import SplitText from "./SplitText";
import './banner.css';
import { useState } from 'react'; // Importe o useState

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

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '4rem',
        fontWeight: 'bold',
        borderRadius: '3rem',
        gap: '3.125rem',
        padding: '1.25rem 4.75rem',
        border: '0.40rem solid #fff',
        backgroundColor: isHovered ? '#000' : '#fff',
        color: isHovered ? '#fff' : '#000',
        transition: 'background-color 0.5s ease, color 0.5s ease',
    };

    const iconColor = isHovered ? '#fff' : '#000';

    return (
        <>
            <main>
                <section className='introduction-container'>
                    <div className='introduction-container__actions-container'>
                        <SplitText
                            text="Oi Amiga!"
                            className="text-2xl font-semibold text-center"
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
                            style={buttonStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => window.open('https://wa.link/sxlltm', '_blank')}
                        >
                            <text>AGENDAR SERVIÇO</text>
                            <FaWhatsapp size={36} color={iconColor} />
                        </button>
                    </div>
                    <div className='introduction-container__img-container'>
                        <img src={ImgPrincipal} />
                    </div>
                </section>
            </main>
        </>
    );
}