import React from 'react';
import Dashboard from '../../components/Protegido/Dashboard/Dashboard';


function Plataforma({ onLogout }) {
    return (
        <div className="plataforma">
            <h1>Bem-vindo à Plataforma</h1>
            <button onClick={onLogout}>Logout</button>
            <Dashboard />
        </div>
    );
}

export default Plataforma;