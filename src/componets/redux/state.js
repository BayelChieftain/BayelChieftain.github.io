 let renderEntireTree = () => {
  console.log("state app")
 }

let state = {
    
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
};

export const addPost = () => {
  let newPost = {
     id: 5, message: state.profilePages.newPostText
  };
  state.profilePages.postData.push(newPost);
  state.profilePages.newPostText = ''
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
 
  state.profilePages.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;