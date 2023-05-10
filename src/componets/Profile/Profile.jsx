import React from "react";
import c from './Profile.module.css'

import ProfileInfo from "./ProfileItem/ProfileInfo";
import MyPostContainer from "./MypostsDir/MyPostCotainer";

const  Profile = (props) => {
    return  <div >
    <ProfileInfo profile={props.profile} />
    <MyPostContainer store={props.store}/>


    </div>
}

export default Profile;