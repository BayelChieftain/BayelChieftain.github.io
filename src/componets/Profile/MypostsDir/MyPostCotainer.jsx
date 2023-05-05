import MyPost2 from "./MyPosts2"
import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/profile-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePages.postData,
        newPostText: state.profilePages.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost2);

export default MyPostContainer;