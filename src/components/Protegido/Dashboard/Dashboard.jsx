import React from 'react';


function Dashboard({ onLogout }) {
    return (
        <div className="plataforma">
            <h1>Bem-vindo à Plataforma</h1>
            <button onClick={onLogout}>Logout</button>
            <Dashboard />
        </div>
    );
}

export default Dashboard;