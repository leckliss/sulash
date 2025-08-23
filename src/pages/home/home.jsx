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
    const [activeComponent, setActiveComponent] = useState('Contato');

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
            case 'Banner':
                return <Banner />;
            // Por padrão, mostra o Contato
            default:
                return <Contato />;
        }
    };

    return (
        <div className="site-container">
            <div className="content-wrap">
                <Header setActiveComponent={setActiveComponent} />
                <main>
                    {renderComponent()}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Home;