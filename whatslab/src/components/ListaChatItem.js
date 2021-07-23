import React from 'react';
import './ListaChatItem.css';

export default () => {
    return (
        <div className="listaChatItem">
            <img className="listaChatItem-avatar" src="https://riscosystem.bss.design/assets/img/user.png" alt="" />
            <div className="listaChatItem-linhas">
                <div className="listaChatItem-linha">
                    <div className="listaChatItem-nome">Usuário de teste 1</div>
                    <div className="listaChatItem-data">19:00</div>
                </div>
                <div className="listaChatItem-linha">
                    <div className="listaChatItem-ultimaMgs">
                        <p>Opa, tudo bem?</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}