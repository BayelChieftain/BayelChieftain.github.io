import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleWare from 'redux-thunk';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    messagesPages: dialogsReducer,
    usersPages: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store;