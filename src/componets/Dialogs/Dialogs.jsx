import React from "react";
import c from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Messages";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";


const Dialog = (props) => {
    let state = props.store.getState().messagesPages;
 
    let dialogElements = props.dialogData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElements = props.messagesData
        .map( m => <Messages  massage={m.message}/>);

    let newMessageBody = state.newMessageBody;
  
    let addText = React.createRef();
    
    let onSendMesageClick = () => {
        props.store.dispatch( sendMessageCreator() )
    }

    let onPostChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogElements} 
               
        </div>

        <div className={c.messages}>
           <div>{messageElements}</div> 
           <div> <textarea ref={addText} onChange={ onPostChange } value={newMessageBody} placeholder="Enter your message"/> </div>
           <div>   <button onClick={ onSendMesageClick } > SEND</button> </div>
        </div>
    </div>
    )
};

export default Dialog;