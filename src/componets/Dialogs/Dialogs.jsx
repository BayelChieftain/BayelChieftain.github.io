import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Messages";



const Dialog = (props) => {
    let state = props.messagesPages;
 
    let dialogElements = state.dialogData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElements = state.messagesData
        .map( m => <Messages  massage={m.message}/>);

    let newMessageBody = state.newMessageBody;
  
   
    let onSendMesageClick = () => {
        props.sendMessageCreator();
    }

    let onPostChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }

    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogElements} 
               
        </div>

        <div className={c.messages}>
           <div>{messageElements}</div> 
           <div> <textarea  onChange={ onPostChange } value={newMessageBody} placeholder="Enter your message"/> </div>
           <div>   <button onClick={ onSendMesageClick }>SEND</button></div>
        </div>
    </div>
    )
};

export default Dialog;