import MyPost2 from "./MyPosts2"
import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/profile-reducer";

const MyPostContainer = (props) => {
    
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostCreator());
    };
  
    let postChange = (text) => {
      let action = updateNewPostTextCreator(text);
      props.store.dispatch(action)
    };
  
    return (
        <MyPost2 updateNewPostText={ postChange} addPost={addPost} postData={state.profilePages.postData} newPostText={state.profilePages.newPostText} />
    )
};
export default MyPostContainer;