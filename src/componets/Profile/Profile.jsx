import React from "react";
import ProfileInfo from "./ProfileItem/ProfileInfo";
import MyPostContainer from "./MypostsDir/MyPostCotainer";

const  Profile = (props) => {
    return  <div >
    <ProfileInfo profile={props.profile} isOwner={props.isOwner}
     status={props.status} updateStatus={props.updateStatus}
     savePhoto={props.savePhoto} />
    
    <MyPostContainer store={props.store}/>
    </div>
}

export default Profile;