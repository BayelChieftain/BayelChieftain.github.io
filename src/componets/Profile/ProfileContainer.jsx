import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, updateStatus, getStatus, savePhoto } from "../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { compose } from "redux";

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class ProfileContainer extends React.Component {

    refresh() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 29025;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refresh();
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != this.props.match.params.userId){
        this.refresh(); 
    }
    }

    render() {
       
            return (
           <Profile {...this.props} isOwner={!this.props.match.params.userId}
           profile={this.props.profile} 
           status={this.props.status} 
           updateStatus={this.props.updateStatus}
           savePhoto={this.props.savePhoto} />
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status
});

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer);

    
 
