import React from "react";
import c from './Profile.module.css'
import MyPost2 from "./MypostsDir/MyPosts2";
import ProfileInfo from "./ProfileItem/ProfileInfo";


const  Profile = (props) => {
    return  <div >
    <ProfileInfo />
    
    <MyPost2 postData={props.postData} addPost={props.addPost} 
    newPostText={props.newPostText}
    updateNewPostText={props.updateNewPostText}/>


    </div>
}

export default Profile;