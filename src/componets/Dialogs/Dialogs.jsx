import React from "react";
import c from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Messages";


const Dialog = (props) => {
 
    // let dialogData = [
    //     {id: 1, name: "dimych"},
    //     {id: 2, name: "any"},
    //     {id: 3, name: "banan"},
    //     {id: 4, name: "bobrik"},
    //     {id: 5, name: "bayelPro"},
    //     {id: 6, name: "hitler"}
    // ];

    // let MessagesData = [
    //     {id: 1, message: "boberrr"},
    //     {id: 2, message: "hi im roza"},
    //     {id: 3, message: "mimozochka"},
    //     {id: 4, message: "bobrik"},
    // ];

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