import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";
import Dialog from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPages: state.messagesPages,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
             dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
             dispatch( sendMessageCreator() )
        }
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;