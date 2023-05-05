const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: "dimych"},
        {id: 2, name: "any"},
        {id: 3, name: "banan"},
        {id: 4, name: "bobrik"},
        {id: 5, name: "bayelPro"},
        {id: 6, name: "hitler"}
      ],
    messagesData: [
        {id: 1, message: "boberrr"},
        {id: 2, message: "hi im roza"},
        {id: 3, message: "mimozochka"},
        {id: 4, message: "bobrik"},
        {id: 5, message: "bayel crossavchik"} 
      ],
      newMessageBody: ''

}


 const dialogsReducer = (state = initialState, action) => {


  

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
        return  {...state, newMessageBody: action.body}
    
        case SEND_MESSAGE: 
          let body = state.newMessageBody;
        return  {
            ...state,
             messagesData: [...state.messagesData, {id: 6, message: body} ],
             newMessageBody: '',
            };
          
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;