import React, { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'
import MessageItem from './MessageItem';

import ChatListItem from './ChatListItem';



import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';


export default ({user}) => {

        const body = useRef();




    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body:'Olá tudo bem?'},
        {author: 123, body:'qual a boa?'},
        {author: 1234, body:'Cara tá dificil aqui... rsrs'},
    ]);

    const [chatlist, setChatList] = useState([
 
        {
          chatId: 1,
          title: 'Mestre Kame',
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



    useEffect(() => {
            if(body.current.scrollHeight > body.current.offsetHeight) {
                body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight

            }
    }, [list]);


    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }
    
    


    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    //funcionalidade do microfone
    let recognition = null; 
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition()
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () =>{ //escuta ativada
                setListening(true)
            }
            recognition.onend = () => { //escuta desativada
                setListening(false)
            }
            recognition.onresult = (e) =>{
                setText(e.results[0][0].transcript)
            }

            recognition.start();

        }

    }

    const handleInputKeyUp = () => {
        // if(e.KeyCode ==13) {
        //     handleSendClick();  
        // }
    }
    const handleSendClick =() => {
      //  if(text !== '') - Faltou essa lógica =/
        
        
    }
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                
                <div className="chatWindow-headerInfo">
                {chatlist.map((item, key) => (
                    <div className="newChat-item" key={key}>
                        <img className="chatWindow-avatar" src={item.image} alt="" />
                        <div className="chatWindow-name">{item.name}</div>
                    </div>
                ))}
            </div>


                <div className="chatWindow-headerButtons">

                    <div className="chatWindow-btn">
                        <SearchIcon style={{ color: '#919191' }} />

                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{ color: '#919191' }} />

                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{ color: '#919191' }} />

                    </div>
                </div>
            </div>


            <div ref={body} className="chatWindow-body">
                {list.map((item, key) =>(
                    <MessageItem
                    key={key}
                    data={item}
                    user={user}

                    />

                ))}


            </div>
            <div className="chatWindow-emojiArea"
                style={{ height: emojiOpen ? '200px' : '0px' }}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div className="chatWindow-footer">
                <div
                    className="chatWindow-btn"
                    onClick={handleCloseEmoji}
                    style={{ width: emojiOpen ? 40 : 0 }}
                >
                    <CloseIcon style={{ color: '#919191' }} />
                </div>
                <div className="chatWindow-pre">
                    <div
                        className="chatWindow-btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>
                </div>
                <div className="chatWindow-inputArea">
                    <input
                        className="chatWindow-input"
                        type="text"
                        placeholder="Digite a LabMenssenger!"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindow-pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow-btn">
                            <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
                        </div>
                    }
                    {text !== '' &&
                        <div Onclick={handleSendClick} className="chatWindow-btn">
                            <SendIcon style={{ color: '#919191' }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}