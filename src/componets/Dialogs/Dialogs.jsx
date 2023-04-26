import React from "react";
import c from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Messages";


const Dialog = (props) => {
 
    let dialogElements = props.dialogData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElements = props.messagesData
        .map( m => <Messages  massage={m.message}/>);

    let addText = React.createRef();
    
    let alertText = () => {
        let text = addText.current.value;
        alert(text);
    }
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogElements} 
               
        </div>

        <div className={c.messages}>
            {messageElements}
            <textarea ref={addText}></textarea>
            <button onClick={ alertText }> click click</button>
        </div>
    </div>
    )
};

export default Dialog;