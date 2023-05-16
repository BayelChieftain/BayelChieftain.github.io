import { profileAPI, userAPI } from "../../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    
    postData: [
        {id: 1, message: 'Hello world!'},
        {id: 2, message: "its my first post"},
        {id: 1, message: 'WORLD WORK'},
        {id: 1, message: 'samurai way'},
        {id: 1, message: '101 movie'},
      ],
    newPostText: "text post",
    profile: null,
    status: ''
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
         case SET_STATUS: 
         return {
          ...state,
          status: action.status
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

 const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => { // its THUNK FUNC
  userAPI.getProfile(userId)
  .then( response => {    
      dispatch(setUserProfile(response.data))
  });
};

export const getStatus = (userId) => (dispatch) => { // its THUNK FUNC
  profileAPI.getStatus(userId)
  .then( response => {    
      dispatch(setStatus(response.data))
  });
};

export const updateStatus = (status) => (dispatch) => { // its THUNK FUNC
  profileAPI.updateStatus(status)
  .then( response => {    
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
      
  });
};

export default profileReducer;
