import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import Cursos from '../../components/cursos/cursos';
import Contato from '../../components/contato/contato';
import Local from '../../components/local/local';
import Servicos from '../../components/servicos/servicos';

import './home.css';

function Home() {
    return (
        <div className='home'>
            <Header />
            <main>
                <Banner />
            </main>
            <Footer />
        </div>
    );
}

export default Home;