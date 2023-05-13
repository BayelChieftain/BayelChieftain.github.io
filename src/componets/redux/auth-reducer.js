import { authAPI } from "../../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}


 const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: 
        return  {
          ...state, 
          ...action.data,
          isAuth: true
          }
  
        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email,) => ({type: SET_USER_DATA, data: {id, login, email} });

export default authReducer;

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then( response => {    
    let {id, login, email} = response.data.data;
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(id, login, email));
    }
});
}