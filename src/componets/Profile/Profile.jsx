import React from "react";
import c from './Profile.module.css'
import MyPost2 from "./MypostsDir/MyPosts2";
import ProfileInfo from "./ProfileItem/ProfileInfo";


const  Profile = (props) => {
    return  <div >
    <ProfileInfo />
    
    <MyPost2 postData={props.postData} 
    dispatch={props.dispatch} 
    
    newPostText={props.profilePages.newPostText}
    />


    </div>
}

export default Profile;