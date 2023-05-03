import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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

    this._state.profilePages = profileReducer(this._state.profilePages, action);
    this._state.messagesPages = dialogsReducer(this._state.messagesPages, action);

    // subscribe
    this._callSubscribe(this._state);
  } 
  
};

//window.store = store;

export default store;