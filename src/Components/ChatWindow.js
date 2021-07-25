import { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'
import MessageItem from './Components/MessageItem';

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
        {author: 123, body:'Bla bla bla bla bla bla'},
        {author: 123, body:'Bla bla bla '},
        {author: 1234, body:'Bla bla bla bla '},
    ]);

    useEffect(() => {
            if(body.currrent.scrolHeight > body.currrent.scrolHeight) {
                body.currrent.scrolTop = body.currrent.scrolHeight - body.currrent.offsetHeight

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
    const handleSendClick =() => {
        
    }
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerInfo">
                    <img className="chatWindow-avatar" src="https://image.flaticon.com/icons/png/512/21/21104.png" alt="foto-usuário" />
                    <div className="chatWindow-name">Johnson Lab</div>
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