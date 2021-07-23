import React, { useState, useEffect } from 'react';
import './App.css';
import ListaChatItem from './components/ListaChatItem';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

    const [listachat, setChatList] = useState([{},{},{},{}]);
  return (
      <div className="app-janela">
          <div className="barra-lateral">
              
              
              <header>
                  <img className="header-avatar" src="https://riscosystem.bss.design/assets/img/user.png" alt="" />
                  <div className="header-buttons">
                      <div className="header-bnt">
                          <DonutLargeIcon style={{color: '#919191'}} />
                      </div>
                      <div className="header-bnt">
                          <ChatIcon style={{color: '#919191'}} />
                      </div>
                      <div className="header-bnt">
                          <MoreVertIcon style={{color: '#919191'}} />
                      </div>
                  </div>
              </header>
              
              
              <div className="busca">
                  <div className="busca-input">
                    <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                    <input type="search" placeholder="Procurar ou comecar nova conversa" />
                  </div>
              </div>
              
              
              <div className="listaChat">
                  {ListaChatItem.map((item, key)=>(
                      <ListaChatItem  
                        key={key}
                      />
                  ))};
              </div>
          </div>
          <div className="conteudo-area">
              ...
          </div>
      </div>
  );
}

