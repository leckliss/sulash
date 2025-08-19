import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import Cursos from '../../components/cursos/cursos';
import Contato from '../../components/contato/contato';
import Local from '../../components/local/local';
import Servicos from '../../components/servicos/servicos';
import './home.css';

function Home() {
    // 1. Estado para controlar o componente ativo
    const [activeComponent, setActiveComponent] = useState('Banner');

    // 2. Função para renderizar o componente correto
    const renderComponent = () => {
        switch (activeComponent) {
            case 'Cursos':
                return <Cursos />;
            case 'Contato':
                return <Contato />;
            case 'Local':
                return <Local />;
            case 'Servicos':
                return <Servicos />;
            // Por padrão, mostra o Banner
            default:
                return <Banner />;
        }
    };

    return (
        <div className='home'>
            {/* 3. Passamos a função para o Header poder alterar o estado */}
            <Header setActiveComponent={setActiveComponent} />
            <main>
                {/* 4. Chamamos a função que renderiza o componente ativo */}
                {renderComponent()}
            </main>
            <Footer />
        </div>
    );
}

export default Home;