import { userAPI } from "../../API/api";
import { updateObjectInArray } from "../utilits/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = { 
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: false,
    followingProgres: []
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
              ...state,
              users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
          return {
            ...state, 
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
          };
          case SET_USERS: {
            return {...state, 
              users: action.users}
          };
          case SET_CURRENT_PAGE: {
            return {...state, 
              currentPages: action.currentPages}
          };
          case SET_TOTAL_COUNT: {
            return {...state, 
              totalUsersCount: action.count}
          };
          case TOGGLE_IS_FETCHING: {
            return {...state, 
              isFetching: action.isFetch}
          };
          case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
              ...state, 
              followingProgres: action.isFetch ?
                [...state.followingProgres, action.userId]
              : state.followingProgres.filter(id => id != action.userId)
            }
          };
         default:
             return state;
    }

};

export const followSuccess = (userId) =>  ({type: FOLLOW, userId});

export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPages) => ({type: SET_CURRENT_PAGE, currentPages});

export const setTotalC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});

export const setIsFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING, isFetch});

export const setIsFollowingProgres = (isFetch, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetch, userId});

export const getUsersThunkCreator = (currentPages,pageSize) =>  {
  
  return async (dispatch) => { 
  
  dispatch(setIsFetching(true)) 
  
 const data = await userAPI.getUsers(currentPages, pageSize);  //return promis
          dispatch(setIsFetching(false)) 
          dispatch(setUsers(data.items)) 
          dispatch(setTotalC(data.totalCount))
          dispatch(setCurrentPage(currentPages))  
};
};

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setIsFollowingProgres(true, userId)) 
  const data = await apiMethod(userId);
       if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
       };
       dispatch(setIsFollowingProgres(false, userId)); 
}

export const follow = (userId) =>  {
  
    return async (dispatch) => { 
    followUnfollow(dispatch, userId, userAPI.followPost.bind(userAPI), followSuccess);
    };
  };

    export const unfollow = (userId) =>  {
  
      return async (dispatch) => { 
        followUnfollow(dispatch, userId, userAPI.followDelete.bind(userAPI), unFollowSuccess);
        }
    };


export default usersReducer;