import React from 'react';
import axios, * as others from 'axios';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage,  setIsFetching, setTotalC, setUsers, unFollow } from "../redux/users-reducer";
import Preloader from '../Preloader/Preloader';

class UsersAPIcomponent extends React.Component {    
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize }`, {
            withCredentials: true
        })
            .then( response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalC(response.data.totalCount)
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize }`, {
            withCredentials: true
        })
            .then( response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    };
    render() {
        return <>
        {this.props.isFetching ? 
        <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPages={this.props.currentPages}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unFollow}
        follow={this.props.follow}
        
        
        /> 
        </> 
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPages: state.usersPages.currentPages,
        isFetching: state.usersPages.isFetching
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//        follow: (userId) => {
//         dispatch(followCreator(userId))
//        },
//        unfollow: (userId) => {
//         dispatch(unFollowCreator(userId))
//        },
//        setUsers: (users) => {
//         dispatch(setUsersAC(users))
//        },
//        setCurrentPage: (pageNumber) => {
//         dispatch(setCurrentPageAC(pageNumber))
//        },
//        setTotalCounts: (totalCount) => {
//         dispatch(setTotalCAC(totalCount))
//        },
//        setIsFetching: (isFetch) => {
//         dispatch(setIsFetchingAC(isFetch))
//        }
//     }
// }
export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalC,
    setIsFetching
       
})(UsersAPIcomponent);