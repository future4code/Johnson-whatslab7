import React from 'react';
import './ChatIntro.css';
import connectImg from  '../img/connect.png';

export default () =>{
    return(
        <div className="chatIntro">
            <img src= {connectImg} alt="Logo com sinal de Wi-Fi" />
            <h1> Mantenha seu celular conectado</h1>
            <h2>O WhatsLab conecta ao seu LabFone para sinconizar suas mensagens. <br/> Para reduzir o uso de dados, conecte seu LabFone em uma rede Wi-Fi. </h2>
            

        </div>
    );
}