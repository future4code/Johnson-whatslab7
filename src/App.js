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
      title: 'Meste Kame',
      image: 'https://cdn.colab55.com/images/5501/studio/53170/art/101282/stickers.png', alt: "foto-mestre-Kame"
    },
    {
      chatId: 2,
      title: 'Gohan',
      image: 'http://pm1.narvii.com/6274/0d98e8638503d663162d2d6a5952a5e83dd8cce9_00.jpg', alt: "foto-Gohan"
    },
    {
      chatId: 3,
      title: 'Picolo',
      image: 'http://pm1.narvii.com/6490/9410e324f560c606cf2919178a8d0183e17f3bd1_00.jpg', alt: "foto-Picolo"
    },
    {
      chatId: 4,
      title: 'Goku',
      image: 'https://pbs.twimg.com/profile_images/3122936626/bf92ef8c8ca73f3e75a78084fe6de0f9.jpeg', alt: "foto-Goku"
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