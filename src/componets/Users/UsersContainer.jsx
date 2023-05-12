import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage,  setIsFetching, setTotalC, setUsers, unFollow, setIsFollowingProgres } from "../redux/users-reducer";
import Preloader from '../Preloader/Preloader';
import { userAPI } from '../../API/api';

class UsersAPIcomponent extends React.Component {    
    componentDidMount() {
        this.props.setIsFetching(true)
       userAPI.getUsers(this.props.currentPages, this.props.pageSize)  //return promis
            .then( data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalC(data.totalCount)
            });
    };

    onPageChanged = (pageNumber) => {
        
        this.props.setIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then( data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
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
        setIsFollowingProgres={this.props.setIsFollowingProgres}
        followingProgres={this.props.followingProgres}
        
        
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
        isFetching: state.usersPages.isFetching,
        followingProgres: state.usersPages.followingProgres
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
    setIsFetching,
    setIsFollowingProgres
       
})(UsersAPIcomponent);