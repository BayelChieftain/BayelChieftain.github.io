
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
          newPostMessage: "text message"
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
          ]

    }
},
  getState() {
    return this._state
  },

  _callSubscribe() {
    console.log("state app")
 },

  addPost() {
  let newPost = {
     id: 5, message: this._state.profilePages.newPostText
  };
  this._state.profilePages.postData.push(newPost);
  this._state.profilePages.newPostText = ''
  this._callSubscribe(this._state);
},

  updateNewPostText(newText)  {
 
  this._state.profilePages.newPostText = newText;
  this._callSubscribe(this._state);
},
  
subscribe(observer)  {
  this._callSubscribe = observer;
}

};

//window.store = store;

export default store;