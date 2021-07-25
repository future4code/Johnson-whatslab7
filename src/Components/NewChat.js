import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://criticalhits.com.br/wp-content/uploads/2021/06/Novo-Projeto-14-1-1.jpg', nome:'Vegeta'},
        {id: 123, avatar: 'https://criticalhits.com.br/wp-content/uploads/2021/06/Novo-Projeto-14-1-1.jpg', nome:'Vegeta'},
        {id: 123, avatar: 'https://criticalhits.com.br/wp-content/uploads/2021/06/Novo-Projeto-14-1-1.jpg', nome:'Vegeta'},
        {id: 123, avatar: 'https://criticalhits.com.br/wp-content/uploads/2021/06/Novo-Projeto-14-1-1.jpg', nome:'Vegeta'}

    ]);

    const handleClose = () => {
        setShow(false);
    }
    
    

    return (
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat-head">
                <div onClick={handleClose} className="newChat-backbutton">
                    <ArrowBackIcon style={{color: '#FFFFF'}} />

                </div>
                <div className="newChat-headtitle">Nova Conversa</div>
                <div className="newChat-list">
                    {list.map((item, key)=>(
                        <div className="newChat-item" key={key}>
                            <img className="newChat-itemavatar" src={item.avatar} alt="" />
                            <div className="newChat-itemname">{item.name}</div>
                        </div>
                    ))};
                </div>
             
            </div>
        </div>                
    )
}