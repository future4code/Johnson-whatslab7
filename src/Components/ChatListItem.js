import React from  'react';
import './ChatListItem.css';



export default ({onClick, active}) => {
    return (
        <div
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className="chatListItem-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrlsl_tgdzBuuihc0J_Tc3MQI7BII45g8-g&usqp=CAU" alt="" />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">Chiquito Bacanudo</div>
                    <div className="chatListItem-date">19:00</div>

                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Opa.! Tudo bem? E ai qual é a boa? o que ki ta pegando? Qual é o pé do frango? rrsrsrs</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}