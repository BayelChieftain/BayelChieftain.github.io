import React from "react";
import c from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Messages";


const Dialog = (props) => {
 
    let dialogElements = props.dialogData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElements = props.messagesData
        .map( m => <Messages  massage={m.message}/>)
 
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogElements} 
               
        </div>

        <div className={c.messages}>
            {messageElements}
        </div>
    </div>
    )
};

export default Dialog;