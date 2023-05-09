import React from "react";
import axios, * as others from 'axios';
import { connect } from "react-redux";
import Users from "./Users";
import { followCreator, setCurrentPageAC, setTotalCAC, setUsersAC, unFollowCreator } from "../redux/users-reducer";

class UsersAPIcomponent extends React.Component {    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize }`)
            .then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCounts(response.data.totalCount)
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize }`)
            .then( response => {
                this.props.setUsers(response.data.items)
            });
    };
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPages={this.props.currentPages}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        
        /> 
    }
}


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

 


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIcomponent);