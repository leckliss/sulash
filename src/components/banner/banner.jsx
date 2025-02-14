import ImgPrincipal from '../../assets/imgs/home/imgPrincipal.svg';

import { FaWhatsapp} from 'react-icons/fa';


import './banner.css';

export default function Banner() {
    return (
       <>
        
        <main>
            <section className='introduction-container'>
                <div className='introduction-container__actions-container'>
                    <h1>MARQUE SUA SESSÃO COMIGO HOJE MESMO</h1>
                    <button>
                        AGENDAR SERVIÇO 
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
