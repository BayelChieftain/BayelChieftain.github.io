import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";
import Dialog from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesPages: state.messagesPages
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
let RedirectComponent = withAuthRedirect(Dialog)

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);

export default DialogContainer;