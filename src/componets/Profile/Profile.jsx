import React from "react";
import c from './Profile.module.css'

import ProfileInfo from "./ProfileItem/ProfileInfo";
import MyPostContainer from "./MypostsDir/MyPostCotainer";

const  Profile = (props) => {
    return  <div >
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <MyPostContainer store={props.store}/>


    </div>
}

export default Profile;