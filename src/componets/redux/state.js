const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// cmd for dialogs pages
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
   _state: {
    
    profilePages: {
        postData: [
            {id: 1, message: 'Hello world!'},
            {id: 2, message: "its my first post"},
            {id: 1, message: 'WORLD WORK'},
            {id: 1, message: 'samurai way'},
            {id: 1, message: '101 movie'},
          ],
          newPostText: "text post",
         // newPostMessage: "text message"
    },
    
  
    messagesPages: {
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
},

  _callSubscribe() {
  console.log("state app")
},

  subscribe(observer)  {
  this._callSubscribe = observer;
},

  getState() {
    return this._state
  },


  dispatch(action) { // { type: "addPost" }
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5, message: this._state.profilePages.newPostText
     };
     this._state.profilePages.postData.push(newPost);
     this._state.profilePages.newPostText = ''
     this._callSubscribe(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePages.newPostText = action.newText;
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPages.newMessageBody = action.body;
      this._callSubscribe(this._state);

    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPages.newMessageBody;
      this._state.messagesPages.newMessageBody = '';
      this._state.messagesPages.messagesData.push( {id: 6, message: body} )

      this._callSubscribe(this._state);
    }
  } 
  

};

export const addPostCreator = () =>  ({type: ADD_POST});

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

//window.store = store;

export default store;