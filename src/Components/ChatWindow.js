import React from 'react'
import './ChatWindow.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
  
export default () =>{
    return (
        <div className="chatWindow">
           <div className="chatWindow--header">
                
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png" alt="Foto perfil" />
                    <div className="chatWindow--name">Chiquinho Bacanudo </div>               
                </div>

                <div className="chatWindow--headerbuttons">
                    
                    <div className="chatWindow--btn">
                        <SearchIcon styled={{color: "#919191"}} />
                    </div>

                    <div className="chatWindow--btn">
                        <AttachFileIcon styled={{color: "#919191"}} />
                    </div>

                    <div className="chatWindow--btn">
                        <MoreVertIcon styled={{color: "#919191"}} />
                    </div>


                </div>

           </div>
           <div className="chatWindow--body">
               
               </div> 

           <div className="chatWindow--footer">
 
               <div className="chatWindow--pre">
                   <div className="chatWindow--btn">
                   <InsertEmoticonIcon styled={{color: "#919191"}} />  
                   </div> 

               </div>

               <div className="chatWindow--inputarea">


               </div>

               <div className="chatWindow--pos">
                   <div className="chatWindow--btn">
                   <CloseIcon styled={{color: "#919191"}} />  
                   </div>

               </div>


           </div>

        </div>
    );
}