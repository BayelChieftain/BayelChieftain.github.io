import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post";



const  MyPost2 = React.memo(props => {

  let postElements = props.postData
  .map(post => <Post Message={post.message}/>);

  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
       <div className={c.PostBlock}>
        
        <h2>My post</h2>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
          </div>
          <div>
            <button onClick={ onAddPost }>Add post</button>
          </div>
        </div>

     <div className={c.posts}>
     { postElements }
     </div>
    
    </div>
    )
})

export default MyPost2;