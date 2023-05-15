import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage, unfollow, setIsFollowingProgres, getUsersThunkCreator } from "../redux/users-reducer";
import Preloader from '../Preloader/Preloader';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class UsersAPIcomponent extends React.Component {    
    componentDidMount() {
       this.props.getUsers(this.props.currentPages, this.props.pageSize)
    };

    onPageChanged = (pageNumber) => {   
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        unfollow={this.props.unfollow}
        follow={this.props.follow}
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
        followingProgres: state.usersPages.followingProgres
    }
};

export default compose(
    withAuthRedirect,
    (connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setIsFollowingProgres, 
        // thunk 
       getUsers: getUsersThunkCreator
    }
    ))
)(UsersAPIcomponent)