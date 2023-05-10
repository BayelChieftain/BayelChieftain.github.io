import React from "react";
import Profile from "./Profile";
import axios, * as others from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from "../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then( response => {          
               setUserProfile(response.data);
            });
    };

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile} />
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile
})

export default connect(mapStateToProps,
    {setUserProfile})(ProfileContainer) ;
 
