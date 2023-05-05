const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    
    postData: [
        {id: 1, message: 'Hello world!'},
        {id: 2, message: "its my first post"},
        {id: 1, message: 'WORLD WORK'},
        {id: 1, message: 'samurai way'},
        {id: 1, message: '101 movie'},
      ],
    newPostText: "text post"
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
        let newPost = {
            id: 5, message: state.newPostText
         };
         let stateCopy = {...state}
         stateCopy.postData = [...state.postData];
         stateCopy.postData.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy
        }
         case UPDATE_NEW_POST_TEXT: {
         let stateCopy = {...state}
         stateCopy.newPostText = action.newText;
         return stateCopy
         }
         default:
             return state;
    }

};

export const addPostCreator = () =>  ({type: ADD_POST});

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export default profileReducer;