import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";
import Dialog from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";


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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialog);