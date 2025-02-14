import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Plataforma from './pages/plataforma/plataforma';
import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Função para simular o login
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    // Função para simular o logout
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                {/* Rota pública (Home) */}
                <Route path="/" element={<Home />} />

                {/* Rotas de autenticação */}
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route
                    path="/cadastro"
                    element={<Cadastro onLogin={handleLogin} />}
                />

                {/* Rota protegida (Plataforma) */}
                <Route
                    path="/plataforma"
                    element={
                        isAuthenticated ? (
                            <Plataforma onLogout={handleLogout} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;