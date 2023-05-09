import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followCreator, setCurrentPageAC, setTotalCAC, setUsersAC, unFollowCreator } from "../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPages: state.usersPages.currentPages
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
       },
       setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
       },
       setTotalCounts: (totalCount) => {
        dispatch(setTotalCAC(totalCount))
       }
    }
}

 


export default connect(mapStateToProps, mapDispatchToProps)(Users);