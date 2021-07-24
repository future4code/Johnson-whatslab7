import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './Components/ChatWindow';
import ChatListItem from './Components/ChatListItem';
import ChatIntro from './Components/ChatIntro';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';





export default () => {
  const [chatlist, setChatList] = useState([
 
    {
      chatId: 1,
      title: 'Fulano de Tal',
      image: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png", alt="foto-usuário'
    },
    {
      chatId: 2,
      title: 'Beltrano',
      image: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png", alt="foto-usuário'
    },
    {
      chatId: 3,
      title: 'Jaspion',
      image: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png", alt="foto-usuário'
    },
    {
      chatId: 4,
      title: 'Majin Boo',
      image: 'https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png", alt="foto-usuário'
    },



  ]);

  const [activeChat, setActiveChat] = useState({});
  return (
    <div className="app-window">

      <div className="sidebar">

        <header>
          <img className="header-avatar" src="https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png" alt="foto-usuário" />
          
          <div className="header-buttons">

            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />

            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: "#919191" }} />

            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />

            </div>

          </div>

        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}

              onClick={() => setActiveChat(chatlist[key])}

            />

          ))}


        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }

      </div>
    </div>

  );
}