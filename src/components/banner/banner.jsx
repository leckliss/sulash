import ImgPrincipal from '../../assets/imgs/home/imgPrincipal.svg';

import { FaWhatsapp } from 'react-icons/fa';
import SplitText from "./SplitText";


import './banner.css';
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
export default function Banner() {
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
                        <button onClick={() => window.open('https://wa.link/sxlltm', '_blank')}>
                            <text  >AGENDAR SERVIÇO</text>
                            <FaWhatsapp size={36} color='#000' />
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
