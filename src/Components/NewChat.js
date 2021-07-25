import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default ({ user, chatlist, show, setShow }) => {
    const [list, setList] = useState([
        { id: 100, avatar: 'https://criticalhits.com.br/wp-content/uploads/2021/06/Novo-Projeto-14-1-1.jpg', name: 'Vegeta' },
        { id: 101, avatar: 'http://pm1.narvii.com/6601/c542a7ce42842796d0f28d7da4614b880175c987_00.jpg', name: 'Gotrunks' },
        { id: 102, avatar: 'https://nerdhits.com.br/wp-content/uploads/2021/01/freeza-oxigenio.jpg', name: 'Freezinha Friend ' },
        { id: 103, avatar: 'https://sucodemanga.com.br/wp-content/uploads/2017/12/bulma-image.jpg', name: 'Bulma ♥' }

    ])

    const handleClose = () => {
        setShow(false);
    }



    return (
        <div className="newChat" style={{ left: show ? 0 : -415 }}>
            <div className="newChat-head">
                <div onClick={handleClose} className="newChat-backbutton">
                    <ArrowBackIcon style={{ color: '#FFF' }} />

                </div>
                <div className="newChat-headtitle">Nova Conversa</div>
            </div>
            <div className="newChat-list">
                {list.map((item, key) => (
                    <div className="newChat-item" key={key}>
                        <img className="newChat-itemavatar" src={item.avatar} alt="" />
                        <div className="newChat-itemname">{item.name}</div>
                    </div>
                ))}
            </div>


        </div>
    )
}