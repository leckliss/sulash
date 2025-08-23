import React from 'react';
import './servicos.css';
import { FaPix, FaMoneyBillWave, FaCreditCard, FaLandmark } from 'react-icons/fa6';

// Dados dos serviços extraídos das imagens
const servicos = {
  "Extensão de Cílios": [
    { nome: "Fio Clássico", valor: "R$160,00" },
    { nome: "Fio Luxo", valor: "R$190,00" },
    { nome: "Volume Brasileiro", valor: "R$145,00" },
    { nome: "Volume Brasileiro Marrom", valor: "R$160,00" },
    { nome: "Mega Brasileiro", valor: "R$170,00" },
    { nome: "Volume Egípcio", valor: "R$180,00" },
    { nome: "Volume Híbrido", valor: "R$160,00" },
    { nome: "Volume Russo", valor: "R$180,00" },
    { nome: "Mega Volume", valor: "R$200,00" },
    { nome: "Volume Fox Eyes (Efeito Syrena)", valor: "R$180,00" },
    { nome: "Volume Fox Eyes (Efeito Delineado)", valor: "R$200,00" }
  ],
  "Manutenção (até 20 dias)": [
    { nome: "Fio Clássico", valor: "R$100,00" },
    { nome: "Fio Luxo", valor: "R$140,00" },
    { nome: "Volume Híbrido", valor: "R$90,00" },
    { nome: "Volume Brasileiro", valor: "R$90,00" },
    { nome: "Volume Brasileiro Marrom", valor: "R$100,00" },
    { nome: "Volume Russo Clássico", valor: "R$110,00" },
    { nome: "Mega Volume Russo", valor: "R$140,00" },
    { nome: "Volume Efeito Syrena", valor: "R$100,00" },
    { nome: "Volume Fox Eyes", valor: "R$110,00" },
    { nome: "Volume Russo Marrom", valor: "R$110,00" },
    { nome: "Volume Egípcio", valor: "R$110,00" },
    { nome: "Remoção", valor: "R$50,00" },
    { nome: "Lash Lifting", valor: "R$120,00" }
  ]
};

function Servicos() {
    return (
        <section className="servicos-container">
            <h2>Catálogo de Serviços</h2>
            <p className="servicos-descricao">Confira nossos valores para aplicação e manutenção.</p>

            <div className="tabelas-wrapper">
                {Object.entries(servicos).map(([categoria, itens]) => (
                    <div key={categoria} className="tabela-servicos">
                        <h3>{categoria}</h3>
                        <ul>
                            {itens.map((item, index) => (
                                <li key={index}>
                                    <span>{item.nome}</span>
                                    <span className="valor">{item.valor}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            <div className="manutencao-aviso">
                <p><strong>Atenção:</strong> O valor da manutenção é válido apenas até 20 dias após a data da aplicação. É necessário que os fios estejam higienizados e com 40% dos fios sintéticos, caso contrário será cobrado o valor de uma nova colocação.</p>
            </div>

            <div className="pagamento-container">
                <h3>Aceitamos</h3>
                <div className="formas-pagamento">
                    <span><FaPix /> Pix</span>
                    <span><FaLandmark /> Transferência</span>
                    <span><FaMoneyBillWave /> Dinheiro</span>
                    <span><FaCreditCard /> Crédito*</span>
                    <span><FaCreditCard /> Débito</span>
                </div>
                <p className="pagamento-aviso">*Consulte a taxa em caso de parcelamento. Para atendimentos a domicílio, consulte os valores e taxas.</p>
            </div>
        </section>
    );
}

export default Servicos;