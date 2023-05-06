import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followCreator, setUsersAC, unFollowCreator } from "../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       follow: (userId) => {
        dispatch(followCreator(userId))
       },
       unfollow: (userId) => {
        dispatch(unFollowCreator(userId))
       },
       setUsers: (users) => {
        dispatch(setUsersAC(users))
       }
    }
}

 


export default connect(mapStateToProps, mapDispatchToProps)(Users);