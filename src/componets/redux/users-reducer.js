const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = { 
    
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: false
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
              ...state, 
              users: state.users.map( (u) => {
                if (u.id === action.userId) {
                  return {...u, followed: true}
                };
                return u;
              })
            };
        case UNFOLLOW:
          return {
            ...state, 
            users: state.users.map( (u) => {
              if (u.id === action.userId) {
                return {...u, followed: false}
              };
              return u;
            })
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
         default:
             return state;
    }

};

export const follow = (userId) =>  ({type: FOLLOW, userId});

export const unFollow = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPages) => ({type: SET_CURRENT_PAGE, currentPages});

export const setTotalC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});

export const setIsFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING, isFetch});
 


export default usersReducer;