import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";
import Dialog from "./Dialogs";


const DialogContainer = (props) => {
    let state = props.store.getState().messagesPages;
    
    let onSendMesageClick = () => {
        props.store.dispatch( sendMessageCreator() )
    }

    let onPostChange = (body) => {
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialog updateNewMessageBody={onPostChange} sendMessageCreator={onSendMesageClick} messagesPages={state} />
};

export default DialogContainer;