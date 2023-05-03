import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/profile-reducer";


const  MyPost2 = (props) => {

  let postElements = props.postData
  .map(post => <Post Message={post.message}/>);

  let newPostElement = React.createRef();
  
  let addPost = () => {
   
    props.dispatch(addPostCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
   // console.log(text)
  }

  return (
       <div className={c.PostBlock}>
        
        <h2>My post</h2>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>

     <div className={c.posts}>
     { postElements }
     </div>
    
    </div>
    )
}

export default MyPost2;