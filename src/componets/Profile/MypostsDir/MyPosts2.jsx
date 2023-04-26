import React from "react";
 import c from './MyPosts.module.css'
import Post from "./Post";


const  MyPost2 = (props) => {

  let postElements = props.postData
  .map(post => <Post Message={post.message}/>);

  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
       <div className={c.PostBlock}>
        
        <h2>My post</h2>
        <div>
          <div>
            <textarea ref={ newPostElement }></textarea>
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