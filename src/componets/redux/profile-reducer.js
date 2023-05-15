import { userAPI } from "../../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    
    postData: [
        {id: 1, message: 'Hello world!'},
        {id: 2, message: "its my first post"},
        {id: 1, message: 'WORLD WORK'},
        {id: 1, message: 'samurai way'},
        {id: 1, message: '101 movie'},
      ],
    newPostText: "text post",
    profile: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
          let newPost = {
              id: 5, message: state.newPostText
          };
          let stateCopy = {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: ''
          };
         return stateCopy
        
         case UPDATE_NEW_POST_TEXT: 
         return {
          ...state,
          newPostText: action.newText
         };
         case SET_USER_PROFILE: 
         return {
          ...state,
          profile: action.profile
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
 
 const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => { // its THUNK FUNC
  userAPI.getProfile(userId)
  .then( response => {    
      dispatch(setUserProfile(response.data))
  });
} 

export default profileReducer;
